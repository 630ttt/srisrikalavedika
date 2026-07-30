import express from 'express';
import path from 'path';
import fs from 'fs';
import Publication from '../models/Publication.js';
import Notification from '../models/Notification.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

function createNotification(type, title, message, relatedType, relatedId) {
  return Notification.create({ type, title, message, relatedType, relatedId });
}

router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find().sort({ created_on: -1 });
    res.json({ publications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch publications' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ error: 'Publication not found' });
    res.json({ publication });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch publication' });
  }
});

router.post('/', requireAdmin, async (req, res) => {
  try {
    const { title, description } = req.body || {};
    if (!title || !description || !req.file) {
      return res.status(400).json({ error: 'Title, description, and image are required' });
    }

    const imageUrl = `/uploads/${path.basename(req.file.path)}`;
    const publication = await Publication.create({
      title,
      description,
      image_url: imageUrl,
    });

    await createNotification(
      'publication',
      'Publication added',
      `Publication created: ${publication.title}`,
      'publication',
      publication._id.toString()
    );

    res.json({ publication });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create publication' });
  }
});

router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ error: 'Publication not found' });

    const { title, description } = req.body || {};
    if (title) publication.title = title;
    if (description) publication.description = description;

    if (req.file) {
      const imagePath = path.join(process.cwd(), 'uploads', path.basename(publication.image_url));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
      publication.image_url = `/uploads/${path.basename(req.file.path)}`;
    }

    publication.updated_on = new Date();
    await publication.save();

    await createNotification(
      'publication',
      'Publication updated',
      `Publication updated: ${publication.title}`,
      'publication',
      publication._id.toString()
    );

    res.json({ publication });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update publication' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ error: 'Publication not found' });

    const imagePath = path.join(process.cwd(), 'uploads', path.basename(publication.image_url));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await publication.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete publication' });
  }
});

export default router;

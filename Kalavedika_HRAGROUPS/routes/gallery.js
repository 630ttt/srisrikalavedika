import express from 'express';
import path from 'path';
import fs from 'fs';
import GalleryImage from '../models/GalleryImage.js';
import Notification from '../models/Notification.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

function createNotification(type, title, message, relatedType, relatedId) {
  return Notification.create({ type, title, message, relatedType, relatedId });
}

router.get('/', async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ uploaded_on: -1 });
    res.json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
});

router.post('/upload', requireAdmin, async (req, res) => {
  try {
    const files = req.files || [];
    const items = [];
    for (const file of files) {
      const imageUrl = `/uploads/${path.basename(file.path)}`;
      const item = await GalleryImage.create({
        filename: file.filename,
        image_url: imageUrl,
        original_name: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      });
      items.push(item);
      await createNotification(
        'gallery',
        'New gallery image uploaded',
        `Uploaded: ${file.originalname}`,
        'gallery',
        item._id.toString()
      );
    }
    res.json({ uploaded: items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    const imagePath = path.join(process.cwd(), 'uploads', path.basename(image.image_url));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await image.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

export default router;

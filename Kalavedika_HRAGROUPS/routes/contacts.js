import express from 'express';
import ContactMessage from '../models/ContactMessage.js';
import Notification from '../models/Notification.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

function createNotification(type, title, message, relatedType, relatedId) {
  return Notification.create({ type, title, message, relatedType, relatedId });
}

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    const contact = await ContactMessage.create({
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message,
    });

    await createNotification(
      'contact',
      'New contact enquiry',
      `Message from ${name}`,
      'contact',
      contact._id.toString()
    );

    res.json({ success: true, message: 'Message submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit contact message' });
  }
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const contacts = await ContactMessage.find().sort({ submitted_on: -1 });
    res.json({ contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
});

router.put('/:id/read', requireAdmin, async (req, res) => {
  try {
    const contact = await ContactMessage.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact message not found' });
    contact.status = 'Read';
    await contact.save();
    res.json({ contact, message: 'Message marked as read' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update message status' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const contact = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact message not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete contact message' });
  }
});

export default router;

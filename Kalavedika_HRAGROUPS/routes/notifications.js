import express from 'express';
import Notification from '../models/Notification.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', requireAdmin, async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ created_on: -1 });
    const unreadCount = await Notification.countDocuments({ read: false });
    res.json({ notifications, unreadCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

router.put('/read/:id', requireAdmin, async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    notification.read = true;
    await notification.save();
    res.json({ notification, message: 'Notification marked read' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
});

export default router;

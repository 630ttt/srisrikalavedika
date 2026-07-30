import express from 'express';
import Membership from '../models/Membership.js';
import ContactMessage from '../models/ContactMessage.js';
import Notification from '../models/Notification.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

function createNotification(type, title, message, relatedType, relatedId) {
  return Notification.create({ type, title, message, relatedType, relatedId });
}

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, city_state, membership_type, occupation, about } = req.body || {};
    if (!name || !email || !phone || !membership_type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const membership = await Membership.create({
      name,
      email,
      phone,
      city_state: city_state || '',
      membership_type,
      occupation: occupation || '',
      about: about || '',
    });

    await createNotification(
      'membership',
      'New membership application',
      `New application from ${name}`,
      'membership',
      membership._id.toString()
    );

    res.json({ id: membership._id.toString(), message: 'Membership application received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit membership' });
  }
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ submitted_on: -1 });
    res.json({ memberships });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch memberships' });
  }
});

router.get('/:id', requireAdmin, async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json({ membership });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch membership' });
  }
});

router.put('/:id/approve', requireAdmin, async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });

    membership.status = 'Approved';
    membership.updated_on = new Date();
    await membership.save();

    await createNotification(
      'membership',
      'Membership approved',
      `Application from ${membership.name} was approved`,
      'membership',
      membership._id.toString()
    );

    res.json({ membership, message: 'Membership approved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to approve membership' });
  }
});

router.put('/:id/reject', requireAdmin, async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });

    membership.status = 'Rejected';
    membership.updated_on = new Date();
    await membership.save();

    await createNotification(
      'membership',
      'Membership rejected',
      `Application from ${membership.name} was rejected`,
      'membership',
      membership._id.toString()
    );

    res.json({ membership, message: 'Membership rejected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to reject membership' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const membership = await Membership.findByIdAndDelete(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete membership' });
  }
});

export default router;

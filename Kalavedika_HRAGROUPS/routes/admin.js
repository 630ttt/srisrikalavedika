import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminUser from '../models/AdminUser.js';
import { requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const admin = await AdminUser.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: admin._id.toString(), username: admin.username },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '8h' }
    );

    res.json({ success: true, token, username: admin.username, email: admin.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out' });
});

router.get('/profile', requireAdmin, async (req, res) => {
  try {
    const admin = await AdminUser.findById(req.admin.id).select('-passwordHash');
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.json({ admin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load profile' });
  }
});

router.put('/profile', requireAdmin, async (req, res) => {
  try {
    const updates = {};
    const { name, email, password } = req.body || {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (password) {
      updates.passwordHash = await bcrypt.hash(password, 12);
    }

    const admin = await AdminUser.findByIdAndUpdate(req.admin.id, updates, { new: true }).select('-passwordHash');
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.json({ admin, message: 'Profile updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;

import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { requireAdmin } from './middlewares/auth.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
let PORT = Number(process.env.PORT) || 5001;
const UNSAFE_PORTS = [6000, 6660, 6661, 6662, 6663, 6664, 6665, 6666, 6667, 6668, 6669, 10080];
if (UNSAFE_PORTS.includes(PORT)) {
  console.warn(`Port ${PORT} is unsafe for browser connections. Falling back to port 5001.`);
  PORT = 5001;
}
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';

app.use(cors());
app.use(express.json());

const UPLOADS_DIR = path.join(__dirname, 'uploads');
const GALLERY_DIR = path.join(UPLOADS_DIR, 'gallery');
const PUBLICATIONS_DIR = path.join(UPLOADS_DIR, 'publications');
const EVENTS_DIR = path.join(UPLOADS_DIR, 'events');

[UPLOADS_DIR, GALLERY_DIR, PUBLICATIONS_DIR, EVENTS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

function makeUploader(dir) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, dir),
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `upload-${uniqueSuffix}${path.extname(file.originalname).toLowerCase()}`);
    },
  });
  return multer({
    storage,
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (!IMAGE_EXTS.includes(ext)) return cb(new Error('Only JPG, JPEG, PNG and WEBP images are allowed'));
      cb(null, true);
    },
  });
}

const uploadGallery = makeUploader(GALLERY_DIR);
const uploadPublication = makeUploader(PUBLICATIONS_DIR);
const uploadEvent = makeUploader(EVENTS_DIR);

// Serve all uploads (root + subdirs) under /uploads
app.use('/uploads', express.static(UPLOADS_DIR));

// Admin authentication and dashboard
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ success: true, token, username: ADMIN_USERNAME, email: ADMIN_EMAIL });
});

app.post('/api/admin/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out' });
});

app.get('/api/admin/profile', requireAdmin, (req, res) => {
  res.json({ admin: { username: req.admin.username, email: ADMIN_EMAIL } });
});

app.get('/api/admin/stats', requireAdmin, async (req, res) => {
  try {
    const totalRows = await dbAll('SELECT COUNT(*) AS count FROM members');
    const pendingRows = await dbAll("SELECT COUNT(*) AS count FROM members WHERE status = 'Pending'");
    const approvedRows = await dbAll("SELECT COUNT(*) AS count FROM members WHERE status = 'Approved'");
    const rejectedRows = await dbAll("SELECT COUNT(*) AS count FROM members WHERE status = 'Rejected'");
    const publicationRows = await dbAll('SELECT COUNT(*) AS count FROM publications');
    const contactRows = await dbAll('SELECT COUNT(*) AS count FROM contacts');
    const eventRows = await dbAll('SELECT COUNT(*) AS count FROM events');
    const galleryFiles = fs.readdirSync(GALLERY_DIR).filter((f) => IMAGE_EXTS.includes(path.extname(f).toLowerCase()));
    res.json({
      totalMemberships: totalRows[0]?.count || 0,
      pendingMemberships: pendingRows[0]?.count || 0,
      approvedMemberships: approvedRows[0]?.count || 0,
      rejectedMemberships: rejectedRows[0]?.count || 0,
      galleryCount: galleryFiles.length,
      publicationCount: publicationRows[0]?.count || 0,
      contactCount: contactRows[0]?.count || 0,
      eventCount: eventRows[0]?.count || 0,
      unreadNotifications: 0,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load dashboard stats' });
  }
});

app.get('/api/notifications', requireAdmin, (req, res) => {
  res.json({ notifications: [], unreadCount: 0 });
});

app.put('/api/notifications/read/:id', requireAdmin, (req, res) => {
  res.json({ notification: { _id: req.params.id, read: true }, message: 'Notification marked read' });
});

// Initialize SQLite DB for memberships
const DB_PATH = path.join(__dirname, 'data', 'members.db');
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

let db;
async function initDb() {
  db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error('Failed to open DB', err);
      process.exit(1);
    }
  });

  const createMembersTableSql = `
    CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      city_state TEXT,
      membership_type TEXT,
      occupation TEXT,
      about TEXT,
      status TEXT DEFAULT 'Pending',
      submitted_on TEXT NOT NULL,
      updated_on TEXT
    );
  `;

  const createPublicationsTableSql = `
    CREATE TABLE IF NOT EXISTS publications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      created_on TEXT NOT NULL,
      updated_on TEXT
    );
  `;

  const createContactsTableSql = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'New',
      submitted_on TEXT NOT NULL
    );
  `;

  const createEventsTableSql = `
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      created_on TEXT NOT NULL,
      updated_on TEXT
    );
  `;

  await new Promise((resolve, reject) => {
    db.run(createMembersTableSql, (err) => (err ? reject(err) : resolve()));
  });
  await new Promise((resolve, reject) => {
    db.run(createPublicationsTableSql, (err) => (err ? reject(err) : resolve()));
  });

  await new Promise((resolve, reject) => {
    db.run(createContactsTableSql, (err) => (err ? reject(err) : resolve()));
  });

  await new Promise((resolve, reject) => {
    db.run(createEventsTableSql, (err) => (err ? reject(err) : resolve()));
  });

  // Ensure schema upgrades for older database files
  await new Promise((resolve, reject) => {
    db.run("ALTER TABLE members ADD COLUMN status TEXT DEFAULT 'Pending'", (err) => {
      if (err && !err.message.includes('duplicate column name')) return reject(err);
      resolve();
    });
  });

  await new Promise((resolve, reject) => {
    db.run("ALTER TABLE members ADD COLUMN updated_on TEXT", (err) => {
      if (err && !err.message.includes('duplicate column name')) return reject(err);
      resolve();
    });
  });

  await new Promise((resolve, reject) => {
    db.run('ALTER TABLE publications ADD COLUMN updated_on TEXT', (err) => {
      if (err && !err.message.includes('duplicate column name')) return reject(err);
      resolve();
    });
  });
}

function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ lastID: this.lastID });
    });
  });
}

function dbAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function dbGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

// Nodemailer transporter (if SMTP variables are provided) or Ethereal for testing
let transporter = null;
let usingEthereal = false;
(async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('SMTP configured for owner notifications');
  } else {
    // Create Ethereal test account for development/testing
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usingEthereal = true;
      console.log('Ethereal test SMTP account created — emails will be previewable.');
    } catch (ethErr) {
      console.warn('Failed to create Ethereal account; owner notifications will be disabled', ethErr);
      transporter = null;
    }
  }
})();

// GET /api/gallery -> return list of gallery images (gallery/ subdir only)
app.get('/api/gallery', (req, res) => {
  try {
    const files = fs.readdirSync(GALLERY_DIR).filter((f) => {
      return IMAGE_EXTS.includes(path.extname(f).toLowerCase());
    });
    const images = files.map((f) => {
      const filePath = path.join(GALLERY_DIR, f);
      const stats = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
      return {
        _id: f,
        image_url: `/uploads/gallery/${f}`,
        original_name: f,
        uploaded_on: stats ? stats.mtime.toISOString() : null,
      };
    });
    res.json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read uploads' });
  }
});

// POST /api/gallery/upload -> upload one or multiple images (field name 'images')
app.post('/api/gallery/upload', uploadGallery.array('images', 20), (req, res) => {
  try {
    const files = req.files || [];
    const images = files.map((f) => `/uploads/gallery/${path.basename(f.path)}`);
    res.json({ uploaded: images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// DELETE /api/gallery/:id -> delete gallery image by filename
app.delete('/api/gallery/:id', (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id.includes('..') || id.includes('/') || id.includes('\\')) {
      return res.status(400).json({ error: 'Invalid file identifier' });
    }
    const filePath = path.join(GALLERY_DIR, id);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    fs.unlinkSync(filePath);
    const files = fs.readdirSync(GALLERY_DIR).filter((f) => {
      return IMAGE_EXTS.includes(path.extname(f).toLowerCase());
    });
    const images = files.map((f) => ({
      _id: f,
      image_url: `/uploads/gallery/${f}`,
      original_name: f,
    }));
    res.json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Delete failed' });
  }
});

// Publications API
app.get('/api/publications', async (req, res) => {
  try {
    const rows = await dbAll(`SELECT * FROM publications ORDER BY created_on DESC`);
    const publications = rows.map((row) => ({
      ...row,
      _id: row.id,
    }));
    res.json({ publications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch publications' });
  }
});

app.get('/api/publications/:id', async (req, res) => {
  try {
    const row = await dbGet(`SELECT * FROM publications WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Publication not found' });
    res.json({ publication: { ...row, _id: row.id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch publication' });
  }
});

app.post('/api/publications', uploadPublication.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body || {};
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Publication image is required' });
    }

    const imageUrl = `/uploads/publications/${path.basename(req.file.path)}`;
    const createdOn = new Date().toISOString();

    const result = await dbRun(
      `INSERT INTO publications (title, description, image_url, created_on, updated_on) VALUES (?, ?, ?, ?, ?)`,
      [title, description, imageUrl, createdOn, createdOn]
    );

    const publication = {
      _id: result.lastID,
      title,
      description,
      image_url: imageUrl,
      created_on: createdOn,
      updated_on: createdOn,
    };
    res.json({ publication });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create publication' });
  }
});

app.put('/api/publications/:id', uploadPublication.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body || {};
    const publication = await dbGet(`SELECT * FROM publications WHERE id = ?`, [req.params.id]);
    if (!publication) return res.status(404).json({ error: 'Publication not found' });

    const updatedOn = new Date().toISOString();
    const imageUrl = req.file ? `/uploads/publications/${path.basename(req.file.path)}` : publication.image_url;

    if (req.file && publication.image_url) {
      const oldImagePath = path.join(__dirname, publication.image_url.replace(/^\//, ''));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    const updatedTitle = title || publication.title;
    const updatedDescription = description || publication.description;

    await dbRun(
      `UPDATE publications SET title = ?, description = ?, image_url = ?, updated_on = ? WHERE id = ?`,
      [updatedTitle, updatedDescription, imageUrl, updatedOn, req.params.id]
    );

    res.json({ publication: { _id: publication.id, title: updatedTitle, description: updatedDescription, image_url: imageUrl, created_on: publication.created_on, updated_on: updatedOn } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update publication' });
  }
});

app.delete('/api/publications/:id', async (req, res) => {
  try {
    const publication = await dbGet(`SELECT * FROM publications WHERE id = ?`, [req.params.id]);
    if (!publication) return res.status(404).json({ error: 'Publication not found' });

    const imagePath = path.join(__dirname, publication.image_url.replace(/^\//, ''));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await dbRun(`DELETE FROM publications WHERE id = ?`, [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete publication' });
  }
});

// Events API
app.get('/api/events', async (req, res) => {
  try {
    const rows = await dbAll(`SELECT * FROM events ORDER BY created_on DESC`);
    res.json({ events: rows.map((r) => ({ ...r, _id: r.id })) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.get('/api/events/:id', async (req, res) => {
  try {
    const row = await dbGet(`SELECT * FROM events WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Event not found' });
    res.json({ event: { ...row, _id: row.id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

app.post('/api/events', uploadEvent.single('image'), async (req, res) => {
  try {
    const { title, date, description } = req.body || {};
    if (!title || !date || !description) {
      return res.status(400).json({ error: 'Title, date and description are required' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Event image is required' });
    }

    const imageUrl = `/uploads/events/${path.basename(req.file.path)}`;
    const createdOn = new Date().toISOString();

    const result = await dbRun(
      `INSERT INTO events (title, date, description, image_url, created_on, updated_on) VALUES (?, ?, ?, ?, ?, ?)`,
      [title, date, description, imageUrl, createdOn, createdOn]
    );

    res.json({ event: { _id: result.lastID, title, date, description, image_url: imageUrl, created_on: createdOn, updated_on: createdOn } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.put('/api/events/:id', uploadEvent.single('image'), async (req, res) => {
  try {
    const { title, date, description } = req.body || {};
    const event = await dbGet(`SELECT * FROM events WHERE id = ?`, [req.params.id]);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    const updatedOn = new Date().toISOString();
    const imageUrl = req.file ? `/uploads/events/${path.basename(req.file.path)}` : event.image_url;

    if (req.file && event.image_url) {
      const oldPath = path.join(__dirname, event.image_url.replace(/^\//, ''));
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    const updatedTitle = title || event.title;
    const updatedDate = date || event.date;
    const updatedDescription = description || event.description;

    await dbRun(
      `UPDATE events SET title = ?, date = ?, description = ?, image_url = ?, updated_on = ? WHERE id = ?`,
      [updatedTitle, updatedDate, updatedDescription, imageUrl, updatedOn, req.params.id]
    );

    res.json({ event: { _id: event.id, title: updatedTitle, date: updatedDate, description: updatedDescription, image_url: imageUrl, created_on: event.created_on, updated_on: updatedOn } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    const event = await dbGet(`SELECT * FROM events WHERE id = ?`, [req.params.id]);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    const imagePath = path.join(__dirname, event.image_url.replace(/^\//, ''));
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await dbRun(`DELETE FROM events WHERE id = ?`, [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

// DELETE /api/gallery?name=<filename> -> delete an uploaded image by filename (basename)
app.delete('/api/gallery', (req, res) => {
  try {
    const name = req.query.name;
    if (!name) return res.status(400).json({ error: 'Missing name parameter' });
    // Prevent path traversal
    if (name.includes('..') || name.includes('/') || name.includes('\\')) {
      return res.status(400).json({ error: 'Invalid filename' });
    }
    const allowedExt = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = path.extname(name).toLowerCase();
    if (!allowedExt.includes(ext)) return res.status(400).json({ error: 'Invalid file type' });

    const filePath = path.join(UPLOADS_DIR, name);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });

    fs.unlinkSync(filePath);

    // return updated list
    const files = fs.readdirSync(UPLOADS_DIR).filter(f => {
      const e = path.extname(f).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(e);
    });
    const images = files.map(f => `/uploads/${f}`);
    res.json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Delete failed' });
  }
});

// POST /api/membership -> receive and store membership applications and notify owner via email
app.post('/api/membership', async (req, res) => {
  try {
    const { name, email, phone, city_state, membership_type, occupation, about } = req.body || {};
    // basic validation
    if (!name || !email || !phone || !membership_type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const submitted_on = new Date().toISOString();

    const result = await dbRun(
      `INSERT INTO members (name, email, phone, city_state, membership_type, occupation, about, status, submitted_on, updated_on)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, city_state || '', membership_type, occupation || '', about || '', 'Pending', submitted_on, submitted_on]
    );

    const memberId = result.lastID;

    // send email notification if transporter available
    if (transporter) {
      const recipient = process.env.ADMIN_EMAIL || process.env.SMTP_USER || email;

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com',
        to: recipient,
        subject: 'New Membership Application',
        text: `New Membership Application\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${city_state || ''}\nMembership Type: ${membership_type}\nSubmitted On: ${submitted_on}\n\nOccupation: ${occupation || ''}\n\nOther Details:\n${about || ''}`,
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        if (usingEthereal) {
          const previewUrl = nodemailer.getTestMessageUrl(info);
          console.log('Ethereal preview URL:', previewUrl);
          res.json({ id: memberId, message: 'Membership application received', previewUrl });
          return;
        }
      } catch (mailErr) {
        console.error('Failed to send admin email:', mailErr);
      }
    }

    res.json({ id: memberId, message: 'Membership application received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit membership' });
  }
});

// Public contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    console.log('[POST] /api/contact payload:', req.body);
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email || !message) {
      console.warn('[POST] /api/contact validation failed:', { name, email, message });
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const submitted_on = new Date().toISOString();
    let result;
    try {
      result = await dbRun(
        `INSERT INTO contacts (name, email, phone, subject, message, status, submitted_on) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, email, phone || '', subject || '', message, 'New', submitted_on]
      );
    } catch (sqlErr) {
      console.error('[POST] /api/contact DB error:', sqlErr);
      return res.status(500).json({ error: 'Database error while saving contact', detail: sqlErr.message });
    }

    console.log('[POST] /api/contact saved id:', result?.lastID);

    // notify admin via email if transporter available
    if (transporter) {
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com',
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@example.com',
        subject: `New Contact Message: ${subject || 'No Subject'}`,
        text: `New contact message received\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nSubject: ${subject || ''}\nSubmitted On: ${submitted_on}\n\nMessage:\n${message}`,
      };
      try {
        const info = await transporter.sendMail(mailOptions);
        if (usingEthereal) {
          const previewUrl = nodemailer.getTestMessageUrl(info);
          console.log('Ethereal preview URL (contact):', previewUrl);
        }
      } catch (mailErr) {
        console.error('Failed to send contact notification email:', mailErr);
      }
    }

    res.json({ id: result.lastID, message: 'Contact message received' });
  } catch (err) {
    console.error('[POST] /api/contact uncaught error:', err);
    res.status(500).json({ error: 'Failed to submit contact', detail: err.message });
  }
});

// Admin: list contacts
app.get('/api/contact', requireAdmin, async (req, res) => {
  try {
    const rows = await dbAll(`SELECT * FROM contacts ORDER BY submitted_on DESC`);
    const contacts = rows.map((r) => ({ ...r, _id: r.id }));
    res.json({ contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Admin: mark contact as read
app.put('/api/contact/:id/read', requireAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    await dbRun(`UPDATE contacts SET status = 'Read' WHERE id = ?`, [id]);
    res.json({ success: true, message: 'Marked as read' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to mark contact read' });
  }
});

// Admin: delete contact
app.delete('/api/contact/:id', requireAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    await dbRun(`DELETE FROM contacts WHERE id = ?`, [id]);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

// GET /api/membership -> list members (for admin use)
app.get('/api/membership', async (req, res) => {
  try {
    const rows = await dbAll(`SELECT * FROM members ORDER BY id DESC`);
    const members = rows.map((row) => ({ ...row, _id: row.id }));
    res.json({ members });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// Membership admin CRUD endpoints
app.get('/api/memberships', async (req, res) => {
  try {
    const rows = await dbAll(`SELECT * FROM members ORDER BY id DESC`);
    const memberships = rows.map((row) => ({ ...row, _id: row.id }));
    res.json({ memberships });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch membership applications' });
  }
});

app.get('/api/memberships/:id', async (req, res) => {
  try {
    const row = await dbGet(`SELECT * FROM members WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Membership application not found' });
    res.json({ membership: { ...row, _id: row.id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch membership application' });
  }
});

app.put('/api/memberships/:id/approve', async (req, res) => {
  try {
    await dbRun(`UPDATE members SET status = 'Approved', updated_on = ? WHERE id = ?`, [new Date().toISOString(), req.params.id]);
    const row = await dbGet(`SELECT * FROM members WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Membership application not found' });
    res.json({ membership: { ...row, _id: row.id }, message: 'Membership approved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to approve membership' });
  }
});

app.put('/api/memberships/:id/reject', async (req, res) => {
  try {
    await dbRun(`UPDATE members SET status = 'Rejected', updated_on = ? WHERE id = ?`, [new Date().toISOString(), req.params.id]);
    const row = await dbGet(`SELECT * FROM members WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Membership application not found' });
    res.json({ membership: { ...row, _id: row.id }, message: 'Membership rejected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to reject membership' });
  }
});

app.delete('/api/memberships/:id', async (req, res) => {
  try {
    const row = await dbGet(`SELECT * FROM members WHERE id = ?`, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Membership application not found' });
    await dbRun(`DELETE FROM members WHERE id = ?`, [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete membership application' });
  }
});

async function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Gallery API server running on port ${port}`);
      resolve(server);
    });
    server.on('error', reject);
  });
}

initDb()
  .then(async () => {
    try {
      await startServer(PORT);
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        const fallbackPort = PORT === 5001 ? 5002 : 5001;
        console.warn(`Port ${PORT} is already in use. Trying fallback port ${fallbackPort}.`);
        await startServer(fallbackPort);
      } else {
        throw err;
      }
    }
  })
  .catch((err) => {
    console.error('Failed to initialize database or start server', err);
    process.exit(1);
  });

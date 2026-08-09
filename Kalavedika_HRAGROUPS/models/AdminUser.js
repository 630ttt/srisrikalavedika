import mongoose from 'mongoose';

const adminUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String },
  createdAt: { type: Date, default: () => new Date() },
});

const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', adminUserSchema);
export default AdminUser;

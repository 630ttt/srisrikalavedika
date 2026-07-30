import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  relatedType: { type: String, required: true },
  relatedId: { type: String, required: true },
  read: { type: Boolean, default: false },
  created_on: { type: Date, default: () => new Date() },
});

const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
export default Notification;

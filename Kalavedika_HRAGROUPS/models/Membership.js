import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city_state: { type: String, default: '' },
  membership_type: { type: String, required: true },
  occupation: { type: String, default: '' },
  about: { type: String, default: '' },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  submitted_on: { type: Date, default: () => new Date() },
  updated_on: { type: Date, default: () => new Date() },
});

const Membership = mongoose.models.Membership || mongoose.model('Membership', membershipSchema);
export default Membership;

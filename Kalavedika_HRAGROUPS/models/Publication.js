import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  created_on: { type: Date, default: () => new Date() },
  updated_on: { type: Date, default: () => new Date() },
});

const Publication = mongoose.models.Publication || mongoose.model('Publication', publicationSchema);
export default Publication;

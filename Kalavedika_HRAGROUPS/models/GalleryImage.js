import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  image_url: { type: String, required: true },
  original_name: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
  uploaded_on: { type: Date, default: () => new Date() },
});

const GalleryImage = mongoose.models.GalleryImage || mongoose.model('GalleryImage', galleryImageSchema);
export default GalleryImage;

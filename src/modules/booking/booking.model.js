import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  property_id: String,
  property_name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
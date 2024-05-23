import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ContactModel = model('Contact', ContactSchema);

import { Schema, model } from 'mongoose';

const TemplateSchema = new Schema({
  name: {
    type: String,
  },
  mailObject: {
    type: String,
  },
  mailContent: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const TemplateModel = model('Template', TemplateSchema);

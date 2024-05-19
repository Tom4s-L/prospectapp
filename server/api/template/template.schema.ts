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
});

export const TemplateModel = model('Template', TemplateSchema);

import { Schema, model } from 'mongoose';

const TypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TypeModel = model('Type', TypeSchema);

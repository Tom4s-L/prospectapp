import { TemplateModel } from './template.schema';

export default defineEventHandler(async () => {
  return TemplateModel.find();
});

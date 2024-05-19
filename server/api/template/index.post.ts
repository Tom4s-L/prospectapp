import { TemplateModel } from '~/server/api/template/template.schema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const newTemplateModel = new TemplateModel(body);

  await newTemplateModel.save();

  return {
    status: 201,
    message: 'Template created successfully',
  };
});

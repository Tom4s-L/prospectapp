import { TemplateModel } from '~/server/api/template/template.schema';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newTemplateModel = new TemplateModel(body);

    await newTemplateModel.save();

    return {
      status: 201,
      message: 'PreviewTemplate created successfully',
    };
  }
  catch (error) {
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
});

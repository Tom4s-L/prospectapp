import { TemplateModel } from './template.schema';

export default defineEventHandler(async (event) => {
  try {
    const templates = await TemplateModel.find().lean();
    return {
      status: 200,
      data: templates,
    };
  }
  catch (error) {
    console.error('Error fetching templates:', error);
    sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Internal server error: an error occurred.',
    }));
  }
});

import { TemplateModel } from '~/server/api/template/template.schema';

export default defineEventHandler(async (event) => {
  try {
    const { templateId } = getQuery(event);

    await TemplateModel.findByIdAndDelete(templateId).exec();

    return {
      status: 200,
      message: 'Template deleted successfully',
    };
  }
  catch (error) {
    console.log('Error deleting template:', error);
    sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Internal server error: an error occurred.',
    }));
  }
});

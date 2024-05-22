import { TemplateModel } from '~/server/api/template/template.schema';

export default defineEventHandler(async (event) => {
  try {
    const { templateId } = getQuery(event);
    const body = await readBody(event);

    const template = await TemplateModel.findByIdAndUpdate(templateId, body, { new: true }).exec();
    return {
      status: 200,
      message: 'Template updated successfully',
      data: template,
    };
  }
  catch (error) {
    console.log('Error updating template:', error);
  }
});

import { ContactModel } from '~/server/api/contact/contact.schema';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newContactModel = new ContactModel(body);

    await newContactModel.save();

    return {
      status: 201,
      message: 'Contact created successfully',
    };
  }
  catch (error) {
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
});

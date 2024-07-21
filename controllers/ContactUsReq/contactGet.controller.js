const ContactUsModel = require("../../models/contactUs.model");

const contactGet = async (_, res) => {
  try {
    const contact = await ContactUsModel.find();
    res.status(200).send(contact);
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in getting contact details: ${error.message}` });
  }
};

module.exports = contactGet;

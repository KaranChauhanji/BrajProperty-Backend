const ContactUsModel = require("../../models/contactUs.model");

const contactSend = async (req, res) => {
  const { username, email, phone, message, address } = req.body;
  const existingContact = await ContactUsModel.findOne({ email });

  try {
    if (existingContact) {
      return res.status(401).send({ message: "User already existed." });
    }

    const newContact = new ContactUsModel({
      username,
      email,
      phone,
      message,
      address,
    });

    await newContact.save();
    res.status(200).send({ message: `New Contact Saved`, Contact: newContact });
  } catch (error) {
    res.status(500).send({ message: `Error in sending details: ${error}` });
  }
};

module.exports = contactSend;

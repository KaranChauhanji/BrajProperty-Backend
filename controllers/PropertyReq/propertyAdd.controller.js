const PropertyModel = require("../../models/property.model");

const propertyAdd = async (req, res) => {
  const data = req.body;

  try {
    const newProperty = new PropertyModel(data);
    await newProperty.save();

    res
      .status(201)
      .send({
        message: `New Property Added successfully.`,
        Property: newProperty,
      });
  } catch (error) {
    res
      .status(501)
      .send({
        message: `Error in Adding Property Wrong Details: ${error.message}`,
      });
  }
};


module.exports = propertyAdd

const PropertyModel = require("../../models/property.model");

const propertyGet = async (req, res) => {
  const filter = req.query;
  try {
    const property = await PropertyModel.find(filter);

    res.status(200).send(property);
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error in getting Property: ${error.message}` });
  }
};


module.exports = propertyGet
const PropertyModel = require("../../models/property.model");

const propertyEdit = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedProperty = await PropertyModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProperty) {
      return res.status(404).send({ message: "Unable to find ID." });
    }

    res.status(200).send({
      message: "Property Edited Successfully.",
      property: updatedProperty,
    });
  } catch (error) {
    res.status(500).send({ message: `Error in updating: ${error.message}` });
  }
};

module.exports = propertyEdit;

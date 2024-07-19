const PropertyModel = require("../../models/property.model");

const propertyDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProperty = await PropertyModel.findByIdAndDelete(id);

    if (!deletedProperty) {
      return res.status(404).send({ message: "Unable to find ID." });
    }

    res
      .status(200)
      .send({
        message: "Property Deleted Successfully.",
        Property: deletedProperty,
      });
  } catch (error) {
    res.status(500).send({ message: `Error in Deleting: ${error.message}` });
  }
};

module.exports = propertyDelete;

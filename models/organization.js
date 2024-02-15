import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the ZIP Code follows USPS standards
        const zipCodePattern = /^\d{5}(?:-\d{4})?$/;
        return zipCodePattern.test(value);
      },
      message: "Invalid ZIP Code format",
    },
  },
  country: { type: String, required: true },
});

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addresses: { type: [locationSchema], required: true },
});

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;

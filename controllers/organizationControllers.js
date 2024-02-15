import Organization from "../models/organization.js";

const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();

    if (organizations.length > 0) {
      res.status(200).json(organizations);
    } else {
      res.status(404).json({ error: "Organization not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrganizationById = async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findById(id);

    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ error: "Organization not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createOrganization = async (req, res) => {
  const { name, addresses } = req.body;

  try {
    const newOrganization = new Organization({
      name,
      addresses,
    });

    const savedOrganization = await newOrganization.save();

    res.status(200).json(savedOrganization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const deletedOrganization = await Organization.findOneAndDelete({
      _id: req.params.id,
    });

    if (deletedOrganization) {
      res.status(200).json(deletedOrganization);
    } else {
      res.status(404).json({ error: "Organization not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const updateOrganization = async (req, res) => {
  try {
    const { name, addresses } = req.body;

    const updatedOrganization = await Organization.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name,
        addresses,
      },
      { new: true }
    );

    if (updatedOrganization) {
      res.status(200).json(updatedOrganization);
    } else {
      res.status(404).json({ error: "Organization not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getOrganizations,
  getOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization,
};

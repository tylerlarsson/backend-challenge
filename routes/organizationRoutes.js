import express from "express";
import * as organizationControllers from "../controllers/organizationControllers.js";
const router = express.Router();

router.get("/organizations", organizationControllers.getOrganizations);
router.post("/organization", organizationControllers.createOrganization);
router.get("/organization/:id", organizationControllers.getOrganizationById);
router.patch("/organization/:id", organizationControllers.updateOrganization);
router.delete("/organization/:id", organizationControllers.deleteOrganization);

export default router;

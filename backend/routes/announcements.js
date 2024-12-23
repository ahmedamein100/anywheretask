const express = require("express");
const router = express.Router();

const {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} = require("../controllers/announcementController");

const {
  getAnnouncementByIdValidation,
  createAnnouncementValidation,
  deleteAnnouncementValidation,
  updateAnnouncementValidation,
} = require("../validators/announcementValidator");

router.get("/", getAllAnnouncements);
router.get("/:id", getAnnouncementByIdValidation, getAnnouncementById);
router.post("/", createAnnouncementValidation, createAnnouncement);
router.delete("/:id", deleteAnnouncementValidation, deleteAnnouncement);
router.put("/:id", updateAnnouncementValidation, updateAnnouncement);

module.exports = router;

const {
  getAllAnnouncementsService,
  getAnnouncementByIdService,
  createAnnouncementService,
  deleteAnnouncementService,
  updateAnnouncementService,
} = require("../services/announcmentService");

const {
  getAllAnnouncementsExceptionHandler,
  getAnnouncementByIdExceptionHandler,
  getAnnouncementByIdNotFoundExceptionHandler,
  createAnnouncementExceptionHandler,
  deleteAnnouncementExceptionHandler,
  deleteAnnouncementNotFoundExceptionHandler,
  updateAnnouncementExceptionHandler,
  updateAnnouncementNotFoundExceptionHandler,
} = require("../utils/exceptionHandler/announcmentExceptionHandler");

const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await getAllAnnouncementsService();
    return res.status(200).json({
      message: "Announcments Retrived Successfully",
      result: announcements,
    });
  } catch (error) {
    return getAllAnnouncementsExceptionHandler(error, next);
  }
};

const getAnnouncementById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const announcement = await getAnnouncementByIdService(id);
    if (!announcement) {
      return getAnnouncementByIdNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: `Announcement Retrieved Successfully.`,
      result: announcement,
    });
  } catch (error) {
    return getAnnouncementByIdExceptionHandler(error, next);
  }
};

const createAnnouncement = async (req, res, next) => {
  try {
    const { creator, course, message } = req.body;
    const newAnnouncement = await createAnnouncementService({
      creator,
      course,
      message,
    });
    return res.status(201).json({
      message: "Announcement created successfully",
      result: newAnnouncement,
    });
  } catch (error) {
    return createAnnouncementExceptionHandler(error, next);
  }
};

const deleteAnnouncement = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedAnnouncement = await deleteAnnouncementService(id);
    if (!deletedAnnouncement) {
      return deleteAnnouncementNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: "Announcement deleted successfully",
    });
  } catch (error) {
    return deleteAnnouncementExceptionHandler(error, next);
  }
};

const updateAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { creator, course, message } = req.body;
    const updatedAnnouncement = await updateAnnouncementService(id, {
      creator,
      course,
      message,
    });
    if (!updatedAnnouncement) {
      return updateAnnouncementNotFoundExceptionHandler(next);
    }
    return res.status(200).json({
      message: "Announcement updated successfully",
      result: updatedAnnouncement,
    });
  } catch (error) {
    return updateAnnouncementExceptionHandler(error, next);
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
};

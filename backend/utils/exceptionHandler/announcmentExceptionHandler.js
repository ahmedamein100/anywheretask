const CustomError = require("../customError/customError.js");

const getAllAnnouncementsExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error while fetching announcements", 500, err.message)
  );
};

const getAnnouncementByIdExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error retrieving the announcement by ID", 500, err.message)
  );
};

const getAnnouncementByIdNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError(
      "Announcement Not Found",
      404,
      "The requested announcement does not exist."
    )
  );
};

const createAnnouncementExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error creating the announcement", 500, err.message)
  );
};

const deleteAnnouncementExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error deleting the announcement", 500, err.message)
  );
};

const deleteAnnouncementNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError(
      "Announcement not found",
      404,
      "No announcement found with the provided ID."
    )
  );
};

const updateAnnouncementExceptionHandler = (err, next) => {
  return next(
    new CustomError("Error updating the announcement", 500, err.message)
  );
};

const updateAnnouncementNotFoundExceptionHandler = (next) => {
  return next(
    new CustomError(
      "Announcement not found",
      404,
      "No announcement found with the provided ID."
    )
  );
};

module.exports = {
  getAllAnnouncementsExceptionHandler,
  getAnnouncementByIdExceptionHandler,
  getAnnouncementByIdNotFoundExceptionHandler,
  createAnnouncementExceptionHandler,
  deleteAnnouncementExceptionHandler,
  deleteAnnouncementNotFoundExceptionHandler,
  updateAnnouncementExceptionHandler,
  updateAnnouncementNotFoundExceptionHandler,
};

const Announcement = require("../models/Announcement");

const getAllAnnouncementsService = async () => {
  return await Announcement.find().select("creator course message");
};

const getAnnouncementByIdService = async (id) => {
  return await Announcement.findById(id).select("creator course message");
};

const createAnnouncementService = async (data) => {
  const { creator, course, message } = data;
  const newAnnouncement = new Announcement({
    creator,
    course,
    message,
  });

  return await newAnnouncement.save();
};

const deleteAnnouncementService = async (id) => {
  return await Announcement.findByIdAndDelete(id);
};

const updateAnnouncementService = async (id, data) => {
  return await Announcement.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  getAllAnnouncementsService,
  getAnnouncementByIdService,
  createAnnouncementService,
  deleteAnnouncementService,
  updateAnnouncementService,
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/stores/store";
import { fetchAnnouncements } from "../../redux/slices/announcementSlice";
import ProfilePic from "../../assets/avatar/avatar.jpg";
import "./Announcements.css";

const Announcements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { announcements } = useSelector(
    (state: RootState) => state.announcements
  );

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  return (
    <div className="announcements-container">
      <div className="announcements-header">
        <div className="announcements-slogan">
          <h2>Announcements</h2>
          <p>We educate warriors! Keep updated :)</p>
        </div>
        <button className="view-all">All</button>
      </div>
      <div className="announcements-list">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <img
              src={ProfilePic}
              alt={announcement.creator}
              className="announcement-avatar"
            />
            <div className="announcement-maker-info">
              <h3>{announcement.creator}</h3>
              <p className="announcement-role">{announcement.course}</p>
            </div>
            <div className="announcement-content">
              <p className="announcement-message">{announcement.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;

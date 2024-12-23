import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Announcement {
  id: number;
  creator: string;
  course: string;
  message: string;
}

interface AnnouncementsState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementsState = {
  announcements: [],
  loading: false,
  error: null,
};

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetchAnnouncements",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/announcements`
      );

      return response.data.result;
    } catch (error: any) {
      console.log("all good");
      return rejectWithValue("Failed to fetch announcements.");
    }
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
        state.error = null;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default announcementSlice.reducer;

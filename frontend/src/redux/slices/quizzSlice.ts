import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Quiz {
  id: number;
  title: string;
  course: string;
  topic: string;
  quizDate: string; // ISO date string
}

interface QuizzesState {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizzesState = {
  quizzes: [],
  loading: false,
  error: null,
};

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchQuizzes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/quizzes`
      );

      return response.data.result;
    } catch (error: any) {
      return rejectWithValue("Failed to fetch quizzes.");
    }
  }
);

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
        state.error = null;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default quizSlice.reducer;

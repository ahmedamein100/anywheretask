import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../slices/componentSlice";
import announcementReducer from "../slices/announcementSlice";
import quizReducer from "../slices/quizzSlice";

const store = configureStore({
  reducer: {
    component: componentReducer,
    announcements: announcementReducer,
    quizzes: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComponentState {
  component: number;
}

const initialState: ComponentState = {
  component: 1,
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, action: PayloadAction<number>) => {
      state.component = action.payload;
    },
  },
});

export const { setComponent } = componentSlice.actions;
export default componentSlice.reducer;

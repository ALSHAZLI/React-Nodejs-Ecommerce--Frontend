import { createSlice } from "@reduxjs/toolkit";
import { Redirect, Route } from "react-router";
const userRigester = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    RigesterStart: (state) => {
      state.isFetching = true;
    },
    RigesterSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      return <Redirect to="/home" />;
    },
    RigesterFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { RigesterStart, RigesterSuccess, RigesterFailure } = userRigester.actions;
export default userRigester.reducer;
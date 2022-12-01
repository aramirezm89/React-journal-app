/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // not-authenticated - authenticated
  uid: "",
  email: "",
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, {payload}) => {
        (state.status = "authenticated"),
         (state.uid = payload.uid),
         (state.email = payload.email),
         (state.displayName = payload.displayName),
         (state.photoURL = payload.photoURL),
         (state.errorMessage = null);
    },
    logout: (state, {payload}) => {
        // eslint-disable-next-line no-unused-expressions
     
          (state.status = "not-authenticated"),
          (state.uid = ""),
          (state.email = ""),
          (state.displayName = null),
          (state.photoURL = null),
          (state.errorMessage = payload);
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

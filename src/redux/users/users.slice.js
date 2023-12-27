import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../../constans/constans";

const initialState = {
  usersInfo: usersData
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.usersInfo.push(action.payload);
    },
    saveAuthStatus(state, action) {
      const name = state.usersInfo.filter((item) => item.login === action.payload.login)[0]

      localStorage.setItem("user", JSON.stringify({ ...action.payload, name: name ? name.name : '' }));
    }
  }
});
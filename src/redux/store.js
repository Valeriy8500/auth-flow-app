import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./users/users.slice";
import { usersSliceReducer } from "./users";

export const rootReducer = combineReducers({
  [usersSlice.name]: usersSliceReducer
});

export const store = configureStore({
  reducer: rootReducer
});

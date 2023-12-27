import { usersSlice } from "./users.slice";

export const usersSliceReducer = usersSlice.reducer;

export const { addUser, saveAuthStatus, getAuthStatus } = usersSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { LoadUser } from "../actions/userAction";

const initialState = {
  isAuthnticated: false,
  data: null,
  isLoading: false,
  isError: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoadUser.pending, (state, action) => {
      // state.data=null;
      state.isError = null;
      state.isLoading = true;
    });
    builder.addCase(LoadUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isError = null;
      state.isAuthnticated = true;
      state.isLoading = false;
    });
    builder.addCase(LoadUser.rejected, (state, action) => {
      // state.data=action.payload;
      state.isError = action.payload;
      state.isLoading = false;
    });
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthnticated: false,
// };
// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSucess: (state, action) => {
//     state.isAuthnticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthnticated = false;
//   },
// });

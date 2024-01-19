import axios from "axios";
import { server } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LoadUser = createAsyncThunk(
  "load user",
  async (args, { rejectWithValue }) => {
    // let config = {
    //   authorization: args,
    // };
    // let args = token;
    try {
      const response = await axios.get(
        `${server}/user/get-user`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: args,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const LoadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });

//     const { data } = await axios.post(`${server}/user/get-user`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadUserSucess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFail",
//       payload: error.response.data.message,
//     });
//   }
// };

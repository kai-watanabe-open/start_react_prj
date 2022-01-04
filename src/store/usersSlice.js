import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 1,
    name: "渡邊界",
    email: "kai.watanabe@openhouse-group.com"
  }
];

export const usersSlice = createSlice({
  name: "users",
  initialState: { userList: initialState },
  reducers: {
    getUsersApi: (state, data) => {
      state.userList = data.payload;
    }
  }
});

export const { getUsersApi } = usersSlice.actions;

export default usersSlice.reducer;

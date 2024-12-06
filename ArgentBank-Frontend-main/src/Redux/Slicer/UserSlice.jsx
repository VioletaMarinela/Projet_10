import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
};

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userName = action.payload.userName;
        },
    },
});
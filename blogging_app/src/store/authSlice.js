import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData: null,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (intialState, action) => {
            intialState.status = true;
            intialState.userData = action.payload;
        },
        logout: (intialState) => {
            intialState.status = false;
            intialState.userData = null;
        }
    }
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
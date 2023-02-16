import { createSlice } from "@reduxjs/toolkit";

const loginData = createSlice({
    name: 'loginData',
    initialState: {
        showLogged: false,
        checkData: []
    },
    reducers: {
        setShowLogged: (state, actions) => {
            state.showLogged = true;
        },
        setShowLoggedOut: (state, actions) => {
            state.showLogged = false;
        },
        setCheckData: (state, actions) => {
            state.checkData = actions.payload;
        }
    }
})

export const { setShowLogged, setShowLoggedOut, setCheckData } = loginData.actions;
export default loginData.reducer;
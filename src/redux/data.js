import { createSlice } from "@reduxjs/toolkit";

const loginData = createSlice({
    name: 'loginData',
    initialState: {
        showLogged: false,
    },
    reducers: {
        setShowLogged: (state, actions) => {
            state.showLogged = actions.payload;
        }
    }
})

export const { setShowLogged, setLockShow, setCheckData } = loginData.actions;
export default loginData.reducer;
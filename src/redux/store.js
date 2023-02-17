import { configureStore } from "@reduxjs/toolkit";
import data from "./data";


export default configureStore({
    reducer:{
        loginData:data,
    }
})
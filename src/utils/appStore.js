import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice";

const appStore= configureStore({
    reducer: {
        app:hamburgerSlice,
        search:searchSlice,
        chat:chatSlice,
    }
    
})

export default appStore;
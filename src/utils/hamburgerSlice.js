import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice= createSlice({
    name:"hamburger",
    initialState : {
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state) => {
            state.isMenuOpen=false;
        }
    }
    
})
export const { toggleMenu, closeMenu } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
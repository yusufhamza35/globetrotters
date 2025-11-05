import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: { value: localStorage.getItem("theme") == null ? "light" : localStorage.getItem("theme") },
  reducers: {
    changeTheme: (state, action) => {
        if(action.payload == "light" || action.payload == "dark"){
            state.value = action.payload;
        }
    },
  },
});

export const { changeTheme } = themeReducer.actions;
export default themeReducer.reducer;

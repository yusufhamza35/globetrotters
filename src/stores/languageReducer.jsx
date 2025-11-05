import { createSlice } from "@reduxjs/toolkit";

const languageReducer = createSlice({
  name: "language",
  initialState: { value: localStorage.getItem("language") == null ? "tr" : localStorage.getItem("language") },
  reducers: {
    changeLang: (state, action) => {
      if(action.payload == "tr" || action.payload == "eng"){
          state.value = action.payload;
      }else{
        state.value = "tr"
      }
    },
  },
});

export const { changeLang } = languageReducer.actions;
export default languageReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const currencyReducer = createSlice({
  name: "currency",
  initialState: { value: localStorage.getItem("currency") == null ? "TL" : localStorage.getItem("currency") },
  reducers: {
    changeCurrency: (state, action) => {
      if(action.payload == "USD" || action.payload == "EUR" || action.payload == "TL" || action.payload == "YTL"){
          state.value = action.payload;
      }else{
        state.value = "tr"
      }
    },
  },
});

export const { changeCurrency } = currencyReducer.actions;
export default currencyReducer.reducer;

import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./stores/currencyReducer";
import themeReducer from "./stores/themeReducer";
import languageReducer from "./stores/languageReducer";

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;

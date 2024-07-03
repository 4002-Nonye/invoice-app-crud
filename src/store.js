import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./features/invoice/invoiceSlice";
import themeReducer from "./features/theme/themeSlice";
const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    theme: themeReducer,
  },
});
export default store;

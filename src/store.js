import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from './features/invoice/invoiceSlice'
const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});
export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [
    {
      id: "#XM9141",
      dueDate: "20 Sep 2021",
      name: "Alex Grim",
      amount: "102.04",
      status: "pending",
    },
    {
        id: "#XM9301",
        dueDate: "23 Sep 2021",
        name: "Mandy Grim",
        amount: "102.04",
        status: "pending",
      },
  ],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;


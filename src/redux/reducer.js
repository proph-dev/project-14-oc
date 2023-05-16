import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: []
  },
  reducers: {
    setEmployeeData: (state, action) => {
        state.employees.push(action.payload);
    },
  }
});

export const { setEmployeeData } = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;
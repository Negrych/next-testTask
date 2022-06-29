import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "companySlice",
  initialState: {
    company: [],
    isClick: false,
  },
  reducers: {
    showCompany: (state, action) => {
      state.company = action.payload;
    },
    changeMarker: (state, action) => {
      const id = action.payload;
      const indexElement = state.company.findIndex((item) => item.id === id);
      state.company.map((value, index) => {
        if (index === indexElement) {
          value.status = !value.status;
        }
      });
    },
  },
});
const companyReducer = companySlice.reducer;
export default companyReducer;
export const { showCompany, changeMarker } = companySlice.actions;

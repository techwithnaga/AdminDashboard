import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ElectronicSale {
  year: string;
  totalElectronicSales: number;
  avgSales: number;
}

interface ElectronicSaleState {
  electronicSales: ElectronicSale[];
}

const initialState: ElectronicSaleState = {
  electronicSales: [],
};

export const ElectronicSalesSlice = createSlice({
  name: "electronic",
  initialState,
  reducers: {
    addElectronicSale: (
      state,
      action: PayloadAction<{
        year: string;
        totalElectronicSales: number;
        avgSales: number;
      }>
    ) => {
      state.electronicSales.push({
        year: action.payload.year,
        totalElectronicSales: action.payload.totalElectronicSales,
        avgSales: action.payload.avgSales,
      });
    },
  },
});

export default ElectronicSalesSlice.reducer;

export const { addElectronicSale } = ElectronicSalesSlice.actions;

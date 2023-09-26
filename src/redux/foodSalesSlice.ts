import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodSale {
  year: string;
  totalFoodSales: number;
  avgSales: number;
}

export interface FoodSaleState {
  foodSales: FoodSale[];
}

const initialState: FoodSaleState = {
  foodSales: [],
};

export const FoodSalesSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodSale: (
      state,
      action: PayloadAction<{
        year: string;
        totalFoodSales: number;
        avgSales: number;
      }>
    ) => {
      state.foodSales.push({
        year: action.payload.year,
        totalFoodSales: action.payload.totalFoodSales,
        avgSales: action.payload.avgSales,
      });
    },
  },
});

export default FoodSalesSlice.reducer;

export const { addFoodSale } = FoodSalesSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameSale {
  year: string;
  totalGameSales: number;
  avgSales: number;
}

interface GameSaleState {
  gameSales: GameSale[];
}

const initialState: GameSaleState = {
  gameSales: [],
};

export const GameSalesSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGameSale: (
      state,
      action: PayloadAction<{
        year: string;
        totalGameSales: number;
        avgSales: number;
      }>
    ) => {
      state.gameSales.push({
        year: action.payload.year,
        totalGameSales: action.payload.totalGameSales,
        avgSales: action.payload.avgSales,
      });
    },
  },
});

export default GameSalesSlice.reducer;

export const { addGameSale } = GameSalesSlice.actions;

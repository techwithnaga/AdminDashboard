import { create } from "zustand";

interface GameSale {
  year: string;
  totalGameSales: number;
  avgSales: number;
}

interface GameSaleState {
  gameSales: GameSale[];
  addGameSale: (data: GameSale) => void;
}

export const useGameStore = create<GameSaleState>()((set) => ({
  gameSales: [],
  addGameSale: (data) =>
    set((state) => ({ gameSales: [...state.gameSales, data] })),
}));

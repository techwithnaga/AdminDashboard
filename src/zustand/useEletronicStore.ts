import { create } from "zustand";

interface ElectronicSale {
  year: string;
  totalElectronicSales: number;
  avgSales: number;
}

interface ElectronicSaleState {
  electronicSales: ElectronicSale[];
  addElectronicSale: (data: ElectronicSale) => void;
}

export const useElectronicStore = create<ElectronicSaleState>()((set) => ({
  electronicSales: [],
  addElectronicSale: (data) =>
    set((state) => ({
      electronicSales: [...state.electronicSales, data],
    })),
}));

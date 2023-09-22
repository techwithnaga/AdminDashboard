import { create } from "zustand";

interface FoodSale {
  year: string;
  totalFoodSales: number;
  avgSales: number;
}

interface FoodSaleState {
  foodSales: FoodSale[];
  addFoodSale: (data: FoodSale) => void;
}

export const useFoodStore = create<FoodSaleState>()((set) => ({
  foodSales: [],
  addFoodSale: (data) =>
    // console.log(data);
    set((state) => ({
      foodSales: [...state.foodSales, data],
    })),
  //   set((state) => ({ foodSales: [...state.foodSales, data] }));
  // },
}));

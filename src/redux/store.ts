import { configureStore } from "@reduxjs/toolkit";
import ElectronicSalesSlice from "./electronicSalesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { GameSalesSlice } from "./gameSalesSlice";
import { FoodSalesSlice } from "./foodSalesSlice";

const store = configureStore({
  reducer: {
    electronicSale: ElectronicSalesSlice,
    foodSale: FoodSalesSlice,
    gameSale: GameSalesSlice,
  },
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;

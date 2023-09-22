import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import StackAreaChart from "../../components/stackAreaChart/StackAreaChart";
import TotalRevenue from "../../components/totalRevenue/TotalRevenue";
import TotalSales from "../../components/totalSales/TotalSales";
import ProductsPieChart from "../../components/productsPieChart/ProductsPieChart";
import { barChartBoxVisit } from "../../data";
import ProductBarChart from "../../components/productBarChart/ProductBarChart";
import TopProduct from "../../components/topProduct/TopProduct";
import { useEffect, useState } from "react";
import { orders, products } from "../../data";
import { Product } from "../../types/Product";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addElectronicSale } from "../../redux/electronicSalesSlice";
import { useElectronicStore } from "../../zustand/useEletronicStore";
import { useGameStore } from "../../zustand/useGameStore";
import { useFoodStore } from "../../zustand/useFoodStore";

const Home = () => {
  const [allSales, setAllSales] = useState<
    {
      year: string;
      Electronics: number;
      Games: number;
      Foods: number;
    }[]
  >();

  const { electronicSales, addElectronicSale } = useElectronicStore();
  const { gameSales, addGameSale } = useGameStore();
  const { foodSales, addFoodSale } = useFoodStore();

  useEffect(() => {
    //key=year, value=[totalElectronicSales, totalGameSales, totalFoodSales]
    let productMap = new Map<string, [number, number, number]>();

    //populate the productMap
    for (let order of orders) {
      let product: Product = products.find((p) => p.id === order.productId)!;
      let year: string = order.year;
      if (!productMap.has(year)) {
        //init
        productMap.set(year, [0, 0, 0]);
      }

      let valueArr = productMap.get(year)!;
      if (product.category === "electronic") {
        valueArr[0] += order.quantity;
      } else if (product.category === "Video Game") {
        valueArr[1] += order.quantity;
      } else {
        valueArr[2] += order.quantity;
      }

      productMap.set(year, valueArr);
    }

    //convert to all sales
    // { year: string; Electronics: number; Games: number; Foods: number }

    let dataArr = [];

    for (let [year, arr] of productMap) {
      dataArr.push({
        year: year,
        Electronics: arr[0],
        Games: arr[1],
        Foods: arr[2],
      });

      //calculate avg arr
      let avgSales = Math.round((arr[0] + arr[1] + arr[2]) / 3);

      //set electronic sales

      // electronicSalesArr.push({
      //   year: year,
      //   totalElectronicSales: arr[0],
      //   avgSales: avgSales,
      // });
      let totalElectronicSales = arr[0];
      let totalGameSales = arr[1];
      let totalFoodSales = arr[2];

      if (electronicSales?.length === 0) {
        addElectronicSale({ year, totalElectronicSales, avgSales });
      }

      if (gameSales?.length === 0) {
        addGameSale({ year, totalGameSales, avgSales });
      }

      if (foodSales?.length === 0) {
        addFoodSale({ year, totalFoodSales, avgSales });
        // console.log(foodSales);
      }
    }

    setAllSales(dataArr);
  }, []);
  return (
    <div className="home">
      <div className="box box1">
        <TopBox></TopBox>
      </div>
      <div className="box box2">
        <TotalRevenue />
      </div>
      <div className="box box3">
        <TotalSales
          electronicSales={electronicSales}
          gameSales={gameSales}
          foodSales={foodSales}
        ></TotalSales>
      </div>
      <div className="box box4">
        <ProductsPieChart></ProductsPieChart>
      </div>
      <div className="box box5">
        <StackAreaChart />
      </div>
      <div className="box box6">
        <TopProduct></TopProduct>
      </div>
      <div className="box box7">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box8">
        <ProductBarChart allSales={allSales}></ProductBarChart>
      </div>
    </div>
  );
};

export default Home;

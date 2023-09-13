import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./productBarChart.scss";
import { orders, products } from "../../data";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";

const ProductBarChart = () => {
  const [data, setData] =
    useState<
      { year: string; Electronics: number; Games: number; Foods: number }[]
    >();

  useEffect(() => {
    let productMap = new Map<string, [number, number, number]>();

    for (let order of orders) {
      let product: Product = products.find((p) => p.id === order.productId)!;
      let year: string = order.year;
      if (!productMap.has(year)) {
        //init
        productMap.set(year, [0, 0, 0]);
      }

      let valueArr = productMap.get(year)!;
      if (product.category === "electronic") {
        valueArr[0] += 1;
      } else if (product.category === "Video Game") {
        valueArr[1] += 1;
      } else {
        valueArr[2] += 1;
      }

      productMap.set(year, valueArr);
    }

    //convert to data Arr
    // { year: string; Electronics: number; Games: number; Foods: number }
    let dataArr = [];
    for (let [year, arr] of productMap) {
      dataArr.push({
        year: year,
        Electronics: arr[0],
        Games: arr[1],
        Foods: arr[2],
      });
    }

    setData(dataArr);
  }, []);

  return (
    <div className="productBarChart">
      <div className="header">
        <h5>Sales Analytics</h5>
      </div>

      <div className="charContainer">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis
              label={{
                value: "# of sales",
                angle: -90,
                position: "center",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Electronics" fill="#8884d8" />
            <Bar dataKey="Games" fill="#82ca9d" />
            <Bar dataKey="Foods" fill="#E0BBE4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductBarChart;

import "./stackAreaChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { orders, products } from "../../data";

type Data = {
  name: string;
  electronics: number;
  games: number;
  foods: number;
};
const StackAreaChart = () => {
  const [result, setResult] = useState<Data[]>();

  useEffect(() => {
    const getRevenueByYear = () => {
      //key = year and value [electronic: 0, videoGame: 0, food: 0] }
      let map = new Map();
      for (let order of orders) {
        let product = products.find(
          (product) => product.id === order.productId
        )!;
        let totalRevenue = product.price * order.quantity;

        if (!map.has(order.year)) {
          //initialize
          map.set(order.year, [0, 0, 0]);
        }

        let value = map.get(order.year);
        if (product.category === "electronic") {
          value[0] += totalRevenue;
        } else if (product.category === "Food") {
          value[2] += totalRevenue;
        } else {
          value[1] += totalRevenue;
        }
        map.set(order.year, value);

        let sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

        let resultArr: Data[] = [];
        for (let [year, arr] of sortedMap) {
          let data: Data = {
            name: year.toString(),
            electronics: arr[0],
            games: arr[1],
            foods: arr[2],
          };
          resultArr.push(data);
        }
        setResult(resultArr);
      }
    };

    getRevenueByYear();
  }, []);

  return (
    <div className="stackAreaChart">
      <h5>Revenue Analytics</h5>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={result}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="electronics"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="games"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="foods"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackAreaChart;

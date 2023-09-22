import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { orders, products } from "../../data";
import "./totalRevenue.scss";
import { formatDollar } from "../../util";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Data = {
  year: string;
  revenue: number;
};
const TotalRevenue = () => {
  const [chartData, setChartData] = useState<Data[]>([]);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const getData = () => {
      let map = new Map();
      for (let order of orders) {
        let product = products.find((p) => p.id === order.productId)!;
        let totalRevenue = product.price * order.quantity;

        if (!map.has(order.year)) {
          //initialize
          map.set(order.year, 0);
        }
        map.set(order.year, map.get(order.year)! + totalRevenue);
      }

      //convert to array
      let resultArr: Data[] = [];
      for (let [year, revenue] of map) {
        resultArr.push({ year: year.toString(), revenue: revenue });
      }
      setChartData(resultArr);
    };

    getData();
  }, []);

  useEffect(() => {
    const calculatePercentage = () => {
      let currentRevenue = chartData[4].revenue;
      let prevRevenue = chartData[3].revenue;
      setPercentage(
        Math.floor(((currentRevenue - prevRevenue) / prevRevenue) * 100)
      );
    };
    if (chartData.length > 0) {
      calculatePercentage();
    }
  }, [chartData]);

  return (
    <div className="totalRevenue">
      <div className="boxInfo">
        <div className="title">
          <h5>Total Revenue</h5>
          <div className="percentageWrapper">
            <div
              className="percentage"
              style={{ color: percentage > 0 ? "limegreen" : "tomato" }}
            >
              {percentage <= 0 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowUpIcon>
              )}
              {percentage}%
            </div>
          </div>
        </div>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="95%">
            <LineChart data={chartData}>
              {/* <Tooltip
                wrapperStyle={{ background: "transparent" }}
                itemStyle={{ background: "transparent" }}
                contentStyle={{
                  background: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none", background: "transparent" }}
                position={{ x: 10, y: 60 }}
              ></Tooltip> */}
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                }}
              />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="year" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="gold"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import "./productsPieChart.scss";
import { products } from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPieChart = () => {
  type Data = {
    name: string;
    value: number;
    color: string;
  };
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    //key = product category and value is count
    let map = new Map();
    let total = 0;
    for (let product of products) {
      if (!map.has(product.category)) {
        //initialize
        map.set(product.category, 0);
      }
      map.set(product.category, map.get(product.category) + 1);
      total += 1;
    }

    //convert it to data arr  e.g. [{name:"electronic", value:30, color: "#8884d8"}]
    let dataArr: Data[] = [];
    for (let [category, count] of map) {
      let item: Data = { name: "", value: 0, color: "" };
      item.value = Math.floor((count / total) * 100);
      if (category === "electronic") {
        item.name = "Electronics";
        item.color = "#8884d8";
      } else if (category === "Video Game") {
        item.name = "Games";
        item.color = "#82ca9d";
      } else {
        item.name = "Foods";
        item.color = "#FFC436";
      }
      dataArr.push(item);
    }
    setData(dataArr);
  }, []);
  return (
    <div className="productsPieChart">
      <div className="pieChartHeader">
        <h5>Products</h5>
        <Link to="/products" className="link">
          View All
        </Link>
      </div>

      <div className="productPieChart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            ></Tooltip>
            <Pie
              data={data}
              innerRadius="65%"
              outerRadius="100%"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map((item) => {
          return (
            <div className="option">
              <div className="top">
                <div
                  className="dot"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <label>{item.name}</label>
              </div>
              <label className="value">{item.value}%</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPieChart;

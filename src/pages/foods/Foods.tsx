import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./foods.scss";
import { useFoodStore } from "../../zustand/useFoodStore";

const Foods = () => {
  const { foodSales } = useFoodStore();
  console.log(foodSales);
  return (
    <div className="foods">
      <div className="header">
        <h3 style={{ color: "lightgrey" }}>Food Sales</h3>
      </div>

      <ResponsiveContainer width="95%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={foodSales}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            label={{
              value: "Number of sales",
              angle: -90,
              position: "center",
            }}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value: string, entry: any) => {
              const { color } = entry;

              if (value === "totalFoodSales") {
                return <span style={{ color }}>Food Sales</span>;
              }
              return <span style={{ color }}>Average Sales of All Items</span>;
            }}
          />
          <Line
            type="monotone"
            dataKey="totalFoodSales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="avgSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Foods;

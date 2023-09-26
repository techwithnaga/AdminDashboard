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
import "./electronic.scss";
import { useElectronicStore } from "../../zustand/useEletronicStore";

const Electronics = () => {
  const { electronicSales } = useElectronicStore();

  return (
    <div className="electronics">
      <div className="header">
        <h3 style={{ color: "lightgrey" }}>Electronic Sales</h3>
      </div>

      <ResponsiveContainer width="95%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={electronicSales}
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

              if (value === "totalElectronicSales") {
                return <span style={{ color }}>Electronic Sales</span>;
              }
              return <span style={{ color }}>Average Sales of All Items</span>;
            }}
          />
          <Line
            type="monotone"
            dataKey="totalElectronicSales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="avgSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Electronics;

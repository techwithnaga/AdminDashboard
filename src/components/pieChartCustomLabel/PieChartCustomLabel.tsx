import "./pieChartCustomLabel.scss";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Mobile", value: 500, color: "#0088FE" },
  { name: "Desktop", value: 200, color: "#00C49F" },
  { name: "Laptop", value: 200, color: "#FFBB28" },
  { name: "Tablet", value: 100, color: "#FF8042" },
];

const PieChartCustomLabel = () => {
  return (
    <div className="pieChartCustomLabel">
      <h5>Leads by Source</h5>

      <div className="chart">
        <ResponsiveContainer width="99%" height="95%">
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
              <div className="header">
                <div
                  className="dot"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <label>{item.name}</label>
              </div>
              <label>{item.value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartCustomLabel;

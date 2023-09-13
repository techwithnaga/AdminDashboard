import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h5>{props.title}</h5>
      <div className="chart">
        <ResponsiveContainer width="99%">
          <BarChart height="100%" data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            ></Tooltip>
            <XAxis dataKey="name"></XAxis>
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;

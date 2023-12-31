import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Tooltip } from "recharts";
import "./chartBox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="{props.icon}" alt="" />
          <h5>{props.title}</h5>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          view all
        </Link>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                wrapperStyle={{ background: "transparent" }}
                itemStyle={{ background: "transparent" }}
                contentStyle={{
                  background: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none", background: "transparent" }}
                position={{ x: 10, y: 60 }}
              ></Tooltip>
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div
            className="percentage"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;

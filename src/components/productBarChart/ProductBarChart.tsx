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

type Props = {
  allSales:
    | {
        year: string;
        Electronics: number;
        Games: number;
        Foods: number;
      }[]
    | undefined;
};

const ProductBarChart = (props: Props) => {
  // const [data, setData] = useState<
  //   {
  //     year: string;
  //     electronicSales: number;
  //     gameSales: number;
  //     foodSales: number;
  //   }[]
  // >(props.allSales);

  return (
    <div className="productBarChart">
      <div className="header">
        <h5>Sales Analytics</h5>
      </div>

      <div className="charContainer">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.allSales}>
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

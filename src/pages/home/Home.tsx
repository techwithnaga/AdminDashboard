import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import StackAreaChart from "../../components/stackAreaChart/StackAreaChart";
import PieChartCustomLabel from "../../components/pieChartCustomLabel/PieChartCustomLabel";
import { chartBoxUser } from "../../data";
import { chartBoxProduct } from "../../data";
import { chartBoxRevenue } from "../../data";
import { chartBoxConversion } from "../../data";
import { barChartBoxRevenue } from "../../data";
import { barChartBoxVisit } from "../../data";
import TopProduct from "../../components/topProduct/TopProduct";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox></TopBox>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartCustomLabel />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <TopProduct></TopProduct>
      </div>
      <div className="box box7">
        <StackAreaChart />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;

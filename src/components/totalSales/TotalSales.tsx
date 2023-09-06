import { useEffect, useState } from "react";
import { orders, products } from "../../data";
import { Product } from "../../types/Product";
import "./totalSales.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const TotalSales = () => {
  const [electronicPercent, setElectronicPercent] = useState<number>(0);
  const [videoGamePercent, setVideoGamePercent] = useState<number>(0);
  const [foodPercent, setFoodPercent] = useState<number>(0);
  const [totalPercent, setTotalPercent] = useState<number>(0);
  const [data, setData] = useState<Map<any, any>>();

  useEffect(() => {
    const getPercentages = () => {
      //key = order category, value = [2023 qty, 2022 qty]
      let lastTwoYears = new Map();
      lastTwoYears.set("total", [0, 0]);

      for (let order of orders) {
        let product = products.find(
          (product: Product) => product.id === order.productId
        )!;
        if (!lastTwoYears.has(product.category)) {
          //initialize
          lastTwoYears.set(product.category, [0, 0]);
        }

        let value = lastTwoYears.get(product.category);
        let totalValue = lastTwoYears.get("total");
        if (order.year === "2023") {
          value[0] += order.quantity;
          totalValue[0] += order.quantity;
        } else if (order.year === "2022") {
          value[1] += order.quantity;
          totalValue[1] += order.quantity;
        }
        lastTwoYears.set(product.category, value);
      }

      setData(lastTwoYears);

      //calculate electronic percentage
      let electronicSales = lastTwoYears.get("electronic");
      setElectronicPercent(
        Math.floor(
          ((electronicSales[0] - electronicSales[1]) / electronicSales[1]) * 100
        )
      );

      //calculate Video Game percentage
      let gameSales = lastTwoYears.get("Video Game");
      setVideoGamePercent(
        Math.floor(((gameSales[0] - gameSales[1]) / gameSales[1]) * 100)
      );

      //calculate food percentage
      let foodSales = lastTwoYears.get("Food");
      setFoodPercent(
        Math.floor(((foodSales[0] - foodSales[1]) / foodSales[1]) * 100)
      );

      //calculate total percentage
      let totalSales = lastTwoYears.get("total");
      setTotalPercent(
        Math.floor(((totalSales[0] - totalSales[1]) / totalSales[1]) * 100)
      );
    };
    getPercentages();
  }, []);

  return (
    <div className="totalSales">
      <div className="boxInfo">
        <div className="title">
          <h5>Total Sales This Year</h5>
        </div>
        <div className="percentageWrapper">
          <div className="percentageItem">
            <h6>Electronics</h6>
            <h6>{data?.get("electronic")[0]}</h6>
            <div
              className="percentage"
              style={{
                color: electronicPercent > 0 ? "limegreen" : "tomato",
              }}
            >
              {electronicPercent > 0 ? (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowDownIcon>
              )}
              {electronicPercent}%
            </div>
          </div>
          <div className="percentageItem">
            <h6>Video Games</h6>
            <h6>{data?.get("Video Game")[0]}</h6>
            <div
              className="percentage"
              style={{
                color: videoGamePercent > 0 ? "limegreen" : "tomato",
              }}
            >
              {videoGamePercent > 0 ? (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowDownIcon>
              )}
              {videoGamePercent}%
            </div>
          </div>
          <div className="percentageItem">
            <h6>Foods</h6>
            <h6>{data?.get("Food")[0]}</h6>
            <div
              className="percentage"
              style={{
                color: foodPercent > 0 ? "limegreen" : "tomato",
              }}
            >
              {foodPercent > 0 ? (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowDownIcon>
              )}
              {foodPercent}%
            </div>
          </div>
          <div className="percentageItem" style={{ marginTop: "5px" }}>
            <h6 style={{ fontSize: "130%" }}>Total</h6>
            <h6 style={{ fontSize: "130%" }}>{data?.get("total")[0]}</h6>
            <div
              className="percentage"
              style={{
                color: totalPercent > 0 ? "limegreen" : "tomato",
                fontSize: "130%",
              }}
            >
              {totalPercent > 0 ? (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "30px" }}
                ></KeyboardArrowDownIcon>
              )}
              {totalPercent}%
            </div>
          </div>
        </div>
        <div className="salesBottom">
          <Link to="/orders" className="link">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;

import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { Purchase } from "../../types/Purchase";
import { useNavigate, useParams } from "react-router-dom";
import { customers, orders, products } from "../../data";
import "./user.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { formatDollar } from "../../util";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const UserDetail = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [data, setData] = useState<{ year: string; amt: number }[]>();
  const [numberPurchases, setNumberPurchases] = useState<number>();
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      customers.forEach((user) => {
        if (user.id.toString() === id) {
          setCurrentUser(user);
        }
      });
    };
    getUser();

    const getData = () => {
      let map: { [year: string]: number } = {};

      //init map
      for (let year of ["2019", "2020", "2021", "2022", "2023"]) {
        map[year] = 0;
      }

      let filteredOrders = orders.filter(
        (order) => order.customerId.toString() === id
      );
      setNumberPurchases(filteredOrders.length);
      let totalDollar = 0;
      for (let order of filteredOrders) {
        let year = order.year;
        let itemPrice = products.find(
          (product) => product.id === order.productId
        )?.price;
        let total = itemPrice ? itemPrice * order.quantity : 0;
        totalDollar += total;
        map[year] = map[year] ? map[year] + total : total;

        let result = [];
        for (let key in map) {
          result.push({ year: key, amt: map[key] });
        }
        setTotalSpent(totalDollar);
        setData(result);
      }
    };
    getData();

    const getPurchases = () => {
      let result: Purchase[] = [];

      let filteredOrders = orders.filter(
        (order) => order.customerId.toString() === id
      );

      for (let order of filteredOrders) {
        let year = order.year;
        let quantity = order.quantity;
        let total = 0;
        let description = "";
        for (let product of products) {
          if (product.id === order.productId) {
            total += quantity * product.price;
            description = product.description;
          }
        }

        result.push({
          year: year,
          quantity: quantity,
          total: total,
          description: description,
        });
      }
      setPurchases(result);
    };
    getPurchases();
  }, []);

  const handleNext = () => {
    navigate(
      `/user/${currentUser ? (currentUser.id % customers.length) + 1 : 1}`
    );
    navigate(0);
  };

  return (
    <div className="user">
      <div className="buttons">
        {/* <Button
          variant="text"
          color="success"
          className="prevNextButton"
          onClick={() => {
            navigate(-1);
            location.reload();
          }}
        >
          <NavigateBeforeIcon className="icon"></NavigateBeforeIcon>
          Previous
        </Button> */}
        <Button
          variant="text"
          color="success"
          className="prevNextButton"
          onClick={() => handleNext()}
        >
          Next
          <NavigateNextIcon className="icon"></NavigateNextIcon>
        </Button>
      </div>
      <div className="userContainer">
        <div className="left">
          <div className="leftTop">
            <h5 className="title">User Info</h5>
            <div className="content">
              <img src={currentUser?.img} className="userImg" alt="" />
              <div className="items">
                <div className="item">
                  <p>First Name </p>
                  <p>:</p>
                  <p>{currentUser?.firstName}</p>
                </div>
                <div className="item">
                  <p>Last Name </p>
                  <p>:</p>
                  <p>{currentUser?.lastName}</p>
                </div>
                <div className="item">
                  <p>Email </p>
                  <p>:</p>
                  <p>{currentUser?.email}</p>
                </div>
                <div className="item">
                  <p>Phone </p>
                  <p>:</p>
                  <p>{currentUser?.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="leftBottom">
            <h5 className="title">Puchase Summary</h5>
            <div className="leftBottomContainer">
              <div className="summaryItem">
                <p>Number of Purchases </p>
                <p>:</p>
                <p>{numberPurchases}</p>
              </div>
              <div className="summaryItem">
                <p>Total Spent (USD)</p>
                <p>:</p>
                <p>{formatDollar(totalSpent)}</p>
              </div>
              <br />

              <BarChart
                width={730}
                height={350}
                data={data}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  label={{
                    value: "Total ($)",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                  }}
                />
                <Tooltip />
                <Bar dataKey="amt" fill="#ccb136" />
              </BarChart>
            </div>
          </div>
        </div>

        <div className="right">
          <h5 className="title">Purchase History</h5>

          <div className="content">
            <ul>
              {purchases.map((purchase) => {
                return (
                  <li>
                    <div className="purchase">
                      <label>{purchase.year}</label>
                      <h6>{purchase.description}</h6>
                      <div className="quantityTotal">
                        <p>Quantity: {purchase.quantity}</p>
                        <p>|</p>
                        <p>Total : {formatDollar(purchase.total)}</p>
                      </div>

                      <div className="dot"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

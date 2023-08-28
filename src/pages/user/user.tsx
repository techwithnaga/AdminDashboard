import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { useParams } from "react-router-dom";
import { userRows } from "../../data";
import "./user.scss";

const UserDetail = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const { id } = useParams();

  useEffect(() => {
    const getUser = () => {
      userRows.forEach((user) => {
        if (user.id.toString() === id) {
          setCurrentUser(user);
        }
      });
    };
    getUser();
  });

  return (
    <div className="user">
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
        </div>
      </div>

      <div className="right">
        <h5 className="title">Purchase History</h5>

        <div className="content">
          <ul>
            <li>
              <div className="purchase">
                <label>2020-12-20</label>
                <h5>Playstation 5</h5>
                <p>Quantity: 5</p>
                <p>Total : $100</p>

                <div className="dot"></div>
              </div>
            </li>
            <li>
              <div className="purchase">
                <label>2020-12-20</label>
                <h5>Playstation 5</h5>
                <p>Quantity: 5</p>
                <p>Total : $100</p>

                <div className="dot"></div>
              </div>
            </li>
            <li>
              <div className="purchase">
                <label>2020-12-20</label>
                <h5>Playstation 5</h5>
                <p>Quantity: 5</p>
                <p>Total : $100</p>
                <div className="dot"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

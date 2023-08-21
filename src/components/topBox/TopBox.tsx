import { topDealUsers } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h5>Top Deals</h5>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userText">
                  <span className="userName">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;

import "./topBox.scss";
import { useEffect, useState } from "react";
import { orders, products, customers } from "../../data";
import { Product } from "../../types/Product";
import { Customer } from "../../types/Customer";
import { Link } from "react-router-dom";

const TopBox = () => {
  const [topCustomers, setTopCustomer] = useState<Customer[]>([]);
  const [topDollars, setTopDollars] = useState<number[]>([]);

  useEffect(() => {
    const getLoyalCustomerRanking = () => {
      //customerId, total $ spent
      let map = new Map<number, number>();

      for (let order of orders) {
        let product: Product = products.find(
          (product: Product) => product.id === order.productId
        )!;
        let total = product.price * order.quantity;
        let customerId = order.customerId;
        if (map.has(order.customerId)) {
          map.set(customerId, map.get(customerId)! + total);
        } else {
          map.set(customerId, total);
        }
      }
      let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
      let topCustomers: Customer[] = [];
      let topDollars: number[] = [];

      for (let [id, totalDollar] of sortedMap) {
        let customer: Customer = customers.find(
          (customer) => customer.id === id
        )!;
        topCustomers.push(customer);
        topDollars.push(totalDollar);
      }
      setTopCustomer(topCustomers);
      setTopDollars(topDollars);
    };

    getLoyalCustomerRanking();
  }, []);
  return (
    <div className="topBox">
      <h5>Most Loyal Customers</h5>
      <div className="list">
        {topCustomers?.map((user, idx) => {
          return (
            <div className="listItem" key={user.id}>
              <Link to={`/user/${user.id}`}>
                <div className="customer">
                  <img src={user.img} alt="" />
                  <div className="userText">
                    <span className="userName">
                      {user.firstName} {user.lastName}
                    </span>
                    <span className="email">{user.email}</span>
                  </div>
                </div>
              </Link>
              <span className="amount">$ {topDollars[idx]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;

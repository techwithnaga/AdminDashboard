import { useEffect, useState } from "react";
import { orders, products } from "../../data";
import { Product } from "../../types/Product";
import "./topProduct.scss";
import { Link } from "react-router-dom";

const TopProduct = () => {
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [totalSales, setTotalSales] = useState<number[]>([]);
  useEffect(() => {
    const getTotalSalesByProduct = () => {
      //productId, totalSales
      let map = new Map<number, number>();

      for (let order of orders) {
        if (map.has(order.productId)) {
          map.set(order.productId, map.get(order.productId)! + order.quantity);
        } else {
          map.set(order.productId, order.quantity);
        }
      }

      //sort map
      let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
      let productArr: Product[] = [];
      let sales: number[] = [];

      for (let [productId, totalSales] of sortedMap) {
        let product = products.find((p) => p.id === productId)!;

        productArr.push(product);
        sales.push(totalSales);
      }

      setTopProducts(productArr);
      setTotalSales(sales);
    };
    getTotalSalesByProduct();
  }, []);

  return (
    <div className="topProduct">
      <h5>Top Product by Sales</h5>
      <div className="list">
        {topProducts?.map((product, idx) => {
          return (
            <div className="listItem" key={product.id}>
              <div className="product">
                <img src={product.img} alt="" />
                <div className="productText">
                  <span className="description">{product.description}</span>
                  <span className="category">{product.category}</span>
                </div>
              </div>
              <div className="totalSales">
                <span className="amount">{totalSales[idx]}</span>
                <span>total</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProduct;

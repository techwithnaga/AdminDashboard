import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="group">
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="item">
                  <img src={listItem.icon} alt="" />
                  <div className="itemTitle">{listItem.title}</div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

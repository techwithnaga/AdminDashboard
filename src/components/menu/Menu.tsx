import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      <div className="head">
        <img src="/myIcon.png" alt="" className="profilePic" />
        <h5>Masnaga</h5>
        <label htmlFor="title" className="title">
          Chief Technology Officer
        </label>
      </div>

      {menu.map((item) => {
        return (
          <div key={item.id.toString()} className="group">
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="item">
                  <img src={listItem.icon} alt="" className="icon" />
                  <div className="itemTitle">
                    <p>{listItem.title}</p>
                  </div>
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

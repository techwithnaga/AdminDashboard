import "./navbar.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      width: 0,
      height: 0,
      // transition: {
      //   staggerChildren: 0.2,
      //   staggerDirection: -1,
      // },
    },
    open: {
      width: "100%",
      height: "100%",
      // transition: {
      //   staggerChildren: 0.2,
      //   staggerDirection: 1,
      // },
    },
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <MenuIcon
            className="menuIcon"
            onClick={() => setShowMenu(true)}
          ></MenuIcon>

          <div className="mainLogo">
            <img src="MasnagaLogo.svg" alt="" />
            <h5>DASHBOARD</h5>
          </div>
        </div>
      </Link>

      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>

        <img src="/settings.svg" alt="" />
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="menuNavBar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            transition={{ duration: 0.7 }}
          >
            <div className="menuNavBarContainer">
              <motion.div className="icon" variants={itemVariants}>
                <CloseIcon
                  onClick={() => setShowMenu(false)}
                  style={{ color: "red" }}
                  className="closeIcon"
                ></CloseIcon>
              </motion.div>

              <div className="menuItems">
                <div className="menuItem">
                  <motion.p
                    whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
                    variants={itemVariants}
                  >
                    Homepage
                  </motion.p>
                </div>
                <div className="menuItem">
                  <motion.p
                    whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
                    variants={itemVariants}
                  >
                    Customers
                  </motion.p>
                </div>
                <div className="menuItem">
                  <motion.p
                    whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
                    variants={itemVariants}
                  >
                    Products
                  </motion.p>
                </div>
                <div className="menuItem">
                  <motion.p
                    whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
                    variants={itemVariants}
                  >
                    Orders
                  </motion.p>
                </div>
                <div className="menuItem">
                  <motion.p
                    whileHover={{ scale: 1.5, transition: { duration: 0.8 } }}
                    variants={itemVariants}
                  >
                    Calendar
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";

const Layout = () => {
  return (
    <div className="main">
      <div className="container">
        <Menu />

        <div className="contentContainer">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

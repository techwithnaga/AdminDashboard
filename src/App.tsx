import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Router,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import Calendar from "./pages/calendar/Calendar";
import UserDetail from "./pages/user/User";
import "./styles/global.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Orders from "./pages/orders/Orders";
import Electronics from "./pages/electronics/Electronics";
import Games from "./pages/games/Games";
import Foods from "./pages/foods/Foods";
import About from "./pages/about/About";

const Layout = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#345b4d",
      },
      secondary: {
        main: "#ffdd43",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
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
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/customers",
          element: <Users />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
        {
          path: "/games",
          element: <Games />,
        },
        {
          path: "/foods",
          element: <Foods />,
        },

        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/user/:id",
          element: <UserDetail />,
        },
        {
          path: "/about",
          element: <About />,
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

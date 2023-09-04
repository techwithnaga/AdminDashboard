import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
          path: "/users",
          element: <Users />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/user/:id",
          element: <UserDetail />,
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

import { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./orders.scss";
import { Link } from "react-router-dom";

import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { orders, customers, products } from "../../data";
import DataTable from "../../components/dataTable/DataTable";

const Orders = () => {
  const [rowsState, setRowsState] = useState<Data[]>([]);
  const handleDelete = (id: number) => {
    setRowsState(rowsState.filter((row) => row.id !== id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer",
      headerName: "Customer",
      width: 250,
      type: "text",
      renderCell: (params) => {
        if (params.row.customerImg) {
          return (
            <div className="customer">
              <img src={params.row.customerImg} className="avatar"></img>
              <div className="name">
                <p>{params.row.firstName}</p>
                <p>{params.row.lastName}</p>
              </div>
            </div>
          );
        } else {
          return <img src={"/noavatar.png"} className="avatar"></img>;
        }
      },
    },
    {
      field: "product",
      headerName: "Product",
      type: "text",
      width: 300,
      renderCell: (params) => {
        if (params.row.productImg) {
          return (
            <div className="product">
              <img src={params.row.productImg} className="avatar"></img>
              <p>{params.row.description}</p>
            </div>
          );
        } else {
          return (
            <div className="product">
              <img src={"/noavatar.png"} className="avatar"></img>
              <p>{params.row.description}</p>
            </div>
          );
        }
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "year",
      headerName: "Year",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="icons">
            <Link to={`/user/${params.row.id}`} state={{ user: params.row }}>
              <PageviewOutlinedIcon
                className="icon"
                style={{ color: "limegreen" }}
              ></PageviewOutlinedIcon>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="icon"
              style={{ color: "tomato" }}
              onClick={() => handleDelete(params.row.id)}
            ></DeleteOutlineOutlinedIcon>
          </div>
        );
      },
    },
  ];

  type Data = {
    id: number;
    customerImg: string;
    firstName: string;
    lastName: string;
    productImg: string;
    description: string;
    quantity: number;
    year: string;
  };

  useEffect(() => {
    const convertOrderData = () => {
      let dataArr = [];

      for (let order of orders) {
        let item: Data = {
          id: 0,
          customerImg: "",
          firstName: "",
          lastName: "",
          productImg: "",
          description: "",
          quantity: 0,
          year: "",
        };

        let customer = customers.find((c) => c.id === order.customerId)!;
        console.log(customer);

        let product = products.find((p) => p.id === order.productId)!;

        item.id = order.id;
        item.customerImg = customer.img;
        item.firstName = customer.firstName;
        item.lastName = customer.lastName;
        item.productImg = product.img;
        item.description = product.description;
        item.quantity = order.quantity;
        item.year = order.year;

        dataArr.push(item);
      }
      setRowsState(dataArr);
    };

    convertOrderData();
  }, []);
  return (
    <div className="orders">
      <div className="header">
        <h1 style={{ color: "lightgrey" }}>Orders</h1>
      </div>

      <div className="table">
        <DataTable rowsState={rowsState} columns={columns}></DataTable>
      </div>
    </div>
  );
};

export default Orders;

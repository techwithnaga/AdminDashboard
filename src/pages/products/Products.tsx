import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import { Product } from "../../types/Product";
import DataTable from "../../components/dataTable/DataTable";
import { useState } from "react";
import { formatDollar } from "../../util";

const Products = () => {
  const [rowsState] = useState<Product[]>(products);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      type: "text",
      renderCell: (params) => {
        if (params.row.img) {
          return <img src={params.row.img} className="avatar"></img>;
        } else {
          return <img src={"/noavatar.png"} className="avatar"></img>;
        }
      },
    },
    {
      field: "description",
      headerName: "Description",
      type: "text",
      width: 250,
      editable: true,
    },
    {
      field: "color",
      headerName: "Color",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "text",
      width: 250,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      type: "text",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      type: "text",
      width: 120,
      editable: true,
      renderCell: (params) => {
        return <p>{formatDollar(params.row.price)}</p>;
      },
    },
  ];

  return (
    <div className="users">
      <div className="header">
        <h1 style={{ color: "lightgrey" }}>Products</h1>
      </div>

      <div className="table">
        <DataTable rowsState={rowsState} columns={columns}></DataTable>
      </div>
    </div>
  );
};

export default Products;

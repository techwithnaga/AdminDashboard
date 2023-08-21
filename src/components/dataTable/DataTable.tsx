import "./dataTable.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState, useEffect } from "react";

type User = {
  id: number;
  img: String;
  lastName: String;
  firstName: String;
  email: String;
  phone: String;
  createdAt: String;
  verified: Boolean;
};

type Props = {
  columns: GridColDef[];
  slug: String;
  rowsState: User[];
  setRowsState: React.Dispatch<React.SetStateAction<User[]>>;
};

const DataTable = (props: Props) => {
  const { rowsState, setRowsState, columns, slug } = props;

  const handleDelete = (idToDelete: number) => {
    let newRows = rowsState.filter((row) => row.id !== idToDelete);
    setRowsState(newRows);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="icons">
          <Link to={`/${slug}/${params.row.id}`}>
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
  };

  useEffect(() => {}, [rowsState]);
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rowsState}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;

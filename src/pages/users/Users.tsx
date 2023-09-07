import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import { customers } from "../../data";
import DataTable from "../../components/dataTable/DataTable";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddUser from "../../components/AddUser/AddUser";
import { Link } from "react-router-dom";
import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

type User = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  verified: boolean;
};

const Users = () => {
  const [open, setOpen] = useState(false);
  const [lastId, setLastId] = useState(customers.length);
  const [rowsState, setRowsState] = useState<User[]>(customers);
  const handleDelete = (id: number) => {
    setRowsState(rowsState.filter((row) => row.id !== id));
  };

  const addRow = (newRow: User) => {
    newRow.id = rowsState.length + 1;
    newRow.verified = false;
    newRow.img = "";

    setRowsState((prevRows) => [...prevRows, newRow]);
  };

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
      field: "firstName",
      headerName: "First name",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      width: 250,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "text",
      width: 200,
      editable: true,
    },
    {
      field: "verified",
      headerName: "Verified",
      type: "text",

      width: 110,
      renderCell: (params) => {
        if (params.row.verified) {
          return <p>YES</p>;
        } else {
          return <p>NO</p>;
        }
      },
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
  return (
    <div className="users">
      <div className="header">
        <h1 style={{ color: "lightgrey" }}>Customers</h1>
        <button className="btn" onClick={() => setOpen(true)}>
          <AddIcon
            style={{ fontSize: "20px", color: "var(--color-gold500)" }}
          ></AddIcon>{" "}
          Create User
        </button>
      </div>

      <div className="table">
        <DataTable rowsState={rowsState} columns={columns}></DataTable>
      </div>
      {open && (
        <AddUser
          setOpen={setOpen}
          columns={columns}
          addRow={addRow}
          lastId={lastId}
          setLastId={setLastId}
        />
      )}
    </div>
  );
};

export default Users;

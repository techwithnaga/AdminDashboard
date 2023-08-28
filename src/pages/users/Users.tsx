import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import DataTable from "../../components/dataTable/DataTable";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddUser from "../../components/AddUser/AddUser";

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
];

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
  const [lastId, setLastId] = useState(userRows.length);
  const [rowsState, setRowsState] = useState<User[]>(userRows);

  const addRow = (newRow: User) => {
    newRow.id = rowsState.length + 1;
    newRow.verified = false;
    newRow.img = "";

    setRowsState((prevRows) => [...prevRows, newRow]);
  };
  return (
    <div className="users">
      <div className="header">
        <h1 style={{ color: "lightgrey" }}>Users</h1>
        <button className="btn" onClick={() => setOpen(true)}>
          <AddIcon
            style={{ fontSize: "20px", color: "var(--color-gold500)" }}
          ></AddIcon>{" "}
          Create User
        </button>
      </div>

      <div className="table">
        <DataTable
          slug="user"
          rowsState={rowsState}
          setRowsState={setRowsState}
          columns={columns}
        ></DataTable>
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

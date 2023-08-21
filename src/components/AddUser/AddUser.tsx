import "./addUser.scss";
import { GridColDef } from "@mui/x-data-grid";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button from "@mui/material/Button";
import { useState } from "react";

type User = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified: boolean;
};

type Props = {
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addRow: (newRow: User) => void;
  lastId: number;
  setLastId: React.Dispatch<React.SetStateAction<number>>;
};

const AddUser = (props: Props) => {
  const { columns, setOpen, addRow, lastId, setLastId } = props;
  const [data, setData] = useState<User>({
    id: lastId + 1,
    img: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    verified: true,
    createdAt: new Date().toUTCString(),
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(data);
    setLastId(lastId + 1);
    addRow(data);
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="addUser">
      <div className="addUserContainer">
        <div className="header">
          <h2>Add User</h2>
          <CloseOutlinedIcon onClick={() => setOpen(false)} className="icon" />
        </div>
        <div className="items">
          {columns
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "img" &&
                item.field !== "verified"
            )
            .map((col) => {
              return (
                <div className="item">
                  <label>{col.headerName}</label>
                  <input
                    type={col.type}
                    placeholder={col.field}
                    name={col.field}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              );
            })}

          <Button
            variant="outlined"
            color="success"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

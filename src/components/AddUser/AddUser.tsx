import "./addUser.scss";
import { GridColDef } from "@mui/x-data-grid";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

type User = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
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
  const { setOpen, addRow, lastId, setLastId } = props;

  const handleFormSubmit = (values: User) => {
    setLastId(lastId + 1);
    addRow(values);
    setOpen(false);
  };

  const initialValues = {
    id: lastId + 1,
    img: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    verified: true,
  };

  const phoneRegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
  });

  return (
    <div className="addUser">
      <div className="addUserContainer">
        <div className="header">
          <h2>Add User</h2>
          <CloseOutlinedIcon onClick={() => setOpen(false)} className="icon" />
        </div>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="items">
                <TextField
                  fullWidth
                  variant="filled"
                  label="First Name"
                  type="text"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  className="item"
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  className="item"
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Email"
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  className="item"
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Phone"
                  type="text"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  className="item"
                />
                <Button
                  variant="outlined"
                  color="success"
                  className="btn"
                  type="submit"
                >
                  Create New User
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUser;

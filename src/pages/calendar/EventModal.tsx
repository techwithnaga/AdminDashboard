import { TextField } from "@mui/material";
import "./eventModal.scss";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

type event = {
  id: string;
  title: string;
  start: string;
};

type EventProp = {
  title: String;
  data: event;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdate?: (data: event) => void;
  handleCreate?: (data: event) => void;
};

const EventModal = (prop: EventProp) => {
  const { title, data, setShowModal, handleUpdate, handleCreate } = prop;
  let defaultValues = {
    id: data.id,
    title: data.title,
    start: data.start,
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "all",
  });

  const onSubmit = (data: event) => {
    if (title === "Create") {
      handleCreate!(data);
    } else {
      handleUpdate!(data);
    }
  };

  return (
    <div className="eventModal">
      <div className="eventModalContainer">
        <div className="header">
          <h4>{title} Event</h4>
          <CloseIcon
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => setShowModal(false)}
          ></CloseIcon>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input">
            <TextField
              label="Event Title"
              variant="standard"
              {...register("title", { required: "Title can't be empty" })}
              //   color={errors.title ? "error" : ""}
              sx={{ input: { color: errors.title ? "red" : "" } }}
            />
            <label style={{ color: "red" }}>{errors.title?.message}</label>
          </div>

          <div className="buttonWrapper">
            <Button
              variant="outlined"
              color="success"
              className="saveButton"
              type="submit"
            >
              {title === "Create" ? "Save" : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;

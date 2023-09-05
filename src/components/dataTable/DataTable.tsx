import "./dataTable.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useEffect } from "react";
import { User } from "../../types/User";
import { Product } from "../../types/Product";

type Props = {
  columns: GridColDef[];
  // slug: String;
  rowsState: User[] | Product[];
  // setRowsState: React.Dispatch<React.SetStateAction<User[] | Product[]>>;
  // handleDelete: (id: number) => void;
};

const DataTable = (props: Props) => {
  const { rowsState, columns } = props;

  // const handleDelete = (idToDelete: number) => {
  //   let newRows: User[] | Product[] = rowsState.filter(
  //     (row: User | Product) => row.id !== idToDelete
  //   );
  //   setRowsState(newRows);
  // };

  useEffect(() => {}, [rowsState]);
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rowsState}
        columns={columns}
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

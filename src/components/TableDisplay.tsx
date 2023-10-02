import { getRowId } from "@/utils/helperFunction";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useStore } from "@/zustand/store";

export default function TableDisplay(): JSX.Element {
  const { queryData, queryHistory, tableData } = useStore();
  return (
    <div
      style={{
        height: "67%",
      }}
    >
      <DataGrid
        autoPageSize
        getRowId={(row) => row[getRowId(row) as keyof typeof row]}
        rows={tableData.row ? tableData.row : []}
        columns={tableData.columns ? tableData.columns : []}
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          boxShadow: 2,
          fontSize: "1rem",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

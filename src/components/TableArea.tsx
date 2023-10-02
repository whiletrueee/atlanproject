import SQLTextEditor from "@/components/sqlTextEditor";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "@/utils/constants";
import { useStore } from "@/zustand/store";
import { getRowId } from "@/utils/helperFunction";

export default function TableArea() {
  const { queryData, queryHistory, tableData } = useStore();
  return (
    <div className="dataArea" id="dataArea">
      <SQLTextEditor />
      <Box sx={{ height: "auto", width: "100%" }}>
        <DataGrid
          getRowId={(row) => row[getRowId(row) as keyof typeof row]}
          rows={tableData.row ? tableData.row : []}
          columns={tableData.columns ? tableData.columns : []}
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
      </Box>
    </div>
  );
}

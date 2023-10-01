import SQLTextEditor from "@/components/sqlTextEditor";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "@/utils/constants";
import { useStore } from "@/zustand/store";

export default function TableArea() {
  const { queryData, queryHistory } = useStore();
  return (
    <div className="dataArea" id="dataArea">
      <SQLTextEditor />
      <Box sx={{ height: "auto", width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.orderID}
          rows={queryData.index ? queryHistory[queryData.index].row : []}
          columns={queryData.index ? queryHistory[queryData.index].column : []}
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

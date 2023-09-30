import SQLTextEditor from "@/components/sqlTextEditor";
import Head from "next/head";
import { Inter } from "next/font/google";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "@/utils/constants";

export default function TableArea() {
  return (
    <div className="dataArea" id="dataArea">
      <SQLTextEditor />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
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

import TableDisplay from "@/components/TableDisplay";
import SQLTextEditor from "@/components/sqlTextEditor";
import * as React from "react";

export default function TableArea() {
  return (
    <div className="dataArea" id="dataArea">
      <SQLTextEditor />
      <TableDisplay />
    </div>
  );
}

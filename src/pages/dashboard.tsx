import * as React from "react";
import SidePanel from "@/components/SidePanel";
import TableArea from "@/components/TableArea";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SidePanel />
      <TableArea />
    </div>
  );
}

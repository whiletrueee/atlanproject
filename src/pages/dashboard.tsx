import Head from "next/head";
import * as React from "react";
import SidePanel from "@/components/sidePanel";
import TableArea from "@/components/tableArea";

export default function Dashboard() {
  return (
    <div className="flex dashboard">
      <SidePanel />
      <TableArea />
    </div>
  );
}

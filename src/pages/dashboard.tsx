import * as React from "react";
import SidePanel from "@/components/SidePanel";
import TableArea from "@/components/TableArea";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useStore } from "@/zustand/store";

export default function Dashboard() {
  const router = useRouter();
  const { query, table } = router.query;
  const { updateQueryData, updateTableData, updatePreview, preview } = useStore(
    (state) => state
  );
  React.useEffect(() => {
    if (query && table) {
      updatePreview(true);
      updateQueryData({
        queryValue: decodeURIComponent(query as string),
        index: undefined,
      });
      updateTableData(table as string);
    }
  }, [query,table]);

  return (
    <div className="dashboard">
      <SidePanel />
      <TableArea />
      <Toaster />
    </div>
  );
}

import { useStore } from "@/zustand/store";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useEffect } from "react";

export default function DummySidePanel() {
  const { preview } = useStore((state) => state);
  return (
    <div className={preview ? "auth-preview-sidePanel" : "auth-sidePanel"}>
      <div className="">
        <DashboardIcon
          sx={{
            fontSize: preview ? "4rem" : "6rem",
            color: "#171717",
          }}
        />
      </div>
      <div className={preview ? "auth-preview-content" : `auth-content`}>
        <h1 className="">Data Dasboard</h1>
        <h4 className="">Atlan Frontend Engineer - Task</h4>
        <p>
          A web application capable of running SQL queries and displaying the
          results of said query. The application include a space which accepts
          SQL queries in the form of user inputs, then runs the given query, and
          displays the result within the application.
        </p>
      </div>
    </div>
  );
}

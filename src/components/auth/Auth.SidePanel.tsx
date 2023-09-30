import DashboardIcon from "@mui/icons-material/Dashboard";

export default function AuthSidePanel() {
  return (
    <div className="auth-sidePanel">
      <div className="">
        <DashboardIcon
          sx={{
            fontSize: "6rem",
            color: "#171717",
          }}
        />
      </div>
      <div className="auth-content">
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

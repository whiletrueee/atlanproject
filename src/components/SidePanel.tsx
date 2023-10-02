import MenuItems from "@/components/MenuItems";
import DummySidePanel from "@/components/dummySidePanel";
import QueriesList from "@/components/recentQueries";
import { useStore } from "@/zustand/store";
import { Button } from "@mui/material";

export default function SidePanel() {
  const { preview } = useStore();

  if (preview) {
    return <DummySidePanel />;
  }
  return (
    <div className="sidePanel">
      <MenuItems />
      <div className="recentQueryList custom-scrollbar">
        <QueriesList />
      </div>
      <div className="logoutPanel">
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#1e1e1e",
            color: "#fff",
            fontSize: "0.8rem",
            fontWeight: 500,
            borderRadius: "4px",

            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#1e1e1e",
              opacity: 0.9,
            },
          }}
        >
          Clear Data
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function AuthLogin() {
  const router = useRouter();
  return (
    <div className="auth-dataArea">
      <Button
        onClick={() => {
          router.push("/dashboard");
        }}
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: "#1e1e1e",
          color: "#fff",
          fontSize: "0.9rem",
          fontWeight: 500,
          borderRadius: "4px",

          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#1e1e1e",
            opacity: 0.9,
          },
        }}
      >
        Visit Dashboard
      </Button>
    </div>
  );
}

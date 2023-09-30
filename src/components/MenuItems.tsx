import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { sidePanel } from "@/utils/constants";
import { useState } from "react";
import { useStore } from "@/zustand/store";

const options = [sidePanel.recentQuery, sidePanel.favoriteQuery];
export default function MenuItems() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { sidePanel, updateSidePanel } = useStore((state) => state);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option: sidePanel) => {
    updateSidePanel(option);
    setAnchorEl(null);
  };
  return (
    <div className="">
      <div className="menuOptions">
        <h2>{sidePanel.activeMenu}</h2>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === sidePanel.activeMenu}
                onClick={() => handleClose(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

import { Avatar, Paper, Typography, MenuItem, Menu } from "@mui/material";
import { Box } from "@mui/system";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import profileImg from "../images/image1.jpeg";
import ToggleOnRoundedIcon from "@mui/icons-material/ToggleOnRounded";
import { useState } from "react";

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="myProfile"
    >
      <Avatar alt="Akhil" src={profileImg} sx={{ width: 80, height: 80 }} />
      <Box className="d-flex profile">
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            flexGrow: 1,
            paddingRight: "0.2rem",
          }}
        >
          Bill Bradford
        </Typography>
        <SettingsOutlinedIcon
          id="basic-menu"
          onClick={handleClick}
          className="pointer"
        />
      </Box>
      <Typography
        variant="span"
        sx={{
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        Lead UI/UX Designer
      </Typography>
      <Box className="d-flex profile">
        <ToggleOnRoundedIcon
          sx={{
            color: "blue",
          }}
        />
        <span>Active</span>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Dummy Menu</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Paper>
  );
}

import { Avatar, Paper, Typography, MenuItem, Menu } from "@mui/material";
import { Box } from "@mui/system";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import profileImg from "../images/image1.jpeg";
import ToggleOnRoundedIcon from "@mui/icons-material/ToggleOnRounded";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserActiveState } from "../store/reducers/users";

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.userReducer[0]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleActiveHandler = () => {
    dispatch(toggleUserActiveState());
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
        <label className="switch icon">
          <input type="checkbox" defaultChecked={userState.isActive} />
          <span className="slider round" onClick={toggleActiveHandler}></span>
        </label>
        <span>{userState.isActive ? "Active" : "Inactive"}</span>
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

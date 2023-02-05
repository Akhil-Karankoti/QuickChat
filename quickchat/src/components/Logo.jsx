import { Avatar, Box, Typography } from "@mui/material";
import logo from "../images/sand.png";

export default function Logo() {
  return (
    <Box className="logo">
      <Avatar
        alt="Logo"
        src={logo}
        className="secondary-bg logoCircle"
        imgProps={{
          className: "logoPng"
        }}
      />
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
        }}
      >
        QuickChat
      </Typography>
    </Box>
  );
}

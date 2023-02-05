import { Paper, Box, Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

function EmailDetails() {
  const selectedUser = useSelector((store) =>
    store.userReducer.find((items) => items.isSelected === true) || {}
  );

  const getName = useCallback(() => {
    const nameArray = selectedUser.name?.split(" ") || [];
    if(nameArray.length) {
      return `${nameArray[0][0]}${nameArray[1][0]}`.toUpperCase();
    }
  }, [selectedUser]);

  return (
    <Paper className="d-flex flex-direction-column emailsDiv primary-bg">
      <Box className=" d-flex justify-content-center">
        <Avatar
          alt={selectedUser.name}
          sx={{
            width: 70,
            height: 70,
            color: "#00000091"
          }}
          className="statsBg"
          children={getName()}
        />
      </Box>
      <Box className="d-flex align-items-center">
        <MailOutlineIcon />
        <span>{selectedUser.email}</span>
      </Box>
      <Box className="d-flex align-items-center">
        <AccountCircleOutlinedIcon />
        <span>{selectedUser.name}</span>
      </Box>
      <Box className="d-flex justify-content-center">
        <Button endIcon={<Inventory2OutlinedIcon />} variant="outlined">
          Archive
        </Button>
      </Box>
    </Paper>
  );
}

export default React.memo(EmailDetails);

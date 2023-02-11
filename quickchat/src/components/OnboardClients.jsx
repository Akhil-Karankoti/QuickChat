import { Paper, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function OnboardClients() {
  const [open, setOpen] = useState(false);

  const onCopyClick = () => {
    const myGithubLink =
      "https://github.com/Akhil-Karankoti/QuickChat/tree/main/quickchat";
    navigator.clipboard.writeText(myGithubLink);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className="d-flex flex-direction-column justify-content-center primary-bg onboard">
      <Typography variant="h6" align="center">
        Onboard Clients
      </Typography>
      <Typography variant="outlined" align="center">
        Share the link with prospects and discuss all stuff
      </Typography>
      <Box className="d-flex justify-content-center">
        <Button
          className="button"
          endIcon={<LinkIcon className="linkIcon2" />}
          variant="outlined"
          onClick={onCopyClick}
        >
          Copy Link
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="GitHub link copied to clipboard."
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Box>
    </Paper>
  );
}

export default React.memo(OnboardClients);

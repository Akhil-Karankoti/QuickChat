import { Paper, Box, Button, Typography } from "@mui/material";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";

function OnboardClients() {
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
        >
          Copy Link
        </Button>
      </Box>
    </Paper>
  );
}

export default React.memo(OnboardClients);

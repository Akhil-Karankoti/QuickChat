import { Box } from "@mui/system";
import EmailDetails from "./EmailDetails";
import OnboardClients from "./OnboardClients";
import Stats from "./Stats";

export default function Detals() {
  return (
    <Box className='leftPanel detailsPanelOpened'>
        <EmailDetails />
        <Stats />
        <OnboardClients />
    </Box>
  );
}

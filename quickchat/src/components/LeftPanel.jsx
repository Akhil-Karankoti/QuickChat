import { Box } from "@mui/system"
import ArchivedConversations from "./ArchivedConversations"
import ConversationAccordian from "./ConversationAcoordian"
import Logo from "./Logo"
import Profile from "./SelfProfile"
export default function LeftPanel() {
    return (
        <Box className='leftPanel'>
           <Logo />
           <Profile />
           <ConversationAccordian />
           <ArchivedConversations />
        </Box>
    )
}
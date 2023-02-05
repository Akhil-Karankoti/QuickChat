import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import {
  Accordion,
  Avatar,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelected } from "../store/reducers/users";

export default function ConversationAccordian() {
  const dispatch = useDispatch();
  const [expandedState, setExpandedState] = useState(true);

  const activeConversationsState = useSelector((store) =>
    store.userReducer.filter((items) => items.isArchived === false)
  );

  const handleExpandClick = () => {
    setExpandedState(!expandedState);
  };

  const handleUserClick = (id) => {
    dispatch(userSelected(id));
  };

  return (
    <Accordion
      expanded={expandedState}
      onChange={handleExpandClick}
      sx={{ boxShadow: "none" }}
      className="accordian"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="accordianLogo" />}
        sx={{
          padding: 0,
        }}
      >
        <Box className="d-flex align-items-center">
          <span>Active Conversations</span>
          <Avatar
            alt="Logo"
            className="accordianCount"
            imgProps={{
              className: "logoPng",
            }}
            children={
              activeConversationsState.filter((user) => user.isActive).length
            }
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails className="accordianDetails">
        {activeConversationsState.map((user) => {
          return (
            <Box
              key={user.id}
              className={`d-flex align-items-center pointer ${
                user.isSelected && "activeUser"
              }`}
              onClick={() => handleUserClick(user.id)}
            >
              <Avatar
                alt="Akhil"
                src={user.profileUrl}
                sx={{ width: 45, height: 45 }}
              />
              <Typography sx={{ 
                paddingLeft: "1rem"
                }}>{user.name}</Typography>
            </Box>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

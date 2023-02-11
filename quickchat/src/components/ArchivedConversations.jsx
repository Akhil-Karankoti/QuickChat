import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import {
  Accordion,
  Avatar,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userSelected } from "../store/reducers/users";
import { useEffect, useState } from "react";

export default function ArchivedConversations() {
  const archivedConversationState = useSelector((store) =>
    store.userReducer.filter((items) => items.isArchived === true)
  );
  const dispatch = useDispatch();
  const [openState, setOpenState] = useState(false);

  const handleUserClick = (id) => {
    dispatch(userSelected(id));
  };

  useEffect(() => {
    for (const user of archivedConversationState) {
      if (user.isSelected) {
        setOpenState(true);
        break;
      }
    }
  }, [archivedConversationState]);

  return (
    <Accordion sx={{ boxShadow: "none" }} className="accordian" expanded={openState}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="accordianLogo" />}
        sx={{
          padding: 0,
        }}
      >
        <Box className="d-flex align-items-center">
          <span>Archived Conversations</span>
          <Avatar
            alt="Logo"
            className="accordianCount"
            imgProps={{
              className: "logoPng",
            }}
            children={
              archivedConversationState.filter((user) => !user.isActive).length
            }
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails className="accordianDetails">
        {archivedConversationState.map((user) => {
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
              <Typography sx={{ paddingLeft: "1rem" }}>{user.name}</Typography>
            </Box>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

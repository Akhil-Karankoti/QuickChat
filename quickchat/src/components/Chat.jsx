import React from "react";
import { Avatar, Box, Paper, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import profileImg from "../images/image1.jpeg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Chat() {
  const selectedUserChat = useSelector((store) =>
    store.userReducer.find((items) => items.isSelected === true) || {}
  );
  const chats = useSelector(
    (store) => store.messageReducer[selectedUserChat.id] || []
  );

  return (
    <Box className="p-08 textDivs d-flex flex-direction-column-reverse flex-grow-1 overflow-scroll">
      {chats.map((chat, index) => (
        <Box
          key={index}
          className={`d-flex ${chat.sentBy === 1 && "row-reverse"}`}
          sx={{
            order: chats.length - index - 1,
          }}
        >
          {/* <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
          </StyledBadge> */}
          <Avatar
            alt="Akhil"
            src={chat.sentBy === 1 ? profileImg : selectedUserChat.profileUrl}
            sx={{ width: 50, height: 50 }}
            className="chatImage"
          />
          <Box>
            <Paper className={`chatText ${chat.sentBy === 1 && "selfTexts"}`}>
              {chat.text}
            </Paper>
            <span style={{ paddingTop: "5px", display: "block" }}>{chat.time || "9h ago"}</span>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default React.memo(Chat);

import React from "react";
import { Avatar, Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import profileImg from "../images/image1.jpeg";

function Chat() {
  const selectedUserChat = useSelector(
    (store) =>
      store.userReducer.find((items) => items.isSelected === true) || {}
  );
  const owner = useSelector((store) => store.userReducer[0]);
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
          <Box className="chatImage">
            <Avatar
              alt="Akhil"
              src={chat.sentBy === 1 ? profileImg : selectedUserChat.profileUrl}
              sx={{ width: 50, height: 50 }}
            />
            <span
              className={`badge ${
                chat.sentBy === 1
                  ? owner.isActive
                    ? "active"
                    : "inactive"
                  : selectedUserChat.isActive
                  ? "active"
                  : "inactive"
              }`}
            />
          </Box>

          <Box>
            <Paper className={`chatText ${chat.sentBy === 1 && "selfTexts"}`}>
              {chat.imageUrl ? (
                <img
                  src={chat.imageUrl}
                  alt="file sent by you"
                  className="imageInChat"
                />
              ) : (
                chat.text
              )}
            </Paper>
            <span style={{ paddingTop: "5px", display: "block" }}>
              {chat.time || "9h ago"}
            </span>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default React.memo(Chat);

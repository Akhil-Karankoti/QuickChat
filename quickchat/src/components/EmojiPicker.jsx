import { Popover } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React from "react";

function CustomEmojiPicker(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [emojiIconState, setEmojiIconState] = useState(false);

  const toggleEmojiIconClick = (event) => {
    if (emojiIconState) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
    setEmojiIconState(!emojiIconState);
  };

  const onEmojiClick = (emojiObj) => {
    const message = props.messageState + emojiObj.emoji;
    props.setMessageState(message);
  }

  return (
    <>
      <InsertEmoticonIcon
        sx={{
          color: "orange",
          cursor: "pointer",
        }}
        onClick={toggleEmojiIconClick}
      />
      <Popover
        open={emojiIconState}
        anchorEl={anchorEl}
        onClose={toggleEmojiIconClick}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <EmojiPicker onEmojiClick={onEmojiClick}/>
      </Popover>
    </>
  );
}

export default React.memo(CustomEmojiPicker)

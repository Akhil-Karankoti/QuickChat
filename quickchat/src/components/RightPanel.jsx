import { Paper, FormControl, Input, Button } from "@mui/material";
import { Box } from "@mui/system";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { newMessage } from "../store/reducers/messages";
import Chat from "./Chat";

export default function RightPanel() {
  const dispatch = useDispatch();
  const [messageState, setMessageState] = useState();
  const timerRef = useRef();

  const { id: selectedUserChartId } = useSelector((store) =>
    store.userReducer.find((items) => items.isSelected === true) || {}
  );

  const inputHandler = (e) => {
    const message = e.target.value;
    setMessageState(message);
  };

  const sentHandlerClick = () => {
    if (messageState) {
      dispatch(
        newMessage({
          id: selectedUserChartId,
          message: messageState,
          time: "Just now",
        })
      );
      setMessageState("");

      timerRef.current = setTimeout(() => {
        dispatch(
          newMessage({
            id: selectedUserChartId,
            message:
              "Ooops! sorry, currently I'm not in a position to reply. Will reply asap.",
            sentBy: selectedUserChartId,
            time: "Just now",
          })
        );
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Paper className="rightPanel d-flex flex-direction-column">
      <Chat />
      <Box className="inputOuterWrapper">
        <Paper className="d-flex p-08 align-items-center">
          <AttachFileIcon className="linkIcon" />
          <Paper className="inputWrapper d-flex align-items-center flex-grow-1">
            <Input
              id="my-input"
              className="flex-grow-1"
              aria-describedby="my-helper-text"
              placeholder="Enter your message here"
              onChange={inputHandler}
              value={messageState}
            />
            <InsertEmoticonIcon
              sx={{
                color: "orange",
              }}
            />
          </Paper>
          <Button
            className="button sendButton"
            endIcon={<SendIcon />}
            onClick={sentHandlerClick}
          >
            <span>Send</span>
          </Button>
        </Paper>
      </Box>
    </Paper>
  );
}

import { useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useDispatch } from "react-redux";
import { newMessage } from "../store/reducers/messages";

export default function Attachments(props) {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const timerRef = useRef();

  const handleClick = (event) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    dispatch(
      newMessage({
        id: props.selectedUserChartId,
        time: "Just now",
        imageUrl,
      })
    );

    timerRef.current = setTimeout(() => {
      if (props.isActive) {
        dispatch(
          newMessage({
            id: props.selectedUserChartId,
            message:
              "Ooops! sorry, currently I'm not in a position to reply. Will reply asap.",
            sentBy: props.selectedUserChartId,
            time: "Just now",
          })
        );
      } else {
        alert("Fake reply is not created as user is offline.");
      }
    }, 1000);
  };

  return (
    <>
      <AttachFileIcon
        id="attachments"
        className="linkIcon pointer icon"
        onClick={handleClick}
      />
      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleFileChange}
      />
    </>
  );
}

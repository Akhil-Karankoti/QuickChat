import { Paper, Popover } from '@mui/material';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Details from './components/Details';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { userSelected } from "./store/reducers/users";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const hasWindow = typeof window !== 'undefined';

const getWindowDimensions = () => {
  const width = hasWindow ? window.innerWidth : null;
  return width
}

function App() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [convoTab, setConvoTab] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const selectedUserChat = useSelector((store) =>
    store.userReducer.find((items) => items.isSelected === true)
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowDimensions > 425) {
      dispatch(userSelected(2));
    }
  }, [windowDimensions])

  useEffect(() => {
    setConvoTab(false);
  }, [selectedUserChat])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => {
    setConvoTab(true);
  };

  return (
    <Paper
      elevation={12}
    >
      {
        windowDimensions > 425 ?
          <>
            <LeftPanel />
            <RightPanel />
          </>
          :
          selectedUserChat && !convoTab ?
            <>
              <ArrowBackIosNewIcon onClick={handleBack} className="backIcon"/>
              <RightPanel />
            </>
            :
            <LeftPanel />
      }
      {
        windowDimensions > 1023 ?
          <Details />
          :
          <Paper className='burgerIcon'>
            <MenuIcon onClick={handleClick} />
          </Paper>
      }
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Details />
      </Popover>
    </Paper>
  );
}

export default App;

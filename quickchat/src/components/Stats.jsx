import { Paper, Box, Typography, Avatar } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { blue } from "@mui/material/colors";

const width = "10px";
const width2 = "7px";

const activityData = [
  {
    day: "MON",
    height: "70px",
  },
  {
    day: "TUE",
    height: "100px",
  },
  {
    day: "WED",
    height: "60px",
  },
  {
    day: "THU",
    height: "40px",
  },
  {
    day: "FRI",
    height: "34px",
  },
  {
    day: "SAT",
    height: "25px",
  },
  {
    day: "SUN",
    height: "20px",
  },
];

function Stats() {
  return (
    <Paper className="d-flex flex-direction-column stats primary-bg justify-content-center">
      <Box>
        <Box className="d-flex flex-wrap statActivitiesDiv">
          <Box
            className="d-flex align-item-center"
            sx={{
              backgroundColor: "#98b8f37a",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#98b8f3c7",
              }}
            >
              <AccessTimeIcon
                sx={{
                  color: blue,
                }}
              />
            </Box>
            <Box className="d-flex flex-direction-column">
              <span style={{ color: "blue" }}>13h</span>
              <span>Time</span>
            </Box>
          </Box>
          <Box
            className="d-flex align-tems-center"
            sx={{
              backgroundColor: "#74ebbb6b",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#74ebbbbd",
              }}
            >
              <PeopleAltOutlinedIcon
                sx={{
                  color: "#008000cc",
                }}
              />
            </Box>
            <Box className="d-flex flex-direction-column">
              <span style={{ color: "#008000cc" }}>188</span>
              <span>Attended</span>
            </Box>
          </Box>
          <Box
            className="d-flex align-tems-center"
            sx={{
              backgroundColor: "#b574eb1c",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#c57cf04a",
              }}
            >
              <EventAvailableIcon
                sx={{
                  color: "#4b00c5",
                }}
              />
            </Box>
            <Box className="d-flex flex-direction-column">
              <span style={{ color: "#4b00c5" }}>119</span>
              <span>Meetings</span>
            </Box>
          </Box>
          <Box
            className="d-flex align-tems-center"
            sx={{
              backgroundColor: "#ff00001f",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ff000033",
              }}
            >
              <EventBusyIcon
                sx={{
                  color: "red",
                }}
              />
            </Box>
            <Box className="d-flex flex-direction-column">
              <span style={{ color: "red" }}>41</span>
              <span>Rejected</span>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="d-flex justify-content-space-between align-items-center currentWeek">
            <Typography className="accordian">Current week</Typography>
            <span>Activity</span>
          </Box>
          <Box className="d-flex">
            {activityData.map((data, index) => (
              <Box className="d-flex flex-direction-column justify-content-end align-items-center flex-grow-1" key={index}>
                <Box
                  sx={{
                    width,
                    height: data.height,
                    background: index === 1 ? "blue" : "#98b8f3c1",
                    borderRadius: "4px",
                    marginBottom: "5px",
                  }}
                />
                <Box
                  sx={{
                    width: index === 1 ? width : width2,
                    height: index === 1 ? width : width2,
                    borderRadius: "100%",
                    background: index === 1 ? "blue" : "#98b8f3c1",
                  }}
                />
                <span className="legend">{data.day}</span>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default React.memo(Stats);

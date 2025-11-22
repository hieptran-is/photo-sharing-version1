import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const params = useParams();

  let titleRight = "";

  if (location.pathname.startsWith("/users/") && params.userId) {
    const user = models.userModel(params.userId);
    titleRight = user ? `${user.first_name} ${user.last_name}` : "";
  } 
  else if (location.pathname.startsWith("/photos/") && params.userId) {
    const user = models.userModel(params.userId);
    titleRight = user ? `Photos of ${user.first_name} ${user.last_name}` : "";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Your Name Here</Typography>
        <Typography variant="h6">{titleRight}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

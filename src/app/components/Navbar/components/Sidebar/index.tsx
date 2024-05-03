"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SIDEBAR_INFO from "@/app/constants/sidebar";

type Anchor = "left";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const Sidebar = (anchor: Anchor) => (
    <Box
      sx={{ width: "250px", paddingTop: "" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {SIDEBAR_INFO.map((info, index) => (
          <ListItem key={info.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{info.icon}</ListItemIcon>
              <ListItemText primary={info.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <MenuIcon
          fontSize="large"
          className="hover: cursor-pointer"
          onClick={toggleDrawer("left", true)}
        />
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {Sidebar("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./components/Cart";

type Anchor = "right";

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

  const CartMenu = (anchor: Anchor) => (
    <Box sx={{ width: "100%" }} role="presentation">
      <List>
        <p
          onClick={toggleDrawer(anchor, false)}
          className="absolute right-8 top-2 text-xl font-bold hover:cursor-pointer"
        >
          X
        </p>
        <Cart />
      </List>

      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <ShoppingCartIcon
          onClick={toggleDrawer("right", true)}
          className="hover:cursor-pointer"
        />
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {CartMenu("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

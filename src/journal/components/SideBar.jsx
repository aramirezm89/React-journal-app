import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Divider, Drawer, IconButton,
  List,
  SwipeableDrawer,
  Toolbar,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";
import { SidebarListItems } from "./SidebarListItems";
export const SideBar = ({ drawerWith = 240, openDrawer, handdleDrawer }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { sm: 0 } }}
    >
      <Drawer
        open={openDrawer}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          <IconButton onClick={() => handdleDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <List sx={{ pt: 0 }}>
          {notes.map((note) => (
            <SidebarListItems key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

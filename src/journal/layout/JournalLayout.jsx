import { Box, Toolbar, Typography } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWith=240;

export const JournalLayout = ({children}) => {
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      {/*navbar*/}
      <NavBar drawerWith={drawerWith} />
      {/*sidebar*/}

      <SideBar drawerWith={drawerWith} />
      <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}

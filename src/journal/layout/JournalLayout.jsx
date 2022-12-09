import { Box } from "@mui/material";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWith=240;

export const JournalLayout = ({children}) => {
  const [open,setOpen] = useState(false);

  const handdleDrawer = () => {
 
    setOpen(!open);
  };


  
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      {/*navbar*/}
      <NavBar drawerWith={drawerWith} handdleDrawer={handdleDrawer} />
      {/*sidebar*/}

      <SideBar
        drawerWith={drawerWith}
        openDrawer={open}
        handdleDrawer={handdleDrawer}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}

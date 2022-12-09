import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { handleBreakpoints } from "@mui/system";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({drawerWith = 240,handdleDrawer}) => {
  
  const dispatch = useDispatch();
  const onLogout = () =>{
    dispatch(startLogout())
  }

const stado = useMemo(() => handleBreakpoints,[handdleDrawer] )
  return (
    <AppBar
      position="fixed"
      sx={{
        width: stado === true? `calc(100% - ${drawerWith}px)`:'100%',
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handdleDrawer()}
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton color="error" onClick={onLogout}>
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

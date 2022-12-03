import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({drawerWith = 240}) => {
  
  const dispatch = useDispatch();
  const onLogout = () =>{
    dispatch(startLogout())
  }
  return (

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWith}px)` },
          ml: { sm: `${drawerWith}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,display:{sm:'none'}}}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
          color='error'
          onClick={onLogout}
          >
                <LogoutOutlined/>
          </IconButton>
        </Toolbar>
      </AppBar>

  );
}

import {AppBar,Box,Toolbar,Button, IconButton, Typography} from '@mui/material'
import {MenuOutlined,LogoutOutlined} from "@mui/icons-material";

export const NavBar = ({drawerWith = 240}) => {
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
          >
                <LogoutOutlined/>
          </IconButton>
        </Toolbar>
      </AppBar>

  );
}

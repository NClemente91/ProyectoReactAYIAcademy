import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../../store/slices/users";
import { getPokemons } from "../../store/slices/pokemons";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./styles.css";

const drawerWidth = 240;

const navItems = [
  { title: "Home", link: "/" },
  { title: "Register", link: "/register" },
  { title: "Login", link: "/login" },
];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isUserLogged } = useSelector((state) => state.users);

  const hanldeClickLogout = (event) => {
    event.preventDefault();
    dispatch(isLogout());
    navigate("/");
  };

  const hanldeClickHome = (event) => {
    event.preventDefault();
    dispatch(getPokemons());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pokemon Store
      </Typography>
      <Divider />
      <List>
        {!isUserLogged ? (
          navItems.map((item) => (
            <Link className="navbar-link" to={item.link} key={item.title}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={hanldeClickHome}
              >
                <ListItemText primary="HOME" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={hanldeClickLogout}
              >
                <ListItemText primary="LOGOUT" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar style={{ backgroundColor: "#252525" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Pokemon Store
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {!isUserLogged ? (
              navItems.map((item) => (
                <Link className="navbar-link" to={item.link} key={item.title}>
                  <Button sx={{ color: "#fff" }}>{item.title}</Button>
                </Link>
              ))
            ) : (
              <>
                <Button sx={{ color: "#fff" }} onClick={hanldeClickHome}>
                  HOME
                </Button>
                <Button sx={{ color: "#fff" }} onClick={hanldeClickLogout}>
                  LOGOUT
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;

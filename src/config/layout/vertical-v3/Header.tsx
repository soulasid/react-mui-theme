import { styled } from "@mui/material/styles";
import AppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { drawerWidth } from "../config";
import { forwardRef } from "react";
import { motion } from "framer-motion";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const MuiAppBar = forwardRef<HTMLDivElement, MuiAppBarProps>((props, ref) => (
  <AppBar ref={ref} {...props} />
));
const MotionAppBar = motion(MuiAppBar);
const AppBarStyled = styled(MotionAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: "100%",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const animationConfig = {
  initial: { opacity: 0 },
  animate: (open: boolean) => ({
    marginLeft: 0,
    width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
    opacity: 1,
  }),
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
  exit: { opacity: 0 },
};
function Header({
  handleDrawerToggle,
  open,
}: {
  handleDrawerToggle: () => void;
  open: boolean;
}) {
  return (
    <AppBarStyled
      position="fixed"
      open={open}
      initial={animationConfig.initial}
      animate={animationConfig.animate(open)}
      transition={animationConfig.transition}
      exit={animationConfig.exit}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Team 1
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="User 1" src="/placeholder.svg?height=40&width=40" />
          <Avatar alt="User 2" src="/placeholder.svg?height=40&width=40" />
          <Avatar alt="User 3" src="/placeholder.svg?height=40&width=40" />
          <Avatar alt="User 4" src="/placeholder.svg?height=40&width=40" />
        </AvatarGroup>
      </Toolbar>
    </AppBarStyled>
  );
}

export default Header;

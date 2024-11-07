import { styled, alpha, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, memo, useEffect } from "react";
// import { useLocation, Outlet } from 'react-router-dom';
import {
  Box,
  Stack,
  Paper,
  Button,
  IconButton,
  Typography,
  InputBase,
  Theme,
} from "@mui/material";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// Custom components
import Logo from "../components/Logo";
import Iconify from "../components/Iconify";
import NavSection from "../components/nav-section/NavSection";
// import Searchbar from '../components/Searchbar';
import LanguagePopover from "../components/LanguagePopover";
import NotificationsPopover from "../components/NotificationsPopover";
import AccountPopover from "../components/AccountPopover";

// Types
interface MainStyleProps {
  collapseClick: boolean;
  theme?: Theme;
}

// Constants and configs
import { NAV_WIDTH, HEADER_HEIGHT } from "../config";

// Styled Components
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("main", {
  shouldForwardProp: (prop) => prop !== "collapseClick",
})<MainStyleProps>(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER_HEIGHT + 24,
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    duration: theme.transitions.duration.shorter,
  }),

  marginLeft: collapseClick ? NAV_WIDTH : 0,
  [theme.breakpoints.up("lg")]: {
    marginLeft: NAV_WIDTH,
  },
}));

const HeaderStyle = styled(motion.header)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: HEADER_HEIGHT,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 5),
  backdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.8),
  zIndex: theme.zIndex.appBar,
  transition: theme.transitions.create(["height"], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("lg")]: {
    paddingLeft: NAV_WIDTH + theme.spacing(5),
  },
}));

const NavbarStyle = styled(motion.nav)(({ theme }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  width: NAV_WIDTH,
  backgroundColor: theme.palette.background.default,
  borderRight: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.shorter,
  }),
  zIndex: theme.zIndex.drawer,
}));

// Animation variants
const navVariants = {
  initial: { x: -NAV_WIDTH },
  animate: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: -NAV_WIDTH,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.4 },
  },
};

export default function Layout() {
  const [open, setOpen] = useState(true);
  const [collapseClick, setCollapseClick] = useState(false);
  // const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      setCollapseClick(false);
    }
  }, []);

  const handleToggleNav = () => {
    setOpen(!open);
    setCollapseClick(true);
  };

  const NavbarContent = memo(() => (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Logo />
      </Box>

      <NavSection navConfig={[]} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        >
          <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: "absolute", top: -50 }}
          />

          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6">
              Need Help?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Please check our docs
            </Typography>
          </Box>

          <Button href="#" target="_blank" variant="contained">
            Documentation
          </Button>
        </Stack>
      </Box>
    </Box>
  ));

  return (
    <RootStyle>
      <HeaderStyle>
        <IconButton
          onClick={handleToggleNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon={open ? "eva:menu-2-fill" : "eva:menu-fill"} />
        </IconButton>

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </HeaderStyle>

      <AnimatePresence mode="wait">
        {open && (
          <NavbarStyle
            variants={navVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NavbarContent />
          </NavbarStyle>
        )}
      </AnimatePresence>

      <MainStyle
        // component={motion.main}
        collapseClick={collapseClick}
        // variants={contentVariants}
        // initial="initial"
        // animate="animate"
      >
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

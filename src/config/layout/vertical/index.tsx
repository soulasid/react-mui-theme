import {
  useState,
  //   useEffect,
  forwardRef,
  useMemo,
  useCallback,
  memo,
} from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  //   IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FolderIcon from "@mui/icons-material/Folder";
import SchoolIcon from "@mui/icons-material/School";
// import PeopleIcon from "@mui/icons-material/People";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import RssFeedIcon from "@mui/icons-material/RssFeed";
// import WorkIcon from "@mui/icons-material/Work";
// import ExploreIcon from "@mui/icons-material/Explore";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import MailIcon from "@mui/icons-material/Mail";
// import ChatIcon from "@mui/icons-material/Chat";
import SimpleBar from "simplebar-react";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
// import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "@tanstack/react-router";
import { drawerWidth } from "../config";
import Image from "@/components/Image";
import { Root, Main } from "@/layout";
import { alpha } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  position: "sticky",
  top: 0,
}));

const menuItems = [
  { text: "App", icon: <AppsIcon /> },
  { text: "Ecommerce", icon: <ShoppingCartIcon /> },
  { text: "Analytics", icon: <BarChartIcon /> },
  { text: "Banking", icon: <AccountBalanceIcon /> },
  { text: "Booking", icon: <EventNoteIcon /> },
  { text: "File", icon: <FolderIcon /> },
  { text: "Course", icon: <SchoolIcon /> },
];

const MuiDrawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => (
  <Drawer ref={ref} {...props} />
));
const MuiListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => (
  <ListItem ref={ref} {...props} />
));
const MotionDrawer = motion(MuiDrawer);
const MotionListItem = MuiListItem;
// export const Main = styled(motion.div)(({ theme }) => ({
//   flexGrow: 1,
//   padding: 0,
//   margin: 0,
// }));

// Separate animation configs into a constants file
const ANIMATION_CONFIG = {
  drawer: {
    spring: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 1,
    },
    variants: {
      open: {
        width: drawerWidth,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      },
      closed: {
        width: 0,
        boxShadow: "none",
      },
    },
  },
  listItem: {
    variants: {
      hidden: {
        x: -20,
        opacity: 0,
        transition: { duration: 0.2 },
      },
      visible: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: i * 0.03,
          duration: 0.3,
          ease: "easeOut",
        },
      }),
    },
  },
};

// Styled components for better organization
const StyledDrawer = styled(MotionDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  height: "100vh",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    overflowY: "hidden",
    transform: "none",
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.5, 1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function VerticalLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string>("");

  // Memoized values
  const drawerAnimation = useMemo(
    () => ({
      initial: false,
      animate: open ? "open" : "closed",
      variants: ANIMATION_CONFIG.drawer.variants,
      transition: ANIMATION_CONFIG.drawer.spring,
    }),
    [open]
  );

  const handleItemClick = useCallback((text: string) => {
    setSelectedItem(text);
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Drawer content component for better organization
  const DrawerContent = memo(() => (
    <SimpleBar>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div initial="hidden" animate="visible" exit="hidden">
            <List>
              {menuItems.map((item) => (
                <MotionListItem
                  key={item.text}
                  //   custom={index}
                  //   variants={ANIMATION_CONFIG.listItem.variants}
                  disablePadding
                >
                  <StyledListItemButton
                    selected={selectedItem === item.text}
                    onClick={() => handleItemClick(item.text)}
                    sx={{
                      bgcolor:
                        selectedItem === item.text
                          ? alpha(theme.palette.primary.main, 0.1)
                          : "transparent",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    />
                  </StyledListItemButton>
                </MotionListItem>
              ))}
              {menuItems.map((item) => (
                <MotionListItem
                  key={item.text}
                  //   custom={index}
                  //   variants={ANIMATION_CONFIG.listItem.variants}
                  disablePadding
                >
                  <StyledListItemButton
                    selected={selectedItem === item.text}
                    onClick={() => handleItemClick(item.text)}
                    sx={{
                      bgcolor:
                        selectedItem === item.text
                          ? alpha(theme.palette.primary.main, 0.1)
                          : "transparent",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    />
                  </StyledListItemButton>
                </MotionListItem>
              ))}
              {menuItems.map((item) => (
                <MotionListItem
                  key={item.text}
                  //   custom={index}
                  //   variants={ANIMATION_CONFIG.listItem.variants}
                  disablePadding
                >
                  <StyledListItemButton
                    selected={selectedItem === item.text}
                    onClick={() => handleItemClick(item.text)}
                    sx={{
                      bgcolor:
                        selectedItem === item.text
                          ? alpha(theme.palette.primary.main, 0.1)
                          : "transparent",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color:
                          selectedItem === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                      }}
                    />
                  </StyledListItemButton>
                </MotionListItem>
              ))}
            </List>
            {/* Similar pattern for managementItems */}
          </motion.div>
        )}
      </AnimatePresence>
    </SimpleBar>
  ));

  return (
    <Root sx={{ display: "flex", margin: 0, padding: 0 }}>
      <CssBaseline />
      <StyledDrawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        {...drawerAnimation}
      >
        <DrawerHeader>
          <Image src="./logo-dark.png" sx={{ width: "70%", margin: "auto" }} />
        </DrawerHeader>
        <DrawerContent />
      </StyledDrawer>

      <Box
        component="nav"
        sx={{
          width: "100%",
          flexGrow: 1,
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backdropFilter: "blur(6px)",
            backgroundColor: alpha(theme.palette.background.default, 0.8),
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Team 1
            </Typography>
            <AvatarGroup max={4}>
              <Avatar alt="User 1" src="/placeholder.svg?height=40&width=40" />
              <Avatar alt="User 2" src="/placeholder.svg?height=40&width=40" />
              <Avatar alt="User 3" src="/placeholder.svg?height=40&width=40" />
              <Avatar alt="User 4" src="/placeholder.svg?height=40&width=40" />
            </AvatarGroup>
          </Toolbar>
        </AppBar>
        <Main sx={{ margin: 0, padding: 0 }}>
          <Outlet />
        </Main>
      </Box>
    </Root>
  );
}

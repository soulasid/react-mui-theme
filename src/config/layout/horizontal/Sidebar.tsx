import { styled } from '@mui/material/styles';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WorkIcon from '@mui/icons-material/Work';
import ExploreIcon from '@mui/icons-material/Explore';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';

import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const menuItems = [
  { text: 'App', icon: <AppsIcon /> },
  { text: 'Ecommerce', icon: <ShoppingCartIcon /> },
  { text: 'Analytics', icon: <BarChartIcon /> },
  { text: 'Banking', icon: <AccountBalanceIcon /> },
  { text: 'Booking', icon: <EventNoteIcon /> },
  { text: 'File', icon: <FolderIcon /> },
  { text: 'Course', icon: <SchoolIcon /> },
];

const managementItems = [
  { text: 'User', icon: <PeopleIcon /> },
  { text: 'Product', icon: <LocalOfferIcon /> },
  { text: 'Order', icon: <ShoppingBasketIcon /> },
  { text: 'Invoice', icon: <ReceiptIcon /> },
  { text: 'Blog', icon: <RssFeedIcon /> },
  { text: 'Job', icon: <WorkIcon /> },
  { text: 'Tour', icon: <ExploreIcon /> },
  { text: 'File manager', icon: <AttachFileIcon /> },
  { text: 'Mail', icon: <MailIcon /> },
  { text: 'Chat', icon: <ChatIcon /> },
];
const MuiDrawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => (
  <Drawer ref={ref} {...props} />
));
const MuiListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => (
  <ListItem ref={ref} {...props} />
));
const MotionDrawer = motion(MuiDrawer);
const MotionListItem = motion(MuiListItem);

function Sidebar({
  open,
  handleDrawerToggle,
  isMobile,
}: {
  open: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
}) {
  const drawer = (
    <div>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <AnimatePresence>
          {menuItems.map((item, index) => (
            <MotionListItem
              key={item.text}
              disablePadding
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </MotionListItem>
          ))}
        </AnimatePresence>
      </List>
      <Divider />
      <List>
        <AnimatePresence>
          {managementItems.map((item, index) => (
            <MotionListItem
              key={item.text}
              disablePadding
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: (index + menuItems.length) * 0.1 }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </MotionListItem>
          ))}
        </AnimatePresence>
      </List>
    </div>
  );
  return (
    <MotionDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      initial={false}
      animate={{
        width: open ? drawerWidth : 0,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
    >
      {drawer}
    </MotionDrawer>
  );
}

export default Sidebar;

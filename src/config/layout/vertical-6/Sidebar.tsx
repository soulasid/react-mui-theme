import {  Drawer, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { LAYOUT_CONFIG } from './config';
import { navConfig } from '@/config/layout/vertical/config';
import { NavItem } from './types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

interface SidebarProps {
  open: boolean;
  width: number | string;
  onClose: () => void;
  isMobile: boolean;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: LAYOUT_CONFIG.sidebar.width.xs,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.up('sm')]: {
      width: LAYOUT_CONFIG.sidebar.width.sm,
    },
    [theme.breakpoints.up('md')]: {
      width: LAYOUT_CONFIG.sidebar.width.md,
    },
    [theme.breakpoints.up('lg')]: {
      width: LAYOUT_CONFIG.sidebar.width.lg,
    },
  }
}));

const SidebarContent = styled(motion.div)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  }
}));

const NavSection = ({ items, ...other }: { items: NavItem[] }) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (path: string) => {
    setOpen((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const renderNavItem = (item: NavItem) => (
    <div key={item.path}>
      <ListItemButton 
        onClick={() => item.children && handleClick(item?.path||"")}
        sx={{ pl: item.children ? 4 : 2 }}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.title} />
        {item.children && (open[item?.path||""] ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {item.children && (
        <Collapse in={open[item?.path||""]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <ListItemButton key={child.path} sx={{ pl: 4 }}>
                <ListItemText primary={child.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );

  return (
    <List {...other}>
      {items.map((item) => renderNavItem(item))}
    </List>
  );
};

export default function Sidebar({ open, onClose, isMobile }: SidebarProps) {
  return (
    <StyledDrawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      <SidebarContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ListItemText primary="OVERVIEW" sx={{ px: 3, pt: 2, color: 'text.secondary' }} />
        <NavSection items={navConfig.overview} />
        
        <ListItemText primary="MANAGEMENT" sx={{ px: 3, pt: 2, color: 'text.secondary' }} />
        <NavSection items={navConfig.management} />
      </SidebarContent>
    </StyledDrawer>
  );
} 
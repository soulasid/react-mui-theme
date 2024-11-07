import { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Collapse 
} from '@mui/material';
import { NavSectionProps, NavItemProps } from './types';

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    x: -20,
    opacity: 0
  }
};

const NavItem: FC<NavItemProps> = ({ item, level = 0 }) => {
  return (
    <motion.div variants={itemVariants}>
      <ListItemButton
        component={motion.div}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
        sx={{ pl: level * 3 + 2 }}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.title} />
        {item.info && item.info}
      </ListItemButton>
      {item.children && (
        <Collapse in timeout="auto" unmountOnExit>
          {item.children.map((child) => (
            <NavItem key={child.title} item={child} level={level + 1} />
          ))}
        </Collapse>
      )}
    </motion.div>
  );
};

const NavSection: FC<NavSectionProps> = ({ title, items }) => {
  return (
    <List
      subheader={
        <Typography
          variant="overline"
          sx={{ px: 3, mt: 3, mb: 2, color: 'text.secondary' }}
        >
          {title}
        </Typography>
      }
    >
      {items.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </List>
  );
};

export default NavSection; 
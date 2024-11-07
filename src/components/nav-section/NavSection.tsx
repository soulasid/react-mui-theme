import { FC } from "react";
// import { NavLink as RouterLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { NavItem } from '../../types';
type NavItem = {
  title: string;
  path: string;
  icon: string;
  info: React.ReactNode;
};
interface NavSectionProps {
  navConfig: NavItem[];
}

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NavSection: FC<NavSectionProps> = ({ navConfig }) => {
  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
};

interface NavItemProps {
  item: NavItem;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  const { title, path, icon, info } = item;

  return (
    <ListItemStyle
      //   component={RouterLink}
      //   to={path}
      sx={{
        "&.active": {
          color: "primary.main",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
};

export default NavSection;

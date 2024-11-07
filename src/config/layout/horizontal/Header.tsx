import { FC } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  onToggleNav: () => void;
}

const Header: FC<HeaderProps> = ({ onToggleNav }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <IconButton
        onClick={onToggleNav}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      
      <Typography variant="h6" noWrap component="div">
        Your App Name
      </Typography>
      
      {/* Add your header content here */}
    </Stack>
  );
};

export default Header;

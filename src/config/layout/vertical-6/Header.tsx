import { AppBar, IconButton, styled, Toolbar, Stack, Badge, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { LAYOUT_CONFIG } from './config';
// import { GB, TH } from 'country-flag-icons/react/3x2';
import { useState } from 'react';

interface HeaderProps {
  height: number;
  onToggleSidebar?: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${theme.spacing(8)})`
  },
  transition: theme.transitions.create(['width', 'margin'], {
    duration: theme.transitions.duration.standard
  })
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: LAYOUT_CONFIG.header.height.xs,
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    minHeight: LAYOUT_CONFIG.header.height.sm,
    padding: theme.spacing(0, 2)
  },
  [theme.breakpoints.up('md')]: {
    minHeight: LAYOUT_CONFIG.header.height.md,
    padding: theme.spacing(0, 3)
  }
}));

export default function Header({ height, onToggleSidebar }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState('en');

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <StyledAppBar position="sticky"  >
      <StyledToolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          sx={{ 
            mr: 2,
            display: { sm: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton size="small">
            G
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <Avatar 
              src="/path-to-avatar.jpg" 
              alt="User"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
}
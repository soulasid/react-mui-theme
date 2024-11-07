import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material';

const Header = () => {

    const theme = useTheme();
    return (
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(6px)',
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
      </AppBar>
    );
};
export default Header;
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} open={open} />
        <Sidebar
          open={open}
          handleDrawerToggle={handleDrawerToggle}
          isMobile={isMobile}
        />
        <MainContent open={open} />
      </Box>
    </>
  );
}

export default Layout;

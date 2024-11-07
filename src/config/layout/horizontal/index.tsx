import { FC, useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Box, useTheme } from '@mui/material';
import { AppBar, Main, MainWrapper, ToolbarStyled } from './styles';
import Header from './Header';  // You'll need to create this component
import Navigation from './Navigation';  // You'll need to create this component

const HorizontalLayout: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const animationConfig = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
    },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <ToolbarStyled>
          <Header onToggleNav={toggleNavigation} />
        </ToolbarStyled>
        <Navigation open={open} />
      </AppBar>

      <MainWrapper>
        <Main
          initial={animationConfig.initial}
          animate={animationConfig.animate}
          transition={animationConfig.transition}
          exit={animationConfig.exit}
        >
          <Outlet />
        </Main>
      </MainWrapper>
    </Box>
  );
};

export default HorizontalLayout;

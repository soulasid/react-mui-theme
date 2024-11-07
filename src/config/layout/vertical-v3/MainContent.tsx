import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { drawerWidth } from '../config';

export const Main = styled(motion.main, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
interface MainContentProps {
  open: boolean;
}
const animationConfig = {
  initial: { opacity: 0 },
  animate: (open: boolean) => ({
    marginLeft: 0,
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
    opacity: 1,
  }),
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
  exit: { opacity: 0 },
};

const MainContent: FC<MainContentProps> = ({ open }) => {
  return (
    <Main
      open={open}
      initial={animationConfig.initial}
      animate={animationConfig.animate(open)}
      transition={animationConfig.transition}
      exit={animationConfig.exit}
    >
      <DrawerHeader />
      <Outlet />
    </Main>
  );
};

export default MainContent;

import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Outlet } from '@tanstack/react-router';
const drawerWidth = 240;
const Main = styled(motion.main, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
function MainContent({ open }: { open: boolean }) {
  return (
    <Main
      open={open}
      initial={false}
      animate={{
        marginLeft: open ? drawerWidth : 0,
        width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <DrawerHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </Main>
  );
}

export default MainContent;

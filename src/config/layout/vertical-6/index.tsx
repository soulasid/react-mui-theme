import { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { LAYOUT_CONFIG } from './config';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, Theme } from '@mui/material/styles';

const RootContainer =styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  },
  backgroundColor: theme.palette.background.default
}));

const MainContainer = styled(motion.div)(({ theme }) => ({
 flexGrow: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create(['margin', 'width'], {
    duration: theme.transitions.duration.standard,
  }),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${LAYOUT_CONFIG.sidebar.width.sm}px)`
  },
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - ${LAYOUT_CONFIG.sidebar.width.md}px)`
  },
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${LAYOUT_CONFIG.sidebar.width.lg}px)`
  }
}));

export default function VerticalLayout() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  // Auto close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const mainVariants = {
    expanded: {
      marginLeft: LAYOUT_CONFIG.sidebar.width.md,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    collapsed: {
      marginLeft: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <RootContainer>
      <Sidebar open={open} onClose={handleToggleSidebar} width={LAYOUT_CONFIG.sidebar.width.xs} isMobile={isMobile} />
      <MainContainer
        variants={mainVariants}
        animate={open ? 'expanded' : 'collapsed'}
        initial={false}
      >
        <Header onToggleSidebar={handleToggleSidebar} height={LAYOUT_CONFIG.header.height.xs} />
        <Main />
      </MainContainer>
    </RootContainer>
  );
}

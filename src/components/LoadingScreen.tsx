import { motion } from 'framer-motion';
import { Box, CircularProgress } from '@mui/material';

const loadingVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export default function LoadingScreen() {
  return (
    <Box
      component={motion.div}
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
} 
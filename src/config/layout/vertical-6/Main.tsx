import { Box, styled } from '@mui/material';
import { LAYOUT_CONFIG } from './config';
import { Outlet } from '@tanstack/react-router';

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  overflow: 'auto',
  padding: theme.spacing(LAYOUT_CONFIG.content.padding.xs),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(LAYOUT_CONFIG.content.padding.sm),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(LAYOUT_CONFIG.content.padding.md),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(LAYOUT_CONFIG.content.padding.lg),
  }
}));

export default function Main() {
  return (
    <MainContent>
     <Outlet />
    </MainContent>
  );
} 
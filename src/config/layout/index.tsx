import { Box } from '@mui/material';
// import Header from './Header';
// import Sidebar from './Sidebar';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {/* <Header /> */}
      {children}
    </Box>
  );
};
export default Layout;

import { FC } from 'react';
import { Box, Collapse, Stack } from '@mui/material';

interface NavigationProps {
  open: boolean;
}

const Navigation: FC<NavigationProps> = ({ open }) => {
  return (
    <Collapse in={open}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={2}>
          {/* Add your navigation items here */}
        </Stack>
      </Box>
    </Collapse>
  );
};

export default Navigation; 
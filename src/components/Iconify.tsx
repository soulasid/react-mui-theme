import { FC } from "react";
// import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps, Icon } from "@mui/material";

interface IconifyProps extends BoxProps {
  icon: string;
  width?: number;
}

const Iconify: FC<IconifyProps> = ({ icon, width = 20, sx, ...other }) => {
  return (
    <Box
      //   component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
};

export default Iconify;

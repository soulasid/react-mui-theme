import { FC } from "react";
import { Box, BoxProps } from "@mui/material";
// import { Link } from 'react-router-dom';

interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo: FC<LogoProps> = ({ disabledLink = false, sx }) => {
  const logo = (
    <Box
      component="img"
      src="/logo.svg"
      sx={{
        width: 40,
        height: 40,
        cursor: "pointer",
        ...sx,
      }}
    />
  );

  return logo;

  //   return <Link to="/">{logo}</Link>;
};

export default Logo;

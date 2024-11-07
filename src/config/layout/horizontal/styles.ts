import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar, Box } from "@mui/material";
import { motion } from "framer-motion";

export const headerHeight = 70;

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("lg")]: {
    minHeight: headerHeight,
  },
}));

export const MainWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  minHeight: "100vh",
  paddingTop: headerHeight,
}));

export const Main = styled(motion.main)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(3),
  minHeight: `calc(100vh - ${headerHeight}px)`,
  backgroundColor: theme.palette.background.default,
}));

export const ToolbarStyled = styled(Box)(({ theme }) => ({
  minHeight: headerHeight,
  padding: theme.spacing(0, 3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

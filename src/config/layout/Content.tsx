import { Box, Paper } from "@mui/material";
// import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
type Props = {
  children: React.ReactNode;
};

const PageContent = ({ children }: Props) => {
  return <Paper sx={{ padding: 2 }}>{children}</Paper>;
};
export default PageContent;

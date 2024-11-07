import useApp from "@/config/app/useApp";
import Vertical from "@/config/layout/vertical";
import Horizontal from "@/config/layout/horizontal";

const LAYOUTS = {
  vertical: Vertical,
  horizontal: Horizontal,
};
const AppLayout = () => {
  const {
    setting: { layout },
  } = useApp();
  const Layout = LAYOUTS[layout.style] || LAYOUTS.vertical;
  return <Layout />;
};

export default AppLayout;

import { Toaster } from "sonner";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { routeTree } from "./routeTree.gen";
import { CssBaseline } from "@mui/material";
import { lightMode } from "./config/theme/setting";
import useApp from "@/config/app/useApp";
import TanStackRouterDevtools from "./config/TanStackRouterDevtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    // queryClient,
  },
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
function App() {
  const theme = createTheme(lightMode);
  const { auth, setting } = useApp();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <RouterProvider
              router={router}
              context={{
                auth,
                setting,
                queryClient,
              }}
            />
            <TanStackRouterDevtools router={router} />
            <Toaster
              visibleToasts={9}
              position="top-right"
              closeButton
              duration={6000}
              richColors
              toastOptions={{
                duration: 6000,
              }}
            />
          </QueryClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;

import { createContext, useState } from 'react';
import type { AppContextProps, Auth } from '.';
import APP_SETTING from './constant';
export const AppContext = createContext<AppContextProps>({
  setting: APP_SETTING,
  auth: {
    loading: false,
    status: 'IDLE',
    profile: null,
  },
});
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [setting] = useState(APP_SETTING);
  const [auth] = useState<Auth>({
    loading: false,
    profile: null,
    status: 'IDLE',
  });
  return (
    <AppContext.Provider
      value={{
        setting: setting,
        auth: auth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

import { useContext } from 'react';
import { AppContext } from './Provider';
const useApp = () => {
  return useContext(AppContext);
};
export default useApp;

import useApp from './useApp';
const useLayout = () => {
  const { auth, setting } = useApp();
  return {
    useLayout,
  };
};

export default useLayout;

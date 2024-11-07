import useApp from "../app/useApp";
import {PermissionValueKey,ResultPermissions,PermissionKey} from './permissions'
const useAuth = () => {
    const { auth: { profile } } = useApp();
     const hasPermissions = (
      required: PermissionValueKey[] | '*' | PermissionValueKey
    ) => {
      if (required === '*') return true;
      const requiredPermissions = Array.isArray(required)
        ? required
        : [required];
      return requiredPermissions.every(
        (permission) => profile?.[permission as PermissionKey]
      );
    };
    return {
      hasPermissions,
    };
};

export default useAuth;
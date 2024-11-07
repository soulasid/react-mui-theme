export const PERMISSIONS = {
  iAmRolesGet: 'iam.roles.get',
  iAmRolesList: 'iam.roles.list',
} as const;
export type PermissionKey = keyof typeof PERMISSIONS;
export type PermissionValueKey = (typeof PERMISSIONS)[PermissionKey];
export type ResultPermissions = Record<PermissionKey, boolean>;
export const setPermissions = (permissions: PermissionValueKey[]) => {
  const uniquePermissions = Array.from(new Set(permissions));
  return Object.keys(PERMISSIONS).reduce((entries, key) => {
    return {
      ...entries,
      [key]: uniquePermissions.includes(PERMISSIONS[key as PermissionKey]),
    };
  }, {} as ResultPermissions);
};
export const hasPermissions = (
  permissions: ResultPermissions,
  required: PermissionValueKey[] | '*' | PermissionValueKey
) => {
  if (required === '*') return true;
  const requiredPermissions = Array.isArray(required) ? required : [required];
  return requiredPermissions.every(
    (permission) => permissions[permission as PermissionKey]
  );
};
hasPermissions({ iAmRolesGet: false, iAmRolesList: false }, [
  'iam.roles.get',
  'iam.roles.list',
]);

export const QUERY_NAME = {
  login: 'login',
  profile: 'profile',
  userRoles: 'userRoles',
};
export const QUERY_KEY = {
  login: [QUERY_NAME.login],
  profile: () => [QUERY_NAME.profile],
  userRoles: () => [QUERY_NAME.userRoles],
};

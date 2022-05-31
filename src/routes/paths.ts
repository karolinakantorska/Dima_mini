// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};
export const PATH_LOGIN = {
  login: '/anmelden',
  resetPass: '/reset_password',
};
export const PATH_UNTERNEHMEN = {
  ueber_uns: '/unternehmen/ueber_uns',
  leistungen: '/unternehmen/leistungen',
  mitarbeitern: '/unternehmen/mitarbeitern',
  jobs: '/unternehmen/jobs',
};
export const PATH_PROJEKTE = {
  projekte: '/projekte',
  projekt: '/projekt',
  addProject: '/projekt/neues'
};
export const PATH_KONTAKT = {
  kontakt: '/kontakt',
};

export const PATH_NEWS = {
  news: '/news',
};
export const PATH_LINKS = {
  links: '/links',
};
export const PATH_WEBCAMS = {
  webcams: '/webcams',
};
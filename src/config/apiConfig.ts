
const baseUrl = 'http://localhost:9091/api';
// const baseUrl = 'https://niise-be-spring-boot-api.heitecharena3.com/api';
// const baseUrl = 'http://niise-be-spring-boot-api.heitecharena3.com/api';
// const baseUrl = '';

export const API_CONFIG = {
   baseUrl: baseUrl,
  auth: {
    login: `${baseUrl}/auth/login`,
    register: '${baseUrl}/auth/register',
  },
  user: {
    profile: '${baseUrl}/user/profile',
  },
  menu: {
    allMenu: '${baseUrl}/menu',
  }
};

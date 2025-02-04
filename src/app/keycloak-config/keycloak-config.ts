// src/app/keycloak-config.ts
import { KeycloakConfig } from 'keycloak-js'; // Import from 'keycloak-js'

// Keycloak configuration
export const keycloakConfig: KeycloakConfig = {
  url: 'https://niise-auth.heitecharena3.com/realms/test_realm/account/#/', // Keycloak server URL
  realm: 'test-realm', // Your realm name
  clientId: 'angular_keycloak3', // Your client ID
};

// //----------------------------------------------
// // src/app/keycloak-config.ts
// import { KeycloakOptions } from 'keycloak-angular';
//
// // Keycloak configuration
// export const keycloakConfig: KeycloakOptions = {
//   config: {
//     url: 'http://localhost:8080/auth', // Keycloak server URL
//     realm: 'your-realm', // Your realm name
//     clientId: 'your-client-id', // Your client ID
//   },
//   initOptions: {
//     onLoad: 'login-required', // or 'check-sso'
//     checkLoginIframe: false,
//   },
//   enableBearerInterceptor: true, // Automatically add the token to requests
//   bearerPrefix: 'Bearer',
// };

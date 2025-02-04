import { ApplicationConfig, provideZoneChangeDetection, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  KeycloakService,
  provideKeycloak,
} from 'keycloak-angular';
import { keycloakConfig } from './keycloak-config/keycloak-config';

// Keycloak initialization function
export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: keycloakConfig,
      initOptions: {
        onLoad: 'login-required', // or 'check-sso'
        checkLoginIframe: false,
      },
      enableBearerInterceptor: true, // Automatically add the token to requests
      bearerPrefix: 'Bearer',
    });
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideKeycloak({
      config: keycloakConfig,
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }), // Provide Keycloak service with options
    provideAppInitializer(() => {
        const initializerFn = (initializeKeycloak)(inject(KeycloakService));
        return initializerFn();
      }),
  ]
};

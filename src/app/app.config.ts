import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import {provideHttpClient, withInterceptors} from '@angular/common/http';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {provideServiceWorker} from "@angular/service-worker";
import {WsoAuthInterceptor} from "./core/interceptors/wso-auth.interceptor";
// import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { NgIdleModule } from '@ng-idle/core';
// import { NgIdleModule } from '@ng-idle/core';
// import {JwtInterceptor} from "@auth0/angular-jwt";
// import {JwtInterceptor} from "@auth0/angular-jwt";
// import { JwtInterceptor } from './app/interceptors/jwt.interceptor';
// import { JwtInterceptor } from './app/interceptors/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      //withHashLocation()
    ),
    provideHttpClient(withInterceptors([JwtInterceptor, WsoAuthInterceptor])),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimationsAsync(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
    importProvidersFrom(NgIdleModule.forRoot()),
    importProvidersFrom(NgIdleKeepaliveModule.forRoot())
  ]
};

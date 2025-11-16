import { Routes } from '@angular/router';
// import { LayoutComponent } from './layout';

import { LayoutV2Component } from "./core/components/layout/layout-v2.component";
import { CallbackComponent } from './callback.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginNetiqComponent } from './NiiseModules/login/loginNetiq.component';

// import { ImbasanDokumenPassportComponent } from './NiiseModules/kaunter-manual-kenderaan/imbasan-dokumen-passport/imbasan-dokumen-passport.component';
// import { ImbasanDokumenAbtcComponent } from './NiiseModules/kaunter-manual-kenderaan/imbasan-dokumen-abtc/imbasan-dokumen-abtc.component';
// import { ImbasanDokumenKodqrComponent } from './NiiseModules/kaunter-manual-kenderaan/imbasan-dokumen-kodqr/imbasan-dokumen-kodqr.component';
// import { ImbasanDokumenLainlainComponent} from './NiiseModules/kaunter-manual-kenderaan/imbasan-dokumen-lainlain/imbasan-dokumen-lainlain.component';
// import { PemeriksaanMasukDokumenComponent } from './NiiseModules/kaunter-manual-kenderaan/pemeriksaan-masuk-dokumen/pemeriksaan-masuk-dokumen.component';



export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../view/dashboard/routes').then((m) => m.routes),
  },
  {
    path: 'IDM',
    loadChildren: () =>
      import('../app/NiiseModules/IDM/routes').then((m) => m.idmRoutes),
  },
  {
    path: 'niise-employee',
    loadChildren: () =>
      import('../app/NiiseModules/NiiseEmployee/routes').then((m) => m.routes),
  },
  {
    path: 'theme',
    loadChildren: () =>
      import('../others/views/dev-references/theme/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'base',
    loadChildren: () =>
      import('../others/views/dev-references/base/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('../others/views/dev-references/buttons/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('../others/views/dev-references/forms/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('../others/views/dev-references/icons/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('../others/views/dev-references/notifications/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('../others/views/dev-references/widgets/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('../others/views/dev-references/charts/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../others/views/dev-references/pages/routes').then(
        (m) => m.routes
      ),
  },
];

export const v2Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./NiiseModules/welcome-staff/welcome-staff.component').then(
        (m) => m.WelcomeStaffComponent)
  },
  {
    path: 'dashboard-staff',
    loadComponent: () => import('./NiiseModules/dashboard-staff/dashboard-staff.component').then(
      (m) => m.DashboardStaffComponent
    )
  },
];

export const routes: Routes = [
  { 
    path: 'callback', 
    component: CallbackComponent 
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  
  // {
  //   path: 'login',
  //   component: LoginNetiqComponent,
  //   data: {
  //     title: 'Login Page',
  //   },
  // },

  // kalau nak bagi boleh akses tanpa login, guna config ini
  // {
  //   path: '',
  //   component: LayoutV2Component,
  //   data: {
  //     title: 'Home',
  //   },
  //   children: childRoutes,
  // },

  //  lock semua route kalau tak login lagi
  {
    path: '',
    component: LayoutV2Component,
    canActivate: [AuthGuard],       
    canActivateChild: [AuthGuard],  
    data: {
      title: 'Home',
    },
    children: childRoutes,
  },
  // ,
  // {
  //   path: 'v2',
  //   component: LayoutV2Component,
  //   data: {
  //     title: 'Home'
  //   }, children : v2Routes
  // },
  {
    path: '404',
    loadComponent: () =>
      import(
        '../others/views/dev-references/pages/page404/page404.component'
      ).then((m) => m.Page404Component),
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    loadComponent: () =>
      import(
        '../others/views/dev-references/pages/page500/page500.component'
      ).then((m) => m.Page500Component),
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./NiiseModules/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./NiiseModules/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
    data: {
      title: 'Landing Page',
    },
  },
  {
    path: 'nicc',
    loadComponent: () =>
      import('./NiiseModules/nicc/app').then(
        (m) => m.AppComponent
      ),
    data: {
      title: 'Landing Page',
    },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./NiiseModules/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'portal-niise',
    loadComponent: () =>
      import('./NiiseModules/IDM/pendaftaran-id-pelanggan/portal-niise/portal-niise.component').then(
        (m) => m.PortalNiiseComponent
      ),
    data: {
      title: 'Portal Niise',
    },
  },
  {
    path: 'login2',
    loadComponent: () =>
      import('./NiiseModules/IDM/pendaftaran-id-pelanggan/login/login.component').then(
        (m) => m.LoginComponent
      ),
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'pendaftaran-id-warganegara',
    loadComponent: () =>
      import('./NiiseModules/IDM/pendaftaran-id-pelanggan/pendaftaran-id-warganegara/pendaftaran-id-warganegara.component').then(
        (m) => m.PendaftaranIDWarganegaraComponent
      ),
    data: {
      title: 'Pendaftaran ID Warganegara',
    },
  },
  {
    path: 'maklumat-pemohon-warganegara',
    loadComponent: () =>
      import('./NiiseModules/IDM/pendaftaran-id-pelanggan/maklumat-pemohon-warganegara/maklumat-pemohon-warganegara.component').then(
        (m) => m.MaklumatPemohonWarganegaraComponent      ),
    data: {
      title: 'Maklumat Pemohon Warganegara',
    },
  },
  {
    path: 'maklumat-pemohon-bukan-warganegara',
    loadComponent: () =>
      import('./NiiseModules/IDM/pendaftaran-id-pelanggan/maklumat-pemohon-bukan-warganegara/maklumat-pemohon-bukan-warganegara.component').then(
        (m) => m.MaklumatPemohonBukanWarganegaraComponent      ),
    data: {
      title: 'Maklumat Pemohon Bukan Warganegara',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];

import { Routes } from '@angular/router';
// import { LayoutComponent } from './layout';
import { PengurusanKakitanganComponent } from './NiiseModules/ADM/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat-/pengurusan-kakitangan/pengurusan-kakitangan.component';
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
  // {
  //   path: 'senarai-semakan-dan-tindakan-penyelia',
  //   component: SenaraiSemakanDanTindakanPenyeliaComponent,
  //   data: {
  //     title: 'Senarai Dan Tindakan Penyelia',
  //   },
  // },
  // {
  //   path: 'imbasan-dokumen-perjalanan',
  //   component: ImbasanDokumenPerjalananComponent,
  //   data: {
  //     title: 'Imbasan Dokumen Perjalanan',
  //   },
  // },
  // {
  //   path: 'cetak-pas-maklumat',
  //   component: CetakPasMaklumatComponent,
  //   data: {
  //     title: 'Imbasan Dokumen Perjalanan',
  //   },
  // },
  // {
  //   path: 'semakan-dan-tindakan-penyelia',
  //   component: SemakanDanTindakanPenyeliaComponent,
  //   data: {
  //     title: 'Semakan Dan Tindakan Penyelia',
  //   },
  // },
  // {
  //   path: 'padanan-data-apss',
  //   component: PadananDataAppsComponent,
  //   data: {
  //     title: 'Padanan Data APSS',
  //   },
  // },
  // //WFR-IBC-02.1.1-10: Maklumat Profil Pengembara - Semak
  // {
  //   path: 'maklumat-profil-pengembara', // Add here
  //   component: MaklumatProfilPengembaraComponent,
  //   data: {
  //     title: 'Maklumat Profil Pengembara',
  //   },
  // },
  // //WFR-IBC-02.1.1-11: Maklumat Profil Pengembara
  // {
  //   path: 'maklumat-profil',
  //   component: MaklumatProfilComponent,
  //   data: {
  //     title: 'Maklumat Profil Pengembara',
  //   },
  // },
  // //WFR-IBC-02.1.1-12: Maklumat Visa
  // {
  //   path: 'maklumat-visa',
  //   component: MaklumatVisaComponent,
  //   data: {
  //     title: 'Maklumat Visa',
  //   },
  // },
  // //WFR-IBC-02.1.1-13: Maklumat Pas
  // {
  //   path: 'maklumat-pas',
  //   component: MaklumatPasComponent,
  //   data: {
  //     title: 'Maklumat Pas',
  //   },
  // },
  // //WFR-IBC-02.1.1-14: Maklumat Pengguna Kerap
  // {
  //   path: 'maklumat-pengguna-kerap',
  //   component: MaklumatPenggunaKerapFtfComponent,
  //   data: {
  //     title: 'Maklumat Pas',
  //   },
  // },

  //SEC & BKP routes Start ------->
  {
    path: 'sec',
    loadChildren: () =>
      import('./NiiseModules/sec/routes').then((m) => m.secRoutes),
  },
  {
    path: 'bkp',
    loadChildren: () =>
      import('./NiiseModules/bkp/routes').then((m) => m.bkpRoutes),
    data: {
      title: `Bahagian Perkhidmatan`,
    }
  },
  // <--------- SEC & BKP End

  // IBC START
  {
    path: 'ibc',
    loadChildren: () =>
      import('./NiiseModules/ibc/routes').then((m) => m.ibcRoutes),
  },
  // {
  //   path: 'tapisan-keselamatan',
  //   loadChildren: () =>
  //     import('./NiiseModules/tapisan-keselamatan/routes').then((m) => m.routes),
  // },
  // {
  //   path: 'tapisan-keselamatan',
  //   loadChildren: () => import('./NiiseModules/tapisan-keselamatan/routes').then((m) => m.routes)
  // },
  // ADM START
  {
    path: 'adm',
    loadChildren: () =>
      import('./NiiseModules/ADM/routes').then((m) => m.admRoutes),
  },
  {
    path: 'pengurusan-kakitangan',
    component: PengurusanKakitanganComponent,
    data: {
      title: 'Pendaftaran Kakitangan'
    }
  },

  // END ADM
  // KAWALAN PEMERIKSAAN MASUK KAUNTER MANUAL KENDERAAN (Start)


  //KAWALAN PEMERIKSAAN MASUK KAUNTER MANUAL KENDERAAN (End)},
  //CMN START
  {
    path: 'pilih-jenis-selenggara',
    loadChildren: () =>
      import('./NiiseModules/CMN/selenggara-data-rujukan/pilih-jenis-selenggara/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-parameter-aplikasi',
    loadChildren: () =>
      import('./NiiseModules/CMN/selenggara-data-takwim/buat-carian-data-takwim/pengurusan-parameter-aplikasi/routes').then((m) => m.routes),
  },
  {
    path: 'cmn/selenggara-data-rujukan/kemaskini-data-rujukan/:table/:refCode',
    loadComponent: () =>
      import('./NiiseModules/CMN/selenggara-data-rujukan/kemaskini-data-rujukan/kemaskini-data-rujukan.component').then(
        (m) => m.KemaskiniDataRujukanComponent),
  },
  {
    path: 'cmn/selenggara-data-rujukan/semak-data-rujukan/semakan-data-rujukan/:id',
    loadComponent: () =>
      import('./NiiseModules/CMN/selenggara-data-rujukan/semak-data-rujukan/semakan-data-rujukan/semakan-data-rujukan.component').then(
        (m) => m.SemakanDataRujukanComponent),
  },
  {
    path: 'cmn/selenggara-data-rujukan/senarai-rujukan-berdasarkan-table/:tableName',
    loadComponent: () =>
      import('./NiiseModules/CMN/selenggara-data-rujukan/buat-carian-data-rujukan/senarai-rujukan-berdasarkan-table/senarai-rujukan-berdasarkan-table.component').then(
        (m) => m.SenaraiRujukanBerdasarkanTableComponent),
  },
  {
    path: 'cmn/selenggara-data-konfigurasi/semak-data-konfigurasi/semakan-data-konfigurasi/:id',
    loadComponent: () =>
      import('./NiiseModules/CMN/selenggara-data-konfigurasi/semak-data-konfigurasi/semakan-data-konfigurasi/semakan-data-konfigurasi.component').then(
        (m) => m.SemakanDataKonfigurasiComponent),
  },
  // CMN end

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

  //Start CMN
  {
    path: 'pilih-jenis-selenggara',
    loadChildren: () =>
      import('./NiiseModules/CMN/selenggara-data-rujukan/pilih-jenis-selenggara/routes').then((m) => m.routes),
  },
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.cmnRoutes),
  },
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.msjRoutes),
  },
    {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.takwimRoutes),
  },
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.ptemplatRoutes),
  },


  // path untuk dashboard pengguna dalaman
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.dashNavRoutes),
  },

  // path untuk dashboard pengguna awam
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.dashNav2Routes),
  },

  // path untuk dashboard pengguna agensi
  {
    path: 'cmn',
    loadChildren: () =>
      import('./NiiseModules/CMN/routes').then((m) => m.dashNav3Routes),
  },
  //END CMN

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
  {
    path: 'ibc',
    loadChildren: () =>
      import('./NiiseModules/ibc/routes').then((m) => m.ibcRoutes),
  }
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
  
  {
    path: 'login',
    component: LoginNetiqComponent,
    data: {
      title: 'Login Page',
    },
  },

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
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./NiiseModules/login/login.component').then(
  //       (m) => m.LoginComponent
  //     ),
  //   data: {
  //     title: 'Login Page',
  //   },
  // },
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

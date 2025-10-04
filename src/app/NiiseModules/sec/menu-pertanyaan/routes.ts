import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./menu-pertanyaan.component').then(m => m.MenuPertanyaanComponent),
  },
  {
    path: 'senarai-syak',
    loadComponent: () => import('./senarai-syak/senarai-syak.component').then(m => m.SenaraiSyakComponent),
  },
  {
    path: 'senarai-syak',
    loadChildren: () =>
      import('./senarai-syak/routes').then(m => m.routes),
  },
  {
    path: 'surat-kemudahan',
    loadComponent: () => import('./surat-kemudahan/surat-kemudahan.component').then(m => m.SuratKemudahanComponent),
  },
  {
    path: 'surat-kemudahan',
    loadChildren: () =>
      import('./surat-kemudahan/routes').then(m => m.routes),
  },
  {
    path: 'surat-kemudahan-berlepas',
    loadComponent: () => import('./surat-kemudahan-berlepas/surat-kemudahan-berlepas.component').then(m => m.SuratKemudahanBerlepasComponent),
  },
  {
    path: 'surat-kemudahan-berlepas',
    loadChildren: () =>
      import('./surat-kemudahan-berlepas/routes').then(m => m.routes),
  },
  {
    path: 'pas-khas',
    loadComponent: () => import('./pas-khas/pas-khas.component').then(m => m.PasKhasComponent),
  },
  {
    path: 'pas-khas',
    loadChildren: () =>
      import('./pas-khas/routes').then(m => m.routes),
  },
  {
    path: 'pengesahan-passport',
    loadComponent: () => import('./pengesahan-passport/pengesahan-passport.component').then(m => m.PengesahanPassportComponent),
  },
  {
    path: 'pengesahan-passport',
    loadChildren: () =>
      import('./pengesahan-passport/routes').then(m => m.routes),
  },
  {
    path: 'pekeliling-khas',
    loadComponent: () => import('./pekeliling-khas/pekeliling-khas.component').then(m => m.PekelilingKhasComponent),
  },
  {
    path: 'pekeliling-khas',
    loadChildren: () =>
      import('./pekeliling-khas/routes').then(m => m.routes),
  },
  {
    path: 'pergerakan-keluar-masuk',
    loadComponent: () => import('./pergerakan-keluar-masuk/pergerakan-keluar-masuk.component').then(m => m.PergerakanKeluarMasukComponent),
  },
  {
    path: 'pergerakan-keluar-masuk',
    loadChildren: () =>
      import('./pergerakan-keluar-masuk/routes').then(m => m.routes),
  },
  {
    path: 'visa-pas-permit',
    loadComponent: () => import('./visa-pas-permit/visa-pas-permit.component').then(m => m.VisaPasPermitComponent),
  },
  {
    path: 'visa-pas-permit',
    loadChildren: () =>
      import('./visa-pas-permit/routes').then(m => m.routes),
  },  
  {
    path: 'memo-periksa-keluar-masuk',
    loadComponent: () => import('./memo-periksa-keluar-masuk/memo-periksa-keluar-masuk.component').then(m => m.MemoPeriksaKeluarMasukComponent),
  },
  {
    path: 'memo-periksa-keluar-masuk',
    loadChildren: () =>
      import('./memo-periksa-keluar-masuk/routes').then(m => m.routes),
  },  
  {
    path: 'semakan-biometrik',
    loadComponent: () => import('./semakan-biometrik/semakan-biometrik.component').then(m => m.SemakanBiometrikComponent),
  },
  {
    path: 'semakan-biometrik',
    loadChildren: () =>
      import('./semakan-biometrik/routes').then(m => m.routes),
  }
];

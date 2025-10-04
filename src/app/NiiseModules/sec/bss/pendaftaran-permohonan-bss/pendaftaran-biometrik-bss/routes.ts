import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pendaftaran-biometrik-bss.component').then(m => m.PendaftaranBiometrikBssComponent),
    data: {
      title: `Pendaftaran Biometrik Bss`
    }
    
  },
  {
    path: 'empat-jari-biometrik',
    loadChildren: () =>
      import('./empat-jari-biometrik/routes').then((m) => m.routes),
  },
  {
    path: 'wajah-iris-biometrik',
    loadChildren: () =>
      import('./wajah-iris-biometrik/routes').then((m) => m.routes),
  },

  
];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./empat-jari-biometrik.component').then(m => m.EmpatJariBiometrikComponent),
    data: {
      title: `Empat Jari Biometrik`
    }
  },
   {
    path: 'ibu-jari-kanan-kiri',
    loadChildren: () =>
      import('../ibu-jari-kanan-kiri/routes').then((m) => m.routes),
  },


  
];


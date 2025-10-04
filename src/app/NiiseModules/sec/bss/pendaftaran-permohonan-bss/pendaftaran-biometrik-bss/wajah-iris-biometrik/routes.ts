import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./wajah-iris-biometrik.component').then(m => m.WajahIrisBiometrikComponent),
    data: {
      title: `Wajah Iris Biometrik`
    }
  },
   {
    path: 'ibu-jari-kanan-kiri',
    loadChildren: () =>
      import('../ibu-jari-kanan-kiri/routes').then((m) => m.routes),
  },


  
];


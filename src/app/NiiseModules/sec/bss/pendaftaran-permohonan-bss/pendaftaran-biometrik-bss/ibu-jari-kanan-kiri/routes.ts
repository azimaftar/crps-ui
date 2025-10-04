import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ibu-jari-kanan-kiri.component').then(m => m.IbuJariKiriKananComponent),
    data: {
      title: `Ibu Jari`
    }
  },
  {
    path: 'result-jari-biometrik',
    loadChildren: () =>
      import('../result-jari-biometrik/routes').then((m) => m.routes),
  },

  
];


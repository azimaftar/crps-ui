import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-kelulusan-kes.component').then(m => m.CarianKelulusanKesComponent),
    data: {
      title: `Carian Kelulusan Kes Pemerhatian`
    }
  },

  {
    path: 'kelulusan-kes-pemerhatian',
    loadChildren: () =>
      import('./kelulusan-kes-pemerhatian/routes').then((m) => m.routes),
  },
];





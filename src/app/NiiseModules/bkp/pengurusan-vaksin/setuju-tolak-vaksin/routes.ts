import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./setuju-tolak-vaksin.component')
        .then(m => m.SetujuTolakVaksinComponent),
    data: {
      title: `Setuju Vaksin / Menolak Vaksin`
    }
  },
];
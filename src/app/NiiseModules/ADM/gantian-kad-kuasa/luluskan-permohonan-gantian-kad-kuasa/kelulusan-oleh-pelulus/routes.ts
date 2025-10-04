import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-oleh-pelulus.component').then(m => m.KelulusanOlehPelulusComponent),
    data: {
      title: `Kelulusan oleh pelulus`
    }
  }
];
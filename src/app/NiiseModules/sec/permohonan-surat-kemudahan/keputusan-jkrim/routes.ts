import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./keputusan-jkrim.component').then(m => m.KeputusanJkrimComponent),
    data: {
      title: `Keputusan Permohonan JKRIM`
    }
  }
];



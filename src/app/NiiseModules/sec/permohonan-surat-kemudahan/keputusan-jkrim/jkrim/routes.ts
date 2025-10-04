import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jkrim.component').then(m => m.JkrimComponent),
    data: {
      title: `Keputusan Permohonan JKRIM`
    }
  }
];




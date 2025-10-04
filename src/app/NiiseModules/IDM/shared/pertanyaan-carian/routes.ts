import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pertanyaan-carian.component').then(m => m.PertanyaanCarianComponent),
    data: {
      title: `Pertanyaan-Carian`
    }
  }
];


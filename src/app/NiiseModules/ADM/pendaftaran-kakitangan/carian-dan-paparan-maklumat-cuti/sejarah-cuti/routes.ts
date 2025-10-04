import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sejarah-cuti.component').then(m => m.SejarahCutiComponent),
    data: {
      title: `Sejarah Cuti`
    }
  }
];
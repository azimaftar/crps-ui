import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catatan-lewat.component').then(m => m.CatatanLewatComponent),
    data: {
      title: `Catatan Lewat`
    }
  }
];


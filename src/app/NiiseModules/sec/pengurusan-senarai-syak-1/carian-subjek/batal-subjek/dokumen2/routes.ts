import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dokumen2.component').then(m => m.Dokumen2Component),
    data: {
      title: `Batal SL`
    }
  }
];


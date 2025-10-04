import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-ot.component').then(m => m.PemohonanOtComponent),
    data: {
      title: `Catatan Lewat`
    }
  }
];


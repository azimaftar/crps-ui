import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan-ot.component').then(m => m.KelulusanPermohonanOtComponent),
    data: {
      title: `Kelulusan Permohonan OT`
    }
  }
];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-maklumat-cuti.component').then(m => m.CarianMaklumatCutiComponent),
    data: {
      title: `Pendaftaran Kakitangan`
    }
  }
];
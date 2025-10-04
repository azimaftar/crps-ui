import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tandatangan-digital.component').then(m => m.TandatanganDigitalComponent),
    data: {
      title: `Pendaftaran Kakitangan`
    }
  }
];
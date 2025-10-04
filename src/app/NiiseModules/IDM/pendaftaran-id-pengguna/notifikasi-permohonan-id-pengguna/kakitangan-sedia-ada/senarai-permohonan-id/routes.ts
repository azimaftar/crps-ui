import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-permohonan-id.component').then(m => m.SenaraiPermohonanIdComponent),
    data: {
      title: `Senarai-Permohonan-ID`
    }
  }
];


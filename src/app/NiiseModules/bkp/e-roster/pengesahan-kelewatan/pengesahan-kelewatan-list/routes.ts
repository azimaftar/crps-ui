import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-kelewatan-list.component').then(m => m.PengesahanKelewatanListComponent),
    data: {
      title: `Sejarah Kelewatan`
    }
  }
];


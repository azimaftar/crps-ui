import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-kelewatan.component').then(m => m.PengesahanKelewatanComponent),
    data: {
      title: `Pengesahan Kelewatan`
    }
  },
   {
    path: 'maklumat-pegawai',
    loadChildren: () =>
        import('./maklumat-pegawai/routes').then((m) => m.routes),
  },
  {
    path: 'pengesahan-kelewatan-list',
    loadChildren: () =>
        import('./pengesahan-kelewatan-list/routes').then((m) => m.routes),
  },
];



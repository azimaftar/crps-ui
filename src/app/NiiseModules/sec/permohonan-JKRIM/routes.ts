import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default page
  {
    path: '',
    redirectTo: 'sec/kategori-permohonan',
    pathMatch: 'full'
  },

  // Modul SEC
  {
    path: '',
    children: [
      {
        path: 'kategori-permohonan',
        loadComponent: () =>
          import('./permohonan-baru/kategori-permohonan.component')
            .then(m => m.KategoriPermohonanComponent),
        data: { title: 'Kategori Permohonan' }
      },
      {
        path: 'semakan-permohonan',
        loadComponent: () =>
          import('./semakan-permohonan/semakan-permohonan.component')
            .then(m => m.SemakanPermohonanComponent),
        data: { title: 'Semakan Permohonan' }
      }
    ]
  },
];

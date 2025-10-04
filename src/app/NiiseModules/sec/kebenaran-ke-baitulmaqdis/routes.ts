import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'permohonan-baru',
    loadChildren: () =>
      import('./permohonan-baru/carian-permohonan/carian-permohonan-routes')
        .then(m => m.CARIAN_PERMOHONAN_ROUTES),
  },
  {
    path: 'semakan-permohonan',
    loadChildren: () =>
      import('./semakan-permohonan/carian-semakan-permohonan/carian-semakan-permohonan-routes')
        .then(m => m.CARIAN_SEMAKAN_ROUTES),
  },
   {
    path: 'pengesyoran-permohonan',
    loadChildren: () =>
      import('./pengesyoran-permohonan/carian-pengesyoran-permohonan/carian-pengesyoran-permohonan-routes')
        .then(m => m.CARIAN_PENGESYORAN_ROUTES),
  },
   {
    path: 'kelulusan-permohonan',
    loadChildren: () =>
      import('./kelulusan-permohonan/carian-kelulusan-permohonan/carian-kelulusan-permohonan-routes')
        .then(m => m.CARIAN_PENGESYORAN_ROUTES),
  },
];

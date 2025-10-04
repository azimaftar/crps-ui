import { Routes } from "@angular/router";

export const LanjutanMasaOperasiRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'permohonan-lanjutan-masa-operasi',
        loadChildren: () =>
          import('./permohonan-lanjutan-masa-operasi/routes').then(m => m.routes)
      },
      {
        path: 'pengesahan-permohonan-lanjutan-masa-operasi',
        loadChildren: () =>
          import('./pengesahan-permohonan-lanjutan-masa-operasi/routes').then(m => m.routes)
      },
      {
        path: 'kelulusan-permohonan-lanjutan-masa-operasi',
        loadChildren: () =>
          import('./kelulusan-permohonan-lanjutan-masa-operasi/routes').then(m => m.routes)
      },
    ]
  }
];

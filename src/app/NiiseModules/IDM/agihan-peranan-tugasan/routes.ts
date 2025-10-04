import { Routes } from "@angular/router";

export const IdmAgihanPerananDanTugasanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lanjutan-masa-operasi',
        loadChildren: () =>
          import('./lanjutan-masa-operasi/routes').then(m => m.LanjutanMasaOperasiRoutes)
      }
    ]
  }
];

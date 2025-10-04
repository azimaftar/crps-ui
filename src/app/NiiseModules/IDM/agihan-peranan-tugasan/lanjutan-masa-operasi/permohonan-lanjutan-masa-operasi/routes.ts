import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-lanjutan-masa-operasi.component').then(m => m.PermohonanLanjutanMasaOperasiComponent),
    data: {
      title: `Permohonan-Lanjutan-Masa-Operasi`
    }
  }
];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan-lanjutan-masa-operasi.component').then(m => m.KelulusanPermohonanLanjutanMasaOperasiComponent),
    data: {
      title: `Kelulusan-Permohonan-Lanjutan-Masa-Operasi`
    }
  }
];


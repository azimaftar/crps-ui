import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-permohonan-lanjutan-masa-operasi.component').then(m => m.PengesahanPermohonanLanjutanMasaOperasiComponent),
    data: {
      title: `Pengasahan-Permohonan-Lanjutan-Masa-Operasi`
    }
  }
];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carian-laporan-kejadian',
    loadComponent: () => import('./carian-laporan-kejadian/carian-laporan-kejadian.component').then(m => m.CarianLaporanKejadianComponent),
  },
  {
    path: 'daftar-kemas-kini-laporan',
    loadComponent: () => import('./daftar-kemas-kini-laporan/daftar-kemas-kini-laporan.component').then(m => m.DaftarKemasKiniLaporanComponent),
  },
];
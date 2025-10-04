import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-e-occurence/pengurusan-e-occurence.component').then(m => m.PengurusanEOccurenceComponent),
  },
  {
    path: 'kemasukan-data-tetapan-kejadian',
    loadChildren: () => import('./01-kemasukan-data-tetapan-kejadian/routes').then(m => m.routes),
  },
  {
    path: 'sahkan-kemasukan-data',
    loadChildren: () => import('./02-sahkan-kemasukan-data/routes').then(m => m.routes),
  },
  {
    path: 'daftar-kemas-kini-laporan-kejadian',
    loadChildren: () => import('./03-daftar-kemas-kini-laporan-kejadian/routes').then(m => m.routes),
  },
  {
    path: 'sahkan-laporan-kejadian',
    loadChildren: () => import('./04-sahkan-laporan-kejadian/routes').then(m => m.routes),
  },
  {
    path: 'luluskan-laporan-kejadian',
    loadChildren: () => import('./05-luluskan-laporan-kejadian/routes').then(m => m.routes),
  },
  {
    path: 'buat-penilaian-kemas-kini-tahap-kejadian',
    loadChildren: () => import('./06-buat-penilaian-kemas-kini-tahap-kejadian/routes').then(m => m.routes),
  }
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carian-laporan-kejadian',
    loadComponent: () => import('./carian-laporan-kejadian/carian-laporan-kejadian.component').then(m => m.CarianLaporanKejadianComponent),
  },
  {
    path: 'pengesahan-laporan-kejadian',
    loadChildren: () => import('./pengesahan-laporan-kejadian/routes').then(m => m.routes),
  },
];
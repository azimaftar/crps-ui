import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: '',
    loadComponent: () => import('./jana-laporan-carian.component').then(m => m.JanaLaporanCarianComponent),
    data: {
      title: 'Jana Laporan Carian'
    },

  }
]
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
     path: '',
      loadComponent: () => import('./maklumat-peg-jpn.component').then(m => m.MaklumatPegJpnComponent),
      data: {
      title: `Maklumat Pegawai JPN`
    },
    
  },
  
];
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./peranan-konfigurasi.component').then(m => m.PerananKonfigurasiComponent),
    data: {
      title: `Setkan Peranan Konfigurasi`
    },
    
  }
];


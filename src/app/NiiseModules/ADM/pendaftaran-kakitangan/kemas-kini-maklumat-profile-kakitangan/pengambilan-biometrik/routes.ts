import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengambilan-biometrik.component').then(m => m.PengambilanBiometrikComponent),
    data: {
      title: `Pengambilan Biometrik`
    }
  }
];
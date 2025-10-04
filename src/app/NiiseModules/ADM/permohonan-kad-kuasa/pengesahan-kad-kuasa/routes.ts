import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-kad-kuasa.component').then(m => m.PengesahanKadKuasaComponent),
    data: {
      title: `Pengesahan Kad Kuasa`
    }
  }
];
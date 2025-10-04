import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-kad-kuasa.component').then(m => m.PengurusanKadKuasaComponent),
    data: {
      title: `Pengurusan Kad Kuasa`
    }
  }
];
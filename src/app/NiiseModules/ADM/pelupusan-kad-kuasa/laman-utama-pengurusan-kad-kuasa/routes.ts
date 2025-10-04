import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./laman-utama-pengurusan-kad-kuasa.component').then(
        (m) => m.LamanUtamaPengurusanKadKuasaComponent
      ),
    data: {
      title: `Laman Utama Pengurusan Kad Kuasa`,
    },
  },
];

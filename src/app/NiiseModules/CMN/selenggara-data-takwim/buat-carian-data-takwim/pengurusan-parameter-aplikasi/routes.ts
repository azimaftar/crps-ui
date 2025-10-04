import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pengurusan-parameter-aplikasi.component').then(
        (m) => m.PengurusanParameterAplikasiComponent
      ),
    data: {
      title: `Pengurusan Parameter Aplikasi`,
    },
  },
];

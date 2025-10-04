import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pilih-jenis-selenggara.component').then((m) => m.PilihJenisSelenggaraComponent),
    data: {
      title: `Pilih Jenis Selenggara`,
    },
  },
];

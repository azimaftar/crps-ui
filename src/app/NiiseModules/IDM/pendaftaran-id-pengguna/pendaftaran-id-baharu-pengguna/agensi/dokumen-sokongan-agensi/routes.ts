import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dokumen-sokongan-agensi.component').then((m) => m.DokumenSokonganAgensiComponent),
    data: {
      title: `Dokumen Sokongan Agensi`,
    },
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./daftar-tarikh-publish.component')
        .then(m => m.DaftarTarikhPublishComponent),
    data: {
      title: `Pendaftaran Tarikh Publish Vaksin`
    }
  },
];
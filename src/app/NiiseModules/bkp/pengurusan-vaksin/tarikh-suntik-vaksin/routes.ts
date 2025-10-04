import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tarikh-suntik-vaksin.component')
        .then(m => m.TarikhSuntikVaksinComponent),
    data: {
      title: `Maklumat Tarikh Temu Janji`
    }
  },
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
        path: 'permohonan-baru',
        loadChildren: () =>
          import('./permohonan-baru/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-agensi',
        loadChildren: () =>
          import('./permohonan-baru/maklumat-agensi/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-ssm',
        loadChildren: () =>
          import('./permohonan-baru/maklumat-ssm/routes').then((m) => m.routes),
      },
      {
        path: 'senarai-individu',
        loadChildren: () =>
          import('./permohonan-baru/senarai-individu/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-individu',
        loadChildren: () =>
          import('./permohonan-baru/maklumat-individu/routes').then((m) => m.routes),
      },
];

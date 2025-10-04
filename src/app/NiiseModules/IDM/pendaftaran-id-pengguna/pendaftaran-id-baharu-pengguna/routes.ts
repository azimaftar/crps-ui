import { Routes } from "@angular/router";

export const IdmPendaftaranIdBaharuRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agensi',
        loadChildren: () =>
          import('./agensi/routes').then(m => m.agensiRoutes)
      },
      {
        path: 'laman-utama',
        loadChildren: () =>
          import('./jim-kat/routes').then(m => m.jimKatRoutes)
      }
    ]
  }
];

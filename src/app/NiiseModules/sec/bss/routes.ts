import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengesyoran-permohonan-bss',
        loadChildren: () =>
            import('./pengesyoran-permohonan-bss/routes').then((m) => m.routes),
      },
      {
        path: 'carian-bss',
        loadChildren: () =>
            import('./carian-bss/routes').then((m) => m.routes),
      },
      {
        path: 'pendaftaran-permohonan-bss',
        loadChildren: () =>
            import('./pendaftaran-permohonan-bss/routes').then((m) => m.routes),
      },
      {
        path: 'Kelulusan-Permohonan-bss',
        loadChildren: () =>
            import('./Kelulusan-Permohonan-bss/routes').then((m) => m.routes),
      },
      {
        path: 'keputusan-permohonan-bss-jkrim',
        loadChildren: () =>
            import('./keputusan-permohonan-bss-jkrim/routes').then((m) => m.routes),
      },
    ]
  }
];





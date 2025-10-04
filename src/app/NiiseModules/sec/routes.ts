import {Routes} from "@angular/router";

export const secRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sl',
        loadChildren: () =>
          import('./sl/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-senarai-syak',
        children: [
          // BP1: Selenggara Senarai Syak
          {
            path: 'selenggara-senarai-syak',
            loadChildren: () =>
              import('./pengurusan-senarai-syak/selenggara-senarai-syak/selenggara-senarai-syak-routes')
                .then(m => m.SELENGGARA_SENARAI_SYAK_ROUTES)
          },
          // BP2: ... and so on for other modules in 'pengurusan-senarai-syak'
          // Please add others here as needed
        ]
      },
      {
        path: 'bss',
        loadChildren: () =>
          import('./bss/routes').then(m => m.routes)
      },
      {
        path: 'tetapan-e-digital-stamping',
        loadChildren: () =>
          import('./tetapan-e-digital-stamping/routes').then(m => m.routes)
      },
      {
        path: 'permohonan-surat-kemudahan',
        loadChildren: () =>
          import('./permohonan-surat-kemudahan/routes').then(m => m.routes)
      },
      {
        path: 'menu-pertanyaan',
        loadChildren: () =>
          import('./menu-pertanyaan/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-edaran-notis',
        loadChildren: () =>
          import('./pengurusan-edaran-notis/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-surat',
        loadChildren: () =>
          import('./pengurusan-surat/routes').then(m => m.routes)
      },
      {
        path: 'permehatian',
        loadChildren: () =>
          import('./permehatian/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-senarai-syak-1',
        loadChildren: () =>
          import('./pengurusan-senarai-syak-1/routes').then(m => m.routes)
      },
      {
        path: 'keputusan-permohonan-JKRIM',
        loadChildren: () =>
          import('./keputusan-permohonan-JKRIM/routes').then(m => m.routes)
      },
      {
        path: 'unik-id',
        loadChildren: () =>
          import('./unik-id/routes').then(m => m.routes)
      },
      {
        path: 'pengesahan-cap-jari',
        loadChildren: () =>
          import('./pengesahan-cap-jari/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-pengendalian-pengesahan',
        loadChildren: () =>
          import('./pengurusan-pengendalian-pengesahan/routes').then(m => m.routes)
      },
      {
        path: 'kebenaran-ke-baitulmaqdis',
        loadChildren: () =>
          import('./kebenaran-ke-baitulmaqdis/routes').then(m => m.routes)
      },
      {
        path: 'tolak-lucut-warganegara',
        loadChildren: () => import('./tolak-lucut-warganegara/routes').then(m => m.routes)
      },
            {
        path: 'menu-selenggara',
        loadChildren: () =>
          import('./menu-selenggara/routes').then(m => m.routes)
      },
      {
        path: 'kebenaran-masuk-israel',
        loadChildren: () =>
          import('./kebenaran-masuk-israel/routes').then(m => m.routes)
      }


    ]
  }
];

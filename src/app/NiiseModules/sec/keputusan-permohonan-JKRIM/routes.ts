import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tambah-subjek',
        loadChildren: () =>
          import('./tambah-subjek/maklumat-peribadi-subjek/routes').then((m) => m.routes),
      },
       {
        path: 'kemasukan-dokumen-hilang',
        loadChildren: () =>
          import('./kemasukan-dokumen-hilang/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-tindakan',
        loadChildren: () =>
          import('./tambah-subjek/maklumat-peribadi-subjek/maklumat-tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'keputusan-permohonan-jkrim',
        loadChildren: () =>
            import('./keputusan-permohonan-jkrim/routes').then((m) => m.routes),
      },
      {
        path: 'carian-subjek',
        loadChildren: () =>
            import('./carian-subjek/routes').then((m) => m.routes),
      },
      {
        path: 'papar-subjek',
        loadChildren: () =>
            import('./papar-subjek/routes').then((m) => m.routes),
      },
      {
        path: 'papar-maklumat-terperinci',
        loadChildren: () =>
            import('./papar-maklumat-terperinci/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./tambah-subjek/maklumat-peribadi-subjek/dokumen-sokongan/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'kemaskini',
        loadChildren: () =>
            import('./kemaskini-subjek/routes').then((m) => m.routes),
      },
      {
        path: 'pinda',
        loadChildren: () =>
            import('./carian-subjek/pinda-subjek/routes').then((m) => m.routes),
      },
      {
        path: 'tindakan',
        loadChildren: () =>
            import('./carian-subjek/pinda-subjek/tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen',
        loadChildren: () =>
            import('./carian-subjek/pinda-subjek/dokumen/routes').then((m) => m.routes),
      },
      {
        path: 'batal',
        loadChildren: () =>
            import('./carian-subjek/batal-subjek/routes').then((m) => m.routes),
      },
      {
        path: 'tindakan',
        loadChildren: () =>
            import('./carian-subjek/batal-subjek/tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen2',
        loadChildren: () =>
            import('./carian-subjek/batal-subjek/dokumen2/routes').then((m) => m.routes),
      },
    ]
  }
];





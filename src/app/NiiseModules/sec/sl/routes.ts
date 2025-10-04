import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tambah-sl',
        loadChildren: () =>
          import('./tambah-sl/maklumat-peribadi-sabjek/routes').then((m) => m.routes),
      },
      {
        path: 'kemasukan-dokumen-hilang',
        loadChildren: () =>
          import('./kemasukan-dokumen-hilang/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-tindakan',
        loadChildren: () =>
          import('./tambah-sl/maklumat-peribadi-sabjek/maklumat-tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'keputusan-permohonan-jkrim',
        loadChildren: () =>
            import('./keputusan-permohonan-jkrim/routes').then((m) => m.routes),
      },
      {
        path: 'carian-sl',
        loadChildren: () =>
            import('./carian-sl/routes').then((m) => m.routes),
      },
      {
        path: 'papar-sl',
        loadChildren: () =>
            import('./papar-sl/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen-sokonganSL',
        loadChildren: () =>
          import('./tambah-sl/maklumat-peribadi-sabjek/dokumen-sokonganSL/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'kemas-kini-sl',
        loadChildren: () =>
            import('./kemas-kini-sl/routes').then((m) => m.routes),
      },
      {
        path: 'pinda-sl',
        loadChildren: () =>
            import('./carian-sl/pinda-sl/routes').then((m) => m.routes),
      },
      {
        path: 'maklumattindakan',
        loadChildren: () =>
            import('./carian-sl/pinda-sl/maklumattindakan/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen',
        loadChildren: () =>
            import('./carian-sl/pinda-sl/dokumen/routes').then((m) => m.routes),
      },
      {
        path: 'batal-sl',
        loadChildren: () =>
            import('./carian-sl/batal-sl/routes').then((m) => m.routes),
      },
      {
        path: 'tindakan',
        loadChildren: () =>
            import('./carian-sl/batal-sl/tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen2',
        loadChildren: () =>
            import('./carian-sl/batal-sl/dokumen2/routes').then((m) => m.routes),
      },
    ]
  }
];





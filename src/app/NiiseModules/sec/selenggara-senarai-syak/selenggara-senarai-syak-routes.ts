import { Routes } from '@angular/router';

export const SELENGGARA_SENARAI_SYAK_ROUTES: Routes = [
  {
    path: 'carian-sl',
    loadChildren: () =>
      import('./carian-sl/carian-sl-routes')
        .then(m => m.CARIAN_SL_ROUTES),
  },
  {
    path: 'tambah-sl',
    loadChildren: () =>
      import('./tambah-sl/tambah-sl-routes')
        .then(m => m.TAMBAH_SL_ROUTES),
  },
  {
    path: 'kemasukan-dokumen-hilang',
    loadChildren: () =>
      import('./kemasukan-dokumen-hilang/kemasukan-dokumen-hilang-routes')
        .then(m => m.KEMASUKAN_DOKUMEN_HILANG_ROUTES),
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.
  {
    path: 'pengurusan-kad-kuasa/permohonan-kad-kuasa/carian-maklumat-kakitangan',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/routes').then((m) => m.routes),
  },

  //hantar-permohonan-kad-kuasa
  {
    path: 'hantar-permohonan-kad-kuasa/pendaftaran-kakitangan',
    loadChildren: () =>
      import('./hantar-permohonan-kad-kuasa/pendaftaran-kakitangan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'hantar-permohonan-kad-kuasa/maklumat-pemohonan',
    loadChildren: () =>
      import('./hantar-permohonan-kad-kuasa/maklumat-pemohonan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'hantar-permohonan-kad-kuasa/dokumen-sokongan',
    loadChildren: () =>
      import('./hantar-permohonan-kad-kuasa/dokumen-sokongan/routes').then(
        (m) => m.routes
      ),
  },
  //end hantar-permohonan-kad-kuasa
  //kemas-kini-kad-warta
  {
    path: 'kemas-kini-nombor-warta/maklumat-pemohonan',
    loadChildren: () =>
      import('./kemas-kini-nombor-warta/maklumat-pemohonan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'kemas-kini-nombor-warta/dokumen-sokongan',
    loadChildren: () =>
      import('./kemas-kini-nombor-warta/dokumen-sokongan/routes').then(
        (m) => m.routes
      ),
  },
  //end kemas-kini-kad-warta
  //pengambilan-flc
  {
    path: 'pengambilan-flc/maklumat-pemohonan',
    loadChildren: () =>
      import('./pengambilan-flc/maklumat-pemohonan/routes').then(
        (m) => m.routes
      ),
  },
  //end kemas-kini-kad-warta
  //Kemas Kini Nombor Siri Kad Kuasa
  {
    path: 'kemas-kini-nombor-siri-kad-kuasa/maklumat-pemohonan',
    loadChildren: () =>
      import(
        './kemas-kini-nombor-siri-kad-kuasa/maklumat-pemohonan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-nombor-siri-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa',
    loadChildren: () =>
      import(
        './kemas-kini-nombor-siri-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa/routes'
      ).then((m) => m.routes),
  },
  //End Kemas Kini Nombor Siri Kad Kuasa
  //permohonan-kad-kuasa
  {
    path: 'pengesahan-kad-kuasa',
    loadChildren: () =>
      import('./pengesahan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'luluskan-permohonan-kad-kuasa',
    loadChildren: () =>
      import('./luluskan-permohonan-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'jana-cetak-permohon-kad-kuasa',
    loadChildren: () =>
      import('./jana-cetak-permohon-kad-kuasa/routes').then((m) => m.routes),
  },

  //end permohonan-kad-kuasa
];

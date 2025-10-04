import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.
  {
    path: 'adm-dashboard',
    loadChildren: () => import('./adm-dashboard/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-kad-kuasa',
    loadChildren: () =>
      import('./pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'carian-maklumat-kakitangan',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/routes').then((m) => m.routes),
  },

  //Terima Laporan Siasatan
  {
    path: 'terima-laporan-siasatan/maklumat-laporan-siasatan',
    loadChildren: () =>
      import('./terima-laporan-siasatan/maklumat-laporan-siasatan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'terima-laporan-siasatan/pengesahan-laporan-siasatan',
    loadChildren: () =>
      import(
        './terima-laporan-siasatan/pengesahan-laporan-siasatan/routes'
      ).then((m) => m.routes),
  },
  //end Terima Laporan Siasatan

  //Kemas Kini Status Penggantungan Kad Kuasa
  {
    path: 'kemas-kini-status-penggantungan-kad-kuasa',
    loadChildren: () =>
      import('./kemas-kini-status-penggantungan-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  //end Kemas Kini Status Penggantungan Kad Kuasa

  //Kemas Kini Status Terima Kad Kuasa
  {
    path: 'kemas-kini-status-terima-kad-kuasa',
    loadChildren: () =>
      import('./kemas-kini-status-terima-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  //end Kemas Kini Status Terima Kad Kuasa

  //Batal Penggantungan Kad Kuasa
  {
    path: 'batal-penggantungan-kad-kuasa',
    loadChildren: () =>
      import('./batal-penggantungan-kad-kuasa/routes').then((m) => m.routes),
  },
  //end Batal Penggantungan Kad Kuasa
];

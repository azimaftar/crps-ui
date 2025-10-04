import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.
  {
    path: 'pengurusan-kad-kuasa',
    loadChildren: () =>
      import('./Masukkan-Laporan-Kehilangan-Kad-Kuasa/pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-kad-kuasa/kehilangan-kad-kuasa',
    loadChildren: () =>
      import('./Masukkan-Laporan-Kehilangan-Kad-Kuasa/kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'laporan-kehilangan-kad-kuasa',
    loadChildren: () =>
      import('./Masukkan-Laporan-Kehilangan-Kad-Kuasa/laporan-kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Sahkan-Laporan-Kehilangan-Kad-Kuasa/dashboard/routes').then((m) => m.routes),
  },

  {
    path: 'laporan-kehilangan-kad-kuasa-2',
    loadChildren: () =>
      import('./Sahkan-Laporan-Kehilangan-Kad-Kuasa/laporan-kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
    {
    path: 'kemaskini-laporan-siasatan',
    loadChildren: () =>
      import('./Kemaskini-Laporan-Siasatan-Kehilangan-Kad-Kuasa/kemaskini-laporan-siasatan/routes').then((m) => m.routes),
  },
    {
    path: 'pengurusan-kad-kuasa-3',
    loadChildren: () =>
      import('./Kemaskini-Laporan-Siasatan-Kehilangan-Kad-Kuasa/pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-kad-kuasa/kehilangan-kad-kuasa-3',
    loadChildren: () =>
      import('./Kemaskini-Laporan-Siasatan-Kehilangan-Kad-Kuasa/kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'laporan-kehilangan-kad-kuasa-3',
    loadChildren: () =>
      import('./Kemaskini-Laporan-Siasatan-Kehilangan-Kad-Kuasa/laporan-kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
    {
    path: 'pengurusan-kad-kuasa-4',
    loadChildren: () =>
      import('./Sahkan-Laporan-Siasatan-Kehilangan-Kad-Kuasa/pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-kad-kuasa/kehilangan-kad-kuasa-4',
    loadChildren: () =>
      import('./Sahkan-Laporan-Siasatan-Kehilangan-Kad-Kuasa/kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'laporan-kehilangan-kad-kuasa-4',
    loadChildren: () =>
      import('./Sahkan-Laporan-Siasatan-Kehilangan-Kad-Kuasa/laporan-kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
    {
    path: 'pengurusan-kad-kuasa-5',
    loadChildren: () =>
      import('./Luluskan-Laporan-Kehilangan-Kad-Kuasa/pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'pengurusan-kad-kuasa/kehilangan-kad-kuasa-5',
    loadChildren: () =>
      import('./Luluskan-Laporan-Kehilangan-Kad-Kuasa/kehilangan-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'laporan-kehilangan-kad-kuasa-5',
    loadChildren: () =>
      import('./Luluskan-Laporan-Kehilangan-Kad-Kuasa/laporan-kehilangan-kad-kuasa/routes').then((m) => m.routes),
  }
];

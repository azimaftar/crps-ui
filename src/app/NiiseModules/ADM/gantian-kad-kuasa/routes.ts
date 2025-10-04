import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.

  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/routes').then((m) => m.routes),
  },
  //Permohonan-gantian-kakitangan
  {
    path: 'permohonan-gantian-kad-kuasa/carian-maklumat-kakitangan',
    loadChildren: () =>
      import('./permohonan-gantian-kad-kuasa/carian-maklumat-kakitangan/routes').then((m) => m.routes),
  },
  {
    path: 'permohonan-gantian-kad-kuasa/dokumen-sokongan',
    loadChildren: () =>
      import('./permohonan-gantian-kad-kuasa/documen-sokongan/routes').then((m) => m.routes),
  },
  {
    path: 'permohonan-gantian-kad-kuasa/maklumat-permohonan-gantian',
    loadChildren: () =>
      import('./permohonan-gantian-kad-kuasa/maklumat-permohonan-gantian/routes').then((m) => m.routes),
  },
  //End Permohonan-gantian-kakitangan

  //sahkan-gantian-kad-kuasa-negeri

  {
    path: 'sahkan-gantian-kad-kuasa-negeri/pengesahan-gantian-kad-kuasa',
    loadChildren: () =>
      import('./sahkan-gantian-kad-kuasa-negeri/pengesahan-gantian-kad-kuasa/routes').then((m) => m.routes),
  },

  //sahkan-gantian-kad-kuasa-negeri

  //sahkan-permohonan-gantian-kad-kuasa
  {
    path: 'sahkan-permohonan-gantian/pengesahan-gantian-kad-kuasa',
    loadChildren: () =>
      import('./sahkan-permohonan-gantian/pengesahan-gantian-kad-kuasa/routes').then((m) => m.routes),
  },
  {
    path: 'sahkan-permohonan-gantian/maklumat-permohonan-untuk-kegunaan-pejabat',
    loadChildren: () =>
      import('./sahkan-permohonan-gantian/maklumat-permohonan-untuk-kegunaan-pejabat/routes').then((m) => m.routes),
  },
  //End sahkan-permohonan-gantian-kad-kuasa

  //lulukan-permohonan-gantian-kad-kuasa
    {
    path: 'luluskan-permohonan-gantian-kad-kuasa/kelulusan-oleh-pelulus',
    loadChildren: () =>
      import('./luluskan-permohonan-gantian-kad-kuasa/kelulusan-oleh-pelulus/routes').then((m) => m.routes),
  },
];

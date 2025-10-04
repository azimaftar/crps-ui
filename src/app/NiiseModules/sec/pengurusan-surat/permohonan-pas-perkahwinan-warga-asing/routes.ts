import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./permohonan-pas-perkahwinan-warga-asing.component').then(m => m.PermohonanPasPerkahwinanComponent),
      },
      {
        path: 'permohonan-baru',
        loadChildren: () => import('./permohonan-baru/routes').then(m => m.routes),
      },
      {
        path: 'carian-permohonan',
        loadChildren: () => import('./carian-permohonan/routes').then(m => m.routes),
      },
      {
        path: 'penerimaan-permohonan',
        loadChildren: () => import('./penerimaan-permohonan/routes').then(m => m.routes),
      },
      {
        path: 'pengesyoran-permohonan',
        loadChildren: () => import('./pengesyoran-permohonan/routes').then(m => m.routes),
      },
      { 
        path: 'kelulusan-permohonan',
        loadChildren: () => import('./kelulusan-permohonan/routes').then(m => m.routes),
      }
    ]
  }
  
  // {
  //   path: '',
  //   loadComponent: () => import('./permohonan-pas-perkahwinan-warga-asing.component').then(m => m.PermohonanPasPerkahwinanComponent),
  //   data: {
  //     title: `Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   } 
  // },
  // {
  //   path: 'permohonan-baru',
  //   loadChildren: () => import('./permohonan-baru/routes').then(m => m.routes),
  // },
  // // {
  // //   path: 'maklumat-pasangan',
  // //   loadChildren: () => import('./permohonan-baru/maklumat-pasangan/routes').then(m => m.routes),
  // // },
  // // {
  // //   path: 'dokumen-sokongan',
  // //   loadChildren: () => import('./permohonan-baru/dokumen-sokongan/routes').then(m => m.routes),
  // // },
  // {
  //   path: 'carian-permohonan',
  //   loadComponent: () => import('./carian-permohonan/carian-permohonan.component').then(m => m.CarianPermohonanComponents),
  //   data: {
  //     title: `Carian Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   }
  // },
  // {
  //   path: 'penerimaan-permohonan',
  //   loadComponent: () => import('./penerimaan-permohonan/penerimaan-permohonan.component').then(m => m.PenerimaanPermohonanComponents),
  //   data: {
  //     title: `Penerimaan Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   }
  // },
  // {
  //   path: 'pengesyoran-permohonan',
  //   loadComponent: () => import('./pengesyoran-permohonan/pengesyoran-permohonan.component').then(m => m.PengesyoranPermohonanComponents),
  //   data: {
  //     title: `Pengesyoran Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   }
  // },
  // {
  //   path:'kelulusan-permohonan',
  //   loadComponent: () => import('./kelulusan-permohonan/kelulusan-permohonan.component').then(m => m.KelulusanPermohonanComponents),
  //   data: {
  //     title: `Kelulusan Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   }
  // }
];

import { Routes } from "@angular/router";

export const cmnRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'selenggara-data-rujukan',
        loadChildren: () =>
          import('./selenggara-data-rujukan/routes').then(m => m.routes)
      },
      {
        path: 'selenggara-data-takwim',
        loadChildren: () =>
          import('./selenggara-data-takwim/routes').then(m => m.routes)
      },
      {
        path: 'selenggara-data-konfigurasi',
        loadChildren: () =>
          import('./selenggara-data-konfigurasi/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-tetapan-kaedah-aliran-kerja',  
        loadChildren: () =>
          import('./selenggara-tetapan-aliran-kerja/pengurusan-tetapan-kaedah-aliran-kerja/routes').then(m => m.routes)
      },
      {
        path: 'carian-kaedah-tetapan-aliran-kerja',
        loadChildren: () =>
          import('./selenggara-tetapan-aliran-kerja/carian-kaedah-tetapan-aliran-kerja/routes').then(m => m.routes)
      },
      {
        path: 'pengurusan-audit-trail',
        loadChildren: () =>
          import('./pengurusan-audit-trail/routes').then(m => m.routes)
      },
      
    ]
  }
];

export const msjRoutes: Routes = [
  {
    path: 'selenggara-mesej-notifikasi',
    loadChildren: () =>
      import('./selenggara-mesej-notifikasi/routes').then(m => m.routes)
  },
];

export const ptemplatRoutes: Routes = [

  {
    path: 'selenggara-templat-surat-borang-emel-memo',
    loadChildren: () =>
      import('./selenggara-templat-surat-borang-emel-memo/routes').then(m => m.routes)
  },
  
];
export const testNav2Routes: Routes = [
  {
    path:'pengurusan-audit-trail',
    loadChildren: () =>
      import('./pengurusan-audit-trail/routes').then(m => m.routes)
  },
];

/////
export const takwimRoutes: Routes = [


  {
    path: 'selenggara-data-takwim',
    loadChildren: () =>
      import('./selenggara-data-takwim2/routes').then(m => m.routes)
  },

];

/////
export const dashNavRoutes: Routes = [
  {
    path: 'dashboard-pengguna-dalaman',
    loadChildren: () =>
      import('./dashboard-pengguna-dalaman/routes').then(m => m.routes)
  },

];

export const dashNav2Routes: Routes = [
  {
    path: 'dashboard-pengguna-awam',
    loadChildren: () =>
      import('./dashboard-pengguna-awam/routes').then(m => m.routes)
  },
  {
    path: 'dashboard-pengguna-awam',
    loadChildren: () =>
      import('./dashboard-pengguna-awam/routes').then(m => m.routes)
  },
];

export const dashNav3Routes: Routes = [
  {
    path: 'dashboard-pengguna-agensi',
    loadChildren: () =>
      import('./dashboard-pengguna-agensi/routes').then(m => m.routes)
  },
];


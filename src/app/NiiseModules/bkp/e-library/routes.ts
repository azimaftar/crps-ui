import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./e-library.component').then(m => m.ELibraryComponent),
    data: {
      title: `E-Library`
    }
  },
  {
    path: 'folder-wujud',
    loadChildren: () => import('./folder-wujud/routes').then(m => m.routes),
    
  },
  {
    path: 'cipta-folder',
    loadChildren: () => import('./cipta-folder/routes').then(m => m.routes),
    
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/routes').then(m => m.routes),
    
  },
  {
    path: 'maklumat-carian',
    loadChildren: () => import('./maklumat-carian/routes').then(m => m.routes),
    
  },
  {
    path: 'semakan-kelulusan-ketua-unit',
    loadChildren: () => import('./semakan-kelulusan-ketua-unit/routes').then(m => m.routes),
    
  },
  {
    path: 'semakan-kelulusan-ketua-unit/kelulusan-status/:id',
    loadChildren: () => import('./semakan-kelulusan-ketua-unit/kelulusan-status/routes').then(m => m.routes),
    
  },
  {
    path: 'peranan-konfigurasi',
    loadChildren: () => import('./peranan-konfigurasi/routes').then(m => m.routes),
    
  },
  {
    path: 'view-dokumen/:id',
    loadChildren: () => import('./view-dokumen/routes').then(m => m.routes),
    
  },
  {
    path: 'maklumat-carian/kemaskini/:id',
    loadChildren: () => import('./maklumat-carian/kemaskini/routes').then(m => m.routes),
    
  },
  
];


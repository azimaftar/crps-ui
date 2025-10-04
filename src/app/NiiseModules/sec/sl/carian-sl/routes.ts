import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./carian-sl.component').then(m => m.CarianSlComponent),
    data: { title: 'Carian SL' },
    children: [
      {
        path: 'lupus-sl',
        loadComponent: () =>
          import('./lupus-sl/lupus-sl.component').then(
            m => m.LupusSlComponent
          ),
        data: { title: 'Lupus SL' }
      }
    ]
  }
];

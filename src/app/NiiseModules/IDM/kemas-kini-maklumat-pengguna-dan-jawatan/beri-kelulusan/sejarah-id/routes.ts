import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sejarah-id.component').then(m => m.SejarahIdComponent),
    data: {
      title: `sejarah-id`
    }
  }
];
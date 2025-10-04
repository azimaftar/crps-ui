import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cipta-folder.component').then(m => m.CiptaFolderComponent),
    data: {
      title: `E-Library`
    }
  }
];


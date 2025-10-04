import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./folder-wujud.component').then(m => m.FolderWujudComponent),
    data: {
      title: `Folder Wujud`
    }
  }
];


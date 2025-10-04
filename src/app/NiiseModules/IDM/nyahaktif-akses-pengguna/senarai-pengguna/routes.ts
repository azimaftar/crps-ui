import {Routes} from "@angular/router";

export const SenaraiPenggunaComponentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-pengguna.component').then(m => m.SenaraiPenggunaComponent),
    data: {
      title: `Senarai ID Pengguna`
    }
  }
];
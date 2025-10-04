import {Routes} from "@angular/router";

export const KelulusanComponentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan/kelulusan.component').then(m => m.KelulusanComponent),
    data: {
      title: `Paparan Maklumat Pegawai`
    }
  }
];
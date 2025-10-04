import {Routes} from "@angular/router";

export const NyahakftifComponentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./paparan/paparan.component').then(m => m.PaparanComponent),
    data: {
      title: `Paparan Maklumat Pegawai`
    }
  }
];
import {Routes} from "@angular/router";

export const PaparanRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./paparan.component').then(m => m.PaparanComponent),
    data: {
      title: `Maklumat-Profil-Pegawai`
    }
  }
];

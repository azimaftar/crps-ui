import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'luluskan-laporan-kehilangan',
    loadComponent: () =>
      import('./luluskan-laporan-kehilangan/luluskan-laporan-kehilangan.component').then(
        (m) => m.LuluskanLaporanKehilanganComponent
      )
  },
  {
    path: '',
    redirectTo: 'luluskan-laporan-kehilangan',
    pathMatch: 'full'
  }
];

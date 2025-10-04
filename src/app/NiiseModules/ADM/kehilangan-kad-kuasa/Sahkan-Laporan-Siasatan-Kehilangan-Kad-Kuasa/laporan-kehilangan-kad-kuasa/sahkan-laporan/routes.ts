import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'sahkan-laporan-kehilangan',
    loadComponent: () =>
      import('./sahkan-laporan-kehilangan/sahkan-laporan-kehilangan.component').then(
        (m) => m.SahkanLaporanKehilanganComponent
      )
  },
  {
    path: 'sahkan-laporan-siasatan',
    loadComponent: () =>
      import('./sahkan-laporan-siasatan/sahkan-laporan-siasatan.component').then(
        (m) => m.SahkanLaporanSiasatanComponent
      )
  },
  {
    path: '',
    redirectTo: 'sahkan-laporan-kehilangan',
    pathMatch: 'full'
  }
];

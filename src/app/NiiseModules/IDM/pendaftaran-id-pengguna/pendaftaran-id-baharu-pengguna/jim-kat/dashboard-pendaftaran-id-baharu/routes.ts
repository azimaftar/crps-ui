import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard-pendaftaran-id-baharu.component').then(
        (m) => m.DashboardPendaftaranIdBaharuComponent
      ),
    data: {
      title: `Dashboard Pendaftaran ID Baharu`,
    },
  },
];

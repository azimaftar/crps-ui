import { Routes } from '@angular/router';
import { ERosterComponent } from './e-roster.component';
export const routes = [
  {
    path: '',
    component: ERosterComponent,
  },
  {
    path: 'clock-in',
    loadComponent: () =>
      import('./aplikasi-geotime/clock-in/clock-in.component').then(
        (m) => m.ClockInComponent
      ),
    data: {
      title: `Aplikasi GeoTime`,
    },
  },
  {
    path: 'catatan-lewat',
    loadComponent: () =>
      import('./catatan-lewat/catatan-lewat.component').then(
        (m) => m.CatatanLewatComponent
      ),
    data: {
      title: `Catatan Lewat`,
    },
  },
  {
    path: 'pengesahan-kelewatan',
    loadChildren: () =>
      import('./pengesahan-kelewatan/routes').then(m => m.routes)
  },
  {
    path: 'permohonan-ot',
    loadChildren: () =>
      import('./permohonan-ot/routes').then(m => m.routes)
  },
  {
    path: 'pass-ot',
    loadChildren: () =>
      import('./pass-ot/routes').then(m => m.routes)
  },
   {
    path: 'clock-out-geo-time',
    loadChildren: () =>
      import('./clock-out-geo-time/routes').then(m => m.routes)
  },
  {
    path: 'jana-laporan',
    loadChildren: () =>
      import('./jana-laporan/routes').then(m => m.routes)
  }

];

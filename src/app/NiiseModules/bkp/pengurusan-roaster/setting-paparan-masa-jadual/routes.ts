import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./setting-paparan-masa-jadual.component').then(m => m.SettingPaparanMasaJadualComponent),
    data: {
      title: `Setting Paparan Masa Jadual`
    }
  },
  {
    path: 'jadual-roster',
    loadChildren: () =>
      import('./jadual-roster/routes').then((m) => m.routes),
  },
];


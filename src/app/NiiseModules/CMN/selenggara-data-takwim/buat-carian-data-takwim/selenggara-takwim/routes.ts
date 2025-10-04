import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./selenggara-takwim.component').then(
        (m) => m.SelenggaraTakwimComponent
      ),
    data: {
      title: `Selenggara Takwim`,
    },
  },
];
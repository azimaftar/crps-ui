import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carian-pemerhatian',
        loadChildren: () =>
            import('./carian-pemerhatian/routes').then((m) => m.routes),
      },

         {
        path: 'carian-kelulusan-kes',
        loadChildren: () =>
            import('./carian-kelulusan-kes/routes').then((m) => m.routes),
      },
    ]
  }
];





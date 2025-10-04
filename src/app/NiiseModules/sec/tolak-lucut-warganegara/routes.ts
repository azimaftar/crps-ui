import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carian-warganegara',
        loadChildren: () =>
          import('./carian-warganegara/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-sabjek',
        loadChildren: () =>
          import('./maklumat-sabjek/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-tindakan',
        loadChildren: () =>
          import('./maklumat-tindakan/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-peg-jpn',
        loadChildren: () =>
          import('./maklumat-peg-jpn/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./dokumen-sokongan/routes').then((m) => m.routes),
      },
      
    //  
    ]
  }
];





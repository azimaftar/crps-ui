import { Routes } from "@angular/router";

export const routes: Routes =[
    {
        path: '',
        children: [
          {
            path: 'kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa',
            loadChildren: () =>
              import('./kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/routes').then(
                (m) => m.routes
            )
          },
        ],
    },
    {
        path: '',
        children: [
          {
            path: 'sahkan-laporan-pemulangan-perampasan-kad-kuasa',
            loadChildren: () =>
              import('./sahkan-laporan-pemulangan-perampasan-kad-kuasa/routes').then(
                (m) => m.routes
            )
          },
        ],
    },
    {
        path: '',
        children: [
          {
            path: 'jana-dan-cetak-pemulangan-kad-kuasa',
            loadChildren: () =>
              import('./jana-dan-cetak-pemulangan-kad-kuasa/routes').then(
                (m) => m.routes
            )
          },
        ],
    },
    {
        path: '',
        children: [
          {
            path: 'kemas-kini-status-pemulangan-perampasan-kad-kuasa',
            loadChildren: () =>
              import('./kemas-kini-status-pemulangan-perampasan-kad-kuasa/routes').then(
                (m) => m.routes
            )
          },
        ],
    }
]
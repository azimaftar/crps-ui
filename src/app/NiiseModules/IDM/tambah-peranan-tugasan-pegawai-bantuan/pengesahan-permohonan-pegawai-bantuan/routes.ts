import {Routes} from "@angular/router";

export const PengesahanPermohonanPegawaiBantuanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'permohonan-pegawai-bantuan',
        loadChildren: () =>
          import('./permohonan-pegawai-bantuan/routes').then(m => m.routes)
      }
    ]
  }
];

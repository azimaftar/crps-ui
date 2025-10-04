import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengurusan-pemeriksaan-arahan',
        loadComponent: () =>
          import('./pengurusan-pemeriksaan-arahan/pengurusan-pemeriksaan-arahan.component')
            .then((m) => m.PengurusanPemeriksaanArahanComponent)
      },
    ]
  }
];





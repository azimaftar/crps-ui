import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'imbasan-ntl',
        loadComponent: () =>
          import('./imbasan-ntl/imbasan-ntl.component')
            .then((m) => m.ImbasanNtlComponent)
      },
      {
        path: 'kategori-ntl',
        loadComponent: () =>
          import('./kategori-ntl/kategori-ntl.component')
            .then((m) => m.KategoriNtlComponent)
      },
      {
        path: 'passport-ntl',
        loadComponent: () =>
          import('./passport-ntl/passport-ntl.component')
            .then((m) => m.PassportNtlComponent)
      },
      {
        path: 'rayuan-ntl',
        loadComponent: () =>
          import('./rayuan-ntl/rayuan-ntl.component')
            .then((m) => m.RayuanNtlComponent)
      },
      {
        path: 'rayuan-ntl-form',
        loadComponent: () =>
          import('./rayuan-ntl-form/rayuan-ntl-form.component')
            .then((m) => m.RayuanNtlFormComponent)
      },
      {
        path: 'semakan-keputusan-ntl',
        loadComponent: () =>
          import('./semakan-keputusan-ntl/semakan-keputusan-ntl.component')
            .then((m) => m.SemakanKeputusanNtlComponent)
      },
      {
        path: 'detail-pengembara-ntl',
        loadComponent: () =>
          import('./detail-pengembara-ntl/detail-pengembara-ntl.component')
            .then((m) => m.DetailPengembaraNtlComponent)
      },
      {
        path: 'papar-dokumen-ntl',
        loadComponent: () =>
          import('./papar-dokumen-ntl/papar-dokumen-ntl.component')
            .then((m) => m.PaparDokumenNtlComponent)
      },
    ]
  }
];


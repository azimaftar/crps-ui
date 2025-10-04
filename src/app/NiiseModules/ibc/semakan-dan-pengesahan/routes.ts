import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'semakan-dan-pengesahan-kemasukan-kelompok',
            loadComponent: () =>
            import('./semakan-dan-pengesahan-kemasukan-kelompok/semakan-dan-pengesahan-kemasukan-kelompok.component')
                .then((m) => m.SemakanDanPengesahanKemasukanKelompokComponent)
        },
        {
            path: 'pengurusan-pendaftaran-kawalan',
            loadComponent: () =>
                import('./pengurusan-pendaftaran-kawalan/pengurusan-pendaftaran-kawalan.component')
                    .then((m) => m.PengurusanPendaftaranKawalanComponent)
        },
        {
            path: 'maklumat-ahli',
            loadComponent: () =>
                import('./maklumat-ahli/maklumat-ahli.component')
                    .then((m) => m.MaklumatAhliComponent)
        },
        {
            path: 'senarai-semakan',
            loadComponent: () =>
                import('./senarai-semakan/senarai-semakan.component')
                    .then((m) => m.SenaraiSemakanComponent)
        },
        {
            path: 'maklumat-perjalanan',
            loadComponent: () =>
                import('./maklumat-perjalanan/maklumat-perjalanan.component')
                    .then((m) => m.MaklumatPerjalananComponent)
        }
]
  }
];
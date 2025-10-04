import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
     {
        path: 'pengisian-kemasukan-kelompok',
        loadComponent: () =>    
            import('./pengisian-kemasukan-kelompok/pengisian-kemasukan-kelompok.component')
                .then((m) => m.PengisianKemasukanKelompokComponent)
     },
     {
        path: 'pengurusan-pendaftaran-kawalan',
        loadComponent: () =>    
            import('./pengurusan-pendaftaran-kawalan/pengurusan-pendaftaran-kawalan.component')
                .then((m) => m.PengurusanPendaftaranKawalanComponent)
     },
     {
        path: 'maklumat-perjalanan-dan-ketua-pemohon',
        loadComponent: () =>    
            import('./maklumat-perjalanan-dan-ketua-pemohon/maklumat-perjalanan-dan-ketua-pemohon.component')
                .then((m) => m.MaklumatPerjalananDanKetuaPemohonComponent)
     },
     {
        path: 'maklumat-ahli',
        loadComponent: () =>    
            import('./maklumat-ahli/maklumat-ahli.component')
                .then((m) => m.MaklumatAhliComponent)
     },
    ]
  }
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.
  {
    path: 'pendaftaran-kakitangan',
    loadChildren: () =>
      import('./pendaftaran-kakitangan/routes').then((m) => m.routes),
  },
  {
    path: 'adm-dashboard',
    loadChildren: () => import('./adm-dashboard/routes').then((m) => m.routes),
  },

  {
    path: 'adm-dashboard-v2',
    loadChildren: () =>
      import('./adm-dashboard-v2/routes').then((m) => m.routes),
  },

  //Carian Maklumat
  {
    path: 'carian-maklumat-kakitangan/maklumat-peribadi',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-peribadi/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    loadChildren: () =>
      import(
        './carian-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-penempatan',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-penempatan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-akademik',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-akademik/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-penguasaan-bahasa',
    loadChildren: () =>
      import(
        './carian-maklumat-kakitangan/maklumat-penguasaan-bahasa/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-pasport',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-pasport/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-anugerah',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-anugerah/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-akaun-bank',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-akaun-bank/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-kegiatan-luar',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-kegiatan-luar/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-harta',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-harta/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-keluarga',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-keluarga/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-vaksin',
    loadChildren: () =>
      import('./carian-maklumat-kakitangan/maklumat-vaksin/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'carian-maklumat-kakitangan/maklumat-pakaian-seragam',
    loadChildren: () =>
      import(
        './carian-maklumat-kakitangan/maklumat-pakaian-seragam/routes'
      ).then((m) => m.routes),
  },
  //End Carian Maklumat
  //Masukkan Rekod Maklumat (KAT)
  {
    path: 'masukkan-rekod-maklumat-kat/pengurusan-kakitangan',
    loadChildren: () =>
      import(
        './masukkan-rekod-maklumat-kat-/pengurusan-kakitangan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/dokumen-sokongan',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/dokumen-sokongan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-peribadi',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-peribadi/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-perkhidmatan-dan-perjawatan',
    loadChildren: () =>
      import(
        './masukkan-rekod-maklumat-kat-/maklumat-perkhidmatan-dan-penjawatan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/masukkan-sejarah-pekerjaan',
    loadChildren: () =>
      import(
        './masukkan-rekod-maklumat-kat-/masukkan-sejarah-pekerjaan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-penempatan',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-penempatan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-akedemik',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-akedemik/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-penguasaan-bahasa',
    loadChildren: () =>
      import(
        './masukkan-rekod-maklumat-kat-/maklumat-penguasaan-bahasa/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-passport',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-passport/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-anugerah',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-anugerah/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-akaun-bank',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-akaun-bank/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-kegiatan-luar',
    loadChildren: () =>
      import(
        './masukkan-rekod-maklumat-kat-/maklumat-kegiatan-luar/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-harta',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-harta/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-ibu-bapa',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-ibu-bapa/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-pasangan',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-pasangan/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'masukkan-rekod-maklumat-kat/maklumat-tanggungan',
    loadChildren: () =>
      import('./masukkan-rekod-maklumat-kat-/maklumat-tanggungan/routes').then(
        (m) => m.routes
      ),
  },
  //End Masukkan Rekod Maklumat (KAT)
  //Tandatangan Digital
  {
    path: 'buat-tandatangan-digital/tandatangan-digital',
    loadChildren: () =>
      import('./buat-tandatangan-digital/tandatangan-digital/routes').then(
        (m) => m.routes
      ),
  },
  //End Tandatangan Digital
  //Pengambilan Biometrik
  {
    path: 'pengambilan-biometrik',
    loadChildren: () =>
      import('./pengambilan-biometrik/routes').then((m) => m.routes),
  },
  //End Pengambilan Biometrik
  //Sahkan Pendaftaran Kakitangan
  {
    path: 'sahkan-pendaftaran-kakitangan/adm-dashboard',
    loadChildren: () =>
      import('./sahkan-pendaftaran-kakitangan/adm-dashboard/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'sahkan-pendaftaran-kakitangan/sahkan-pendaftaran-kakitangan',
    loadChildren: () =>
      import('./sahkan-pendaftaran-kakitangan/routes').then((m) => m.routes),
  },
  //End Sahkan Pendaftaran Kakitangan
  //Luluskan Pendaftaran Kakitangan
  {
    path: 'luluskan-pendaftaran-kakitangan',
    loadChildren: () =>
      import('./luluskan-pendaftaran-kakitangan/routes').then((m) => m.routes),
  },
  //End Luluskan Pendaftaran Kakitangan
  //Jana Nombor Perkhidmatan
  {
    path: 'jana-nombor-perkhidmatan',
    loadChildren: () =>
      import('./jana-nombor-perkhidmatan/routes').then((m) => m.routes),
  },
  //End Jana Nombor Perkhidmatan
  //Kemas Kini Maklumat Profile Kakitangan
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-akademik',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-akademik/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-penguasaan-bahasa',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-penguasaan-bahasa/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-pasport',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-pasport/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-anugerah',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-anugerah/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-akaun-bank',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-akaun-bank/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-kegiatan-luar',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-kegiatan-luar/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-harta',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-harta/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/dokumen-sokongan',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/dokumen-sokongan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/maklumat-pakaian-seragam',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/maklumat-pakaian-seragam/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/tandatangan-digital',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/tandatangan-digital/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-profile-kakitangan/pengambilan-biometrik',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-profile-kakitangan/pengambilan-biometrik/routes'
      ).then((m) => m.routes),
  },
  //End Kemas Kini Maklumat Profil Kakitangan
  //Kemas Kini Maklumat Kakitangan (Perkhidmatan/ Perjawatan/ Penempatan)
  {
    path: 'kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemas-kini-maklumat-kakitangan/maklumat-penempatan',
    loadChildren: () =>
      import(
        './kemas-kini-maklumat-kakitangan/maklumat-penempatan/routes'
      ).then((m) => m.routes),
  },
  //End Kemas Kini Maklumat Kakitangan (Perkhidmatan/ Perjawatan/ Penempatan)
  // Carian Dan Paparkan Maklumat Cuti
  {
    path: 'carian-dan-paparan-maklumat-cuti/pengurusan-kakitangan',
    loadChildren: () =>
      import(
        './carian-dan-paparan-maklumat-cuti/pengurusan-kakitangan/routes'
      ).then((m) => m.routes),
  },

  {
    path: 'carian-dan-paparan-maklumat-cuti/carian-maklumat-cuti',
    loadChildren: () =>
      import(
        './carian-dan-paparan-maklumat-cuti/carian-maklumat-cuti/routes'
      ).then((m) => m.routes),
  },

  {
    path: 'carian-dan-paparan-maklumat-cuti/pengurusan-kakitangan',
    loadChildren: () =>
      import(
        './carian-dan-paparan-maklumat-cuti/pengurusan-kakitangan/routes'
      ).then((m) => m.routes),
  },

  {
    path: 'carian-dan-paparan-maklumat-cuti/maklumat-cuti-semasa',
    loadChildren: () =>
      import(
        './carian-dan-paparan-maklumat-cuti/maklumat-cuti-semasa/routes'
      ).then((m) => m.routes),
  },

  {
    path: 'carian-dan-paparan-maklumat-cuti/sejarah-cuti',
    loadChildren: () =>
      import('./carian-dan-paparan-maklumat-cuti/sejarah-cuti/routes').then(
        (m) => m.routes
      ),
  },
  //End Carian Dan Paparkan Maklumat Cuti
  //Kemas Kini Maklumat waran
  {
    path: 'kemaskini-maklumat-waran/maklumat-waran-penjawatan',
    loadChildren: () =>
      import(
        './kemaskini-maklumat-waran/maklumat-waran-penjawatan/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'kemaskini-maklumat-waran/daftar-maklumat-waran-penjawatan',
    loadChildren: () =>
      import(
        './kemaskini-maklumat-waran/daftar-maklumat-waran-penjawatan/routes'
      ).then((m) => m.routes),
  },
  //End Kemas Kini Maklumat waran
  //Sahkan Maklumat Kakitangan
  {
    path: 'sahkan-maklumat-kakitangan/adm-dashboard',
    loadChildren: () =>
      import('./sahkan-maklumat-kakitangan/adm-dashboard/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'sahkan-maklumat-kakitangan/sahkan-maklumat-kakitangan',
    loadChildren: () =>
      import('./sahkan-maklumat-kakitangan/routes').then((m) => m.routes),
  },
  //End Sahkan Maklumat Kakitangan
];

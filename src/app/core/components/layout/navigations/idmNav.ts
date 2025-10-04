import { INavData } from '@coreui/angular';

export const idmNav: INavData = {
  name: 'Pengurusan ID',
  url: '/IDM',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'Notifikasi',
      url: '/IDM/shared/terima-notifikasi-di-menu-notifikasi',
      iconComponent: { name: 'cil-telegram' }
    },
    {
      name: 'Laman Utama',
      url: '/IDM/shared/laman-utama',
      iconComponent: { name: 'cil-telegram' }
    },
    {
      name: 'Senarai Permohonan ID',
      url: '/IDM/shared/senarai-permohonan-id',
      iconComponent: { name: 'cil-telegram' }
    },
    {
      name: 'Pendaftaran ID Pengguna',
      iconComponent: { name: 'cil-user' },
      children: [
        {
          name: 'Wujud ID Pengguna',
          url: '/IDM/pendaftaran-id-pengguna/baharu/maklumat-profil-pegawai',
        },
   /*     {
          name: 'Pemulangan ID Pengguna',
          url: '/IDM/pendaftaran-id-pengguna/pemulangan-permohonan-id/maklumat-profil-pegawai',
        },
        {
          name: 'Permohonan Semula ID Pengguna',
          url: '/IDM/pendaftaran-id-pengguna/permohonan-semula-id/maklumat-profil-pegawai',
        },
        {
          name: 'Pertukaran Cawangan/Unit',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/pemulangan-tambah-peranan-tugasan/permohonan-tambah-peranan',
        }, */
        {
          name: 'Lulus ID Pengguna',
          url: '/IDM/pendaftaran-id-pengguna/kelulusan-permohonan-id/maklumat-profil-pegawai',
        },
        {
          name: 'Sokong ID Pengguna',
          url: '/IDM/pendaftaran-id-pengguna/sokongan-permohonan-id/maklumat-profil-pegawai',
        }
      ]
    },
    {
      name: 'Kemaskini Maklumat Pengguna',  
      iconComponent: { name: 'cil-user' },
      children: [
        {
          name: 'Pengesahan Kemaskini ID',
          url: '/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/terima-notifikasi-pertukaran-cawangan/maklumat-pertukaran-cawangan',
        },
/*      {
          name: 'Pengesahan Kemaskini ID',
          url: '/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/pengesahan-permohonan/maklumat-pertukaran-cawangan',
        },
        {
          name: 'Pengesahan Kemaskini ID',
          url: '/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/penetapan-peranan-dan-tugasan-baharu/maklumat-pertukaran-cawangan',
        },  */
        {
          name: 'Kelulusan Kemaskini ID',
          url: '/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/beri-kelulusan/maklumat-pertukaran-cawangan',
        },
      ]
    },
    {
      name: 'Agih Peranan dan Tugasan',
      iconComponent: { name: 'cil-list-rich' },
      children: [
     /*   {
          name: 'Permohonan Tambah Peranan Tugasan',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/permohonan-tambah-peranan-tugasan/maklumat-profil-pegawai',
        },  */
        {
          name: 'Pengesahan Agihan Tugasan',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/pengesahan-tambah-peranan-tugasan/permohonan-tambah-peranan',
        },
     /*   {
          name: 'Pengesahan Agihan Tugasan',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/penetapan-peranan-tugasan/permohonan-tambah-peranan',
        },  */
        {
          name: 'Kelulusan Agihan Tugasan',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/kelulusan-tambah-peranan-tugasan/permohonan-tambah-peranan',
        },
  /*      {
          name: 'Permohonan Tidak Lengkap',
          url: '/IDM/tambah-peranan-tugasan-id-pengguna/permohonan-tidak-lengkap/permohonan-tambah-peranan',
        },  */
      ]
    },
    {
      name: 'Agih Peranan dan Tugasan (Pegawai Bantuan)',
      iconComponent: { name: 'cil-list-rich' },
      children: [
        {
          name: 'Pilih Senarai Pegawai Bantuan',
          url: '/IDM/tambah-peranan-tugasan-pegawai-bantuan/pilih-senarai-nama-pegawai-bantuan/permohonan-pegawai-bantuan',
        },
        {
          name: 'Pengesahan Pegawai Bantuan',
          url: '/IDM/tambah-peranan-tugasan-pegawai-bantuan/pengesahan-permohonan-pegawai-bantuan/permohonan-pegawai-bantuan',
        },
/*        {
          name: 'Pengesahan Pegawai Bantuan',
          url: '/IDM/tambah-peranan-tugasan-pegawai-bantuan/tambah-cawangan-tugasan-baru/maklumat-profil-pegawai',
        },    */
        {
          name: 'Kelulusan Pegawai Bantuan',
          url: '/IDM/tambah-peranan-tugasan-pegawai-bantuan/kelulusan-permohonan-pegawai-bantuan/permohonan-pegawai-bantuan',
        },
/*      {
          name: 'Kelulusan Pegawai Bantuan',
          url: '/IDM/tambah-peranan-tugasan-pegawai-bantuan/lulus-tambah-cawangan-tugasan-baru/permohonan-pegawai-bantuan',
        },  */
      ]
    },
    {
      name: 'Permohonan Lanjutan Masa',
      iconComponent: { name: 'cil-list-rich' },
      children: [
        {
          name: 'Pilih Senarai Lanjutan Masa',
          url: '/IDM/agihan-peranan-tugasan/lanjutan-masa-operasi/permohonan-lanjutan-masa-operasi',
        },
        {
          name: 'Pengesahan Lanjutan Masa',
          url: '/IDM/agihan-peranan-tugasan/lanjutan-masa-operasi/pengesahan-permohonan-lanjutan-masa-operasi',
        },
        {
          name: 'Kelulusan Lanjutan Masa',
          url: '/IDM/agihan-peranan-tugasan/lanjutan-masa-operasi/kelulusan-permohonan-lanjutan-masa-operasi',
        }
      ]
    },
    {
      name: 'Pembatalan Akses Pengguna',
      iconComponent: { name: 'cil-list-rich' },
      children: [
        {
          name: 'Pengesahan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/terima-notifikasi-pembatalan-akses-pengguna/maklumat-profil-pegawai',
        },
  /*      {
          name: 'Pengesahan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/terima-permohonan/pengesahan-permohonan-pembatalan',
        },
        {
          name: 'Pengesahan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/senarai-id-pengguna/senarai-id-pengguna',
        },
        {
          name: 'Pengesahan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/carian-id-pengguna/senarai-id-pengguna',
        },
        {
          name: 'Pengesahan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/pembatalan-akses-pengguna/maklumat-profil-pegawai',
        },    */
        {
          name: 'Kelulusan Pembatalan Akses',
          url: '/IDM/pembatalan-akses-pengguna/kelulusan-batal-akses-pengguna/kelulusan-permohonan-pembatalan',
        }
      ]
    },
    {
      name: 'Nyahaktif Akses Pengguna',
      iconComponent: { name: 'cil-list-rich' },
      children: [
        {
          name: 'Pengesahan Nyahaktif Akses',
          url: '/IDM/nyahaktif-akses-pengguna/terima-notifikasi-permohonan',
        },
 /*     {
          name: 'Pengesahan Nyahaktif Akses',
          url: '/IDM/nyahaktif-akses-pengguna/terima-permohonan',
        },
        {
          name: 'Pengesahan Nyahaktif Akses',
          url: '/IDM/nyahaktif-akses-pengguna/senarai-pengguna',
        },
        {
          name: 'Pengesahan Nyahaktif Akses',
          url: '/IDM/nyahaktif-akses-pengguna/nyahaktif',
        },     */
        {
          name: 'Kelulusan Nyahaktif Akses',
          url: '/IDM/nyahaktif-akses-pengguna/kelulusan-nyahaktif',
        }
      ]
    },
    {
      name: 'Pertanyaan',
      url: '/IDM/shared/pertanyaan-carian',
      iconComponent: { name: 'cil-paper-plane'},
      attributes: { class: 'fw-semibold' } 
    },
/*    {
      name: 'Pendaftaran ID Pentadbir Utama',
      iconComponent: { name: 'cil-list-rich' },
      children: [
        {
          name: 'Daftar Masuk ID Pengguna',
          url: '/IDM/pendaftaran-id-pentadbir-utama/daftar-id-pengguna-kata-laluan/maklumat-profil-pegawai',
        },
        {
          name: 'Pendaftaran ID Pentadbir Utama',
          url: '/IDM/pendaftaran-id-pentadbir-utama/pendaftaran-id-pentadbir-utama/maklumat-profil-pegawai',
        },
        {
          name: 'Pengaktifan Pentadbir Utama',
          url: '/IDM/pendaftaran-id-pentadbir-utama/pengaktifan-pentadbir-utama/maklumat-profil-pegawai',
        },
        {
          name: 'Notifikasi',
          url: '/IDM/pendaftaran-id-pentadbir-utama/daftar-id-pengguna-kata-laluan/notifikasi',
        }
      ]
    },   */
  ],
};

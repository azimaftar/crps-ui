import { INavData } from '@coreui/angular';

export const admNav: INavData = {
  name: 'ADM',
  url: '',
  iconComponent: { name: 'cil-speedometer' },
  badge: {
    color: 'warning',
    text: '',
  },
  children: [
    {
      name: 'PENGURUSAN KAKITANGAN',
      url: '/adm/pengurusan-kakitangan',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'PENGURUSAN KAD KUASA',
      url: '/adm/pengurusan-kad-kuasa',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'PENGURUSAN PEJABAT',
      url: '/adm/pengurusan-pejabat',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'PENGURUSAN E-OCCURENCE',
      url: '/adm/pengurusan-e-occurence',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'PENGURUSAN KEPUASAN PELANGGAN',
      url: '/adm/pengurusan-kepuasan-pelanggan',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'E-REPORTING (LAPORAN OPERASI)',
      url: '/adm/e-reporting',
      iconComponent: { name: 'cil-bell' },
    },
    {
      name: 'PENDAFTARAN KAKITANGAN',
      url: '/ADM/pendaftaran-kakitangan',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Sahkan Pendaftaran Kakitangan',
          url: '/adm/pendaftaran-kakitangan/sahkan-pendaftaran-kakitangan/adm-dashboard',
          iconComponent: { name: 'cil-bell' },
        },
        {
          name: 'Luluskan Pendaftaran Kakitangan',
          url: '/adm/pendaftaran-kakitangan/luluskan-pendaftaran-kakitangan',
          iconComponent: { name: 'cil-bell' },
        },
        {
          name: 'Jana Nombor Perkhidmatan',
          url: '/adm/pendaftaran-kakitangan/jana-nombor-perkhidmatan',
          iconComponent: { name: 'cil-bell' },
        },
        {
          name: 'Kemas Kini Maklumat Kakitangan',
          url: '/adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
          iconComponent: { name: 'cil-bell' },
        },
        {
          name: 'Sahkan Maklumat Kakitangan',
          url: '/adm/pendaftaran-kakitangan/sahkan-maklumat-kakitangan/sahkan-maklumat-kakitangan',
          iconComponent: { name: 'cil-bell' },
        },
      ],
    },
    {
      name: 'PERMOHONAN KAD KUASA',
      url: '/ADM/permohonan-kad-kuasa',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Kemas Kini Nombor Warta',
          url: '/ADM/permohonan-kad-kuasa/kemas-kini-nombor-warta',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Maklumat Pemohonan',
              url: '/adm/permohonan-kad-kuasa/kemas-kini-nombor-warta/maklumat-pemohonan',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Dokumen Sokongan',
              url: '/adm/permohonan-kad-kuasa/kemas-kini-nombor-warta/dokumen-sokongan',
              iconComponent: { name: 'cil-bell' },
            },
          ],
        },
        {
          name: 'Kemas Kini Nombor Siri Kad Kuasa',
          url: '/ADM/permohonan-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Maklumat Pemohon Kemas Kini Nombor Siri Kad Kuasa',
              url: '/adm/permohonan-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa/maklumat-pemohonan',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Kemas Kini Nombor Siri Kad Kuasa',
              url: '/adm/permohonan-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa/kemas-kini-nombor-siri-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
          ],
        },
        {
          name: 'Luluskan Permohonan Kad Kuasa',
          url: '/ADM/permohonan-kad-kuasa/luluskan-permohonan-kad-kuasa',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Pengambilan FLC',
              url: '/adm/permohonan-kad-kuasa/pengambilan-flc/maklumat-pemohonan',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Jana Dan Cetak Senarai Pemohon Kad Kuasa',
              url: '/adm/permohonan-kad-kuasa/jana-cetak-permohon-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
          ],
        },
      ],
    },
    {
      name: 'KEHILANGAN KAD KUASA',
      url: '/ADM/kehilangan-kad-kuasa',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Dashboard',
          url: '/adm/kehilangan-kad-kuasa/dashboard',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Pengurusan Kad Kuasa',
          url: '/adm/kehilangan-kad-kuasa/pengurusan-kad-kuasa',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Pelupusan Kad Kuasa',
          url: '/ADM/pelupusan-kad-kuasa',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Laman Utama Pengurusan Kad Kuasa',
              url: '/adm/pelupusan-kad-kuasa/laman-utama-pengurusan-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
          ],
        },
        {
          name: 'Pemulangan/ Perampasan Kad Kuasa',
          url: '/ADM/pemulangan-perampasan-kad-kuasa',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Kemas Kini Maklumat Arahan Pemulangan/ Perampasan Kad Kuasa',
              url: '/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Sahkan Laporan Pemulangan/ Perampasan Kad Kuasa',
              url: '/adm/pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Jana dan Cetak Pemulangan Kad Kuasa',
              url: '/adm/pemulangan-perampasan-kad-kuasa/jana-dan-cetak-pemulangan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
            {
              name: 'Kemas Kini Status Pemulangan/ Perampasan Kad Kuasa',
              url: '/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-status-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa',
              iconComponent: { name: 'cil-bell' },
            },
          ],
        },
        {
          name: 'Kehilangan Kad Kuasa',
          url: '/adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa/maklumat-permohonan',
          iconComponent: { name: 'cil-pencil' },
        },
      ],
    },
    {
      name: 'PENDAFTARAN PEJABAT',
      url: '/ADM/pendaftaran-pejabat',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Pendaftaran Pejabat',
          url: '/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Carian Maklumat Pejabat',
              url: '/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/carian-maklumat-pejabat',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Daftar Maklumat Pejabat',
              url: '/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-pejabat',
              iconComponent: { name: 'cil-pencil' },
            },
          ],
        },
      ],
    },
    {
      name: 'PENGURUSAN e-OCCURENCE',
      url: '/ADM/pengurusan-e-occurence',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Pengurusan e-Occurence',
          url: '/ADM/pengurusan-e-occurence',
          iconComponent: { name: 'cil-pencil' },
          children: [
            {
              name: 'Laman Utama',
              url: '/adm/pengurusan-e-occurence',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Kemasukan Data Tetapan Kejadian',
              url: '/adm/pengurusan-e-occurence/kemasukan-data-tetapan-kejadian/carian-tetapan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Sahkan Kemasukan Data',
              url: '/adm/pengurusan-e-occurence/sahkan-kemasukan-data/carian-tetapan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Daftar/ Kemas-kini Laporan Kejadian',
              url: '/adm/pengurusan-e-occurence/daftar-kemas-kini-laporan-kejadian/carian-laporan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Sahkan Laporan Kejadian',
              url: '/adm/pengurusan-e-occurence/sahkan-laporan-kejadian/carian-laporan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Luluskan Laporan Kejadian',
              url: '/adm/pengurusan-e-occurence/luluskan-laporan-kejadian/carian-laporan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
            {
              name: 'Buat Penilaian Kemas-kini Tahap Kejadian',
              url: '/adm/pengurusan-e-occurence/buat-penilaian-kemas-kini-tahap-kejadian/carian-laporan-kejadian',
              iconComponent: { name: 'cil-pencil' },
            },
          ],
        },
      ],
    },
  ],
};

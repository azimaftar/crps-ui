import { INavData } from '@coreui/angular';

export const bkpNav: INavData = {
  name: 'Bahagian Perkhidmatan',
  url: '/bkp',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'e-Library',
      url: '/bkp/e-library',
      iconComponent: { name: 'cil-globe-alt' },
      children: [
        {
          name: 'Maklumat Carian Dokumen',
          url: '/bkp/e-library/maklumat-carian',
          iconComponent: { name: 'cil-map' },
        },
        //  {
        //   name: 'Muat Naik/Cipta Folder',
        //   url: '/bkp/e-library',
        //   iconComponent: { name: 'cil-map' }
        // },
        {
          name: 'Semakan dan Kelulusan Ketua Unit',
          url: '/bkp/e-library/semakan-kelulusan-ketua-unit',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Setkan Peranan Konfigurasi',
          url: '/bkp/e-library/peranan-konfigurasi',
          iconComponent: { name: 'cil-map' },
        },
      ],
    },
      {
        name: 'e-Reporting',
        url: '/bkp/e-reporting',
        iconComponent: { name: 'cil-notes' },
        children: [
          {
            name: 'Jana Laporan Carian',
            url: '/bkp/e-reporting/jana-laporan-carian',
            iconComponent: { name: 'cil-list' }
          },
          {
            name: 'Jana Vaksin',
            url: '/bkp/e-reporting/vacc-report',
            iconComponent: { name: 'cil-list' }
          }
        ]
    },
    {
      name: 'Pengurusan Roster',
      url: '/bkp/pengurusan-roaster',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Daftar Jadual Giliran Kumpulan dan Masa Tugas',
          url: '/bkp/pengurusan-roaster/dftar-jadual/maklumat-carian',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Daftar Pengagihan Lokasi Bertugas',
          url: '/bkp/pengurusan-roaster/pengagihan-lokasi-bertugas/maklumat-carian-lokasi-tugas',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Kelulusan Jadual Tugas',
          url: '/bkp/pengurusan-roaster/Kelulusan-Jadual-Tugas',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Terima Jadual Giliran Bertugas',
          url: '/bkp/pengurusan-roaster/terima-jadual-giliran-bertugas',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Penjanaan Surat Pertukaran',
          url: '/bkp/pengurusan-roaster/penjanaan-surat-pertukaran/maklumat-carian',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Setting Paparan Masa Jadual',
          url: '/bkp/pengurusan-roaster/setting-paparan-masa-jadual',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Konfigurasi Nombor Fail Surat Pertukaran',
          url: '/bkp/pengurusan-roaster/konfigurasi-nombor-fail',
          iconComponent: { name: 'cil-map' },
        },
      ],
    },

    {
      name: 'Penyediaan Dan Pengeluaran Draf Baru ATKPI / Pekeliling / AP',
      url: '/bkp/atkpi',
      iconComponent: { name: 'cil-spreadsheet' },
        children: [
          {
            name: 'Pendaftaran Draf Baru ATKPI / Pekeliling / AP',
            url: '/bkp/atkpi/draft/draft-main',
            iconComponent: { name: 'cil-note-add' }
          },
          {
            name: 'Semakan Draf',
            url: '/bkp/atkpi/draft/semakan-draf/maklumat-pegawai-mendaftar',
            iconComponent: { name: 'cil-task' },
            attributes: {
              style: 'pointer-events: none; cursor: default;'
            }
          },
          {
            name: 'Pendaftaran Draf Baru',
            url: '/bkp/atkpi/draft/draft-form',
            iconComponent: { name: 'cil-map' }
          },
          {
            name: 'Semakan Draf (Lama)',
            url: '/bkp/atkpi/draft/draft-list',
            iconComponent: { name: 'cil-task' }
          },
      ],
    },

    {
      name: 'Pengurusan Roster - geoTime',
      url: '/bkp/pengurusan-roaster-geotime',
      iconComponent: { name: 'cil-globe-alt' },
      children: [
        {
          name: 'Penetapan Koordinasi Pegawai',
          url: '/bkp/pengurusan-roaster-geotime/penetapan-koordinasi-pegawai',
          iconComponent: { name: 'cil-map' },
        },
      ],
    },
    {
      name: 'e-Roster',
      url: '/bkp/e-roster',
      iconComponent: { name: 'cil-av-timer' },
      children: [
        {
          name: 'Aplikasi GeoTime',
          url: '/bkp/e-roster',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Catatan Lewat',
          url: '/bkp/e-roster/catatan-lewat',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Pengesahan Kelewatan',
          url: '/bkp/e-roster/pengesahan-kelewatan',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Permohonan OT',
          url: '/bkp/e-roster/permohonan-ot',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Kelulusan OT',
          url: '/bkp/e-roster/pass-ot',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Clock Out GeoTime',
          url: '/bkp/e-roster/clock-out-geo-time',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Laporan',
          url: '/bkp/e-roster/jana-laporan',
          iconComponent: { name: 'cil-map' },
        },
      ],
    },
    {
      name: 'Penggantian Tugas',
      url: '/bkp/penggantian-tugas',
      iconComponent: { name: 'cil-av-timer' },
      children: [
        {
          name: 'Permohonan Gantian Tugas',
          url: '/bkp/penggantian-tugas/permohonan-gantian-tugas/senarai-gantian-tugas',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Perakuan Penggantian Tugas',
          url: '/bkp/penggantian-tugas/perakuan-penggantian-tugas',
          iconComponent: { name: 'cil-map' },
        },
        {
          name: 'Senarai Pegawai Pemohon',
          url: '/bkp/penggantian-tugas/senarai-pegawai-pemohon',
          iconComponent: { name: 'cil-map' },
        },
      ],
    },
    {
      name: 'Pengurusan Vaksin',
      url: '/bkp/pengurusan-vaksin',
      iconComponent: { name: 'cil-av-timer' },
              children: [
                {
                  name: 'Pendaftaran Maklumat Vaksin',
                  url: '/bkp/pengurusan-vaksin',
                  iconComponent: { name: 'cil-map' },
                  children: [
                {
                  name: 'Mendaftar / Mengemas Kini Maklumat Vaksin ',
                  url: '/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin',
                  iconComponent: { name: 'cil-map' }
                }
              ],
                },
                {
                  name: 'Pendaftaran Tarikh Publish',
                  url: '/bkp/pengurusan-vaksin/daftar-tarikh-publish',
                  iconComponent: { name: 'cil-map' }
                },
                {
                  name: 'Permohonan Vaksin',
                  url: '/bkp/pengurusan-vaksin/setuju-tolak-vaksin',
                  iconComponent: { name: 'cil-map' }
                },
                {
                  name: 'Kelulusan Suntikan Vaksin',
                  url: '/bkp/pengurusan-vaksin/kelulusan-vaksin',
                  iconComponent: { name: 'cil-map' }
                },
                {
                  name: 'Tarikh Suntikan Vaksin',
                  url: '/bkp/pengurusan-vaksin/tarikh-suntik-vaksin',
                  iconComponent: { name: 'cil-map' }
                }
              ],
    },
  ],
};

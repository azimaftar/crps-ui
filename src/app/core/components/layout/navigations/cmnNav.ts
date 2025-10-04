import { INavData } from '@coreui/angular';

export const cmnNav: INavData = {
  name: 'Pengurusan Parameter Aplikasi',
  url: '/CMN',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'Selenggara Data Rujukan',
      url: '/cmn/selenggara-data-rujukan',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Buat Carian Data Rujukan',
          url: '/cmn/selenggara-data-rujukan/carian-table-rujukan',
          iconComponent: { name: 'cil-speedometer' },
        },
        // {
        //   name: 'Senarai Rujukan By Table',
        //   url: '/cmn/selenggara-data-rujukan/senarai-rujukan-berdasarkan-table',
        //   iconComponent: { name: 'cil-speedometer' },
        //   badge: {
        //     color: 'warning',
        //     text: 'NEW'
        //   }
        // },
        {
          name: 'Semakan',
          url: '/cmn/selenggara-data-rujukan/senarai-semakan-data-rujukan',
          iconComponent: { name: 'cil-speedometer' },
        },
      ],
    },
    {
      name: 'Selenggara Data Konfigurasi',
      url: '/sec/permohonan-surat-kemudahan',
      iconComponent: { name: 'cil-cursor' },
      children: [
        // {
        //   name: 'Permohonan Baru',
        //   url: '/sec/permohonan-surat-kemudahan/permohonan-baru',
        //   iconComponent: { name: 'cil-speedometer' },
        //   badge: {
        //     color: 'warning',
        //     text: 'NEW',
        //   },
        // },
        {
          name: 'Data Konfigurasi',
          url: '/cmn/selenggara-data-konfigurasi/buat-carian-data-konfigurasi',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW',
          },
        },
        // {
        //   name: 'Kemas Kini Data Konfigurasi',
        //   url: '/cmn/selenggara-data-konfigurasi/kemas-kini-data-konfigurasi',
        //   iconComponent: { name: 'cil-speedometer' },
        //   badge: {
        //     color: 'warning',
        //     text: 'NEW',
        //   },
        // },
        // {
        //   name: 'Tambah Data Konfigurasi',
        //   url: '/cmn/selenggara-data-konfigurasi/tambah-data-konfigurasi',
        //   iconComponent: { name: 'cil-speedometer' },
        //   badge: {
        //     color: 'warning',
        //     text: 'NEW',
        //   },
        // },
        {
          name: 'Semak Data Konfigurasi',
          url: '/cmn/selenggara-data-konfigurasi/senarai-semakan-data-konfigurasi',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW',
          },
        },
      ],
    },
    {
      name: 'Selenggara Takwim',
      url: '/cmn/selenggara-data-takwim',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Buat Carian Data Takwim',
          url: '/cmn/selenggara-data-takwim/buat-carian-data-takwim',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW',
          },
        },
        {
          name: 'Kemaskini/Nyahaktif Data Takwim',
          url: '/cmn/selenggara-data-takwim/kemaskini-nyahaktif-data-takwim',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW',
          },
        },
        {
          name: 'Tambah Data Takwim',
          url: '/cmn/selenggara-data-takwim/tambah-data-takwim',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
     
      ],
    },
  ],
  
};



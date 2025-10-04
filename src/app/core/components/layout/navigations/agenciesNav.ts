import { INavData } from '@coreui/angular';

export const navImigresenPartner: INavData[] = [
  {
    name: 'Pengurusan Passport',
    iconComponent: { name: 'cil-address-book' },
    url: '/passport',
    badge: {
      color: 'info',
      text: 'Baru',
    },
    children: [
      {
        name: 'Permohonan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Permohonan Baru',
            url: '/passport/baru',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Pembaharuan Passport',
            url: '/passport/pembaharuan',
            icon: 'nav-icon-bullet',
          },
        ],
      },
      {
        name: 'Laporan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Laporan Permohonan Passport',
            url: '/passport/laporan',
            icon: 'nav-icon-bullet',
          },
        ],
      },
    ],
  },
  {
    name: 'Pengurusan Visa & Pas',
    url: '/visa-pas',
    iconComponent: { name: 'cil-paper-plane' },
    badge: {
      color: 'success',
      text: 'Aktif',
    },
    children: [
      {
        name: 'Visa Pelajar',
        url: '/visa-pas/pelajar',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Permohonan Baru',
            url: '/visa-pas/pelajar/baru',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Semakan Status',
            url: '/visa-pas/pelajar/status',
            icon: 'nav-icon-bullet',
          },
        ],
      },
      {
        name: 'Pas Lawatan Kerja Sementara (PLKS)',
        url: '/visa-pas/plks',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Senarai Pekerja Asing',
            url: '/visa-pas/plks/pekerja',
            icon: 'nav-icon-bullet',
          },
          {
            name: 'Permohonan Lanjutan',
            url: '/visa-pas/plks/lanjutan',
            icon: 'nav-icon-bullet',
          },
        ],
      },
    ],
  },
];

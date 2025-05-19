import { INavData } from '@coreui/angular';

export const navCommonItemsChildrens: INavData[] = [
  {
    title: true,
    name: 'SISTEM MENU'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Niise Employee',
    url: '/niise-employee',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'warning',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Carousel',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Collapse',
        url: '/base/collapse',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'List Group',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pagination',
        url: '/base/pagination',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Spinners',
        url: '/base/spinners',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Landing',
        url: '/landing',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];

export const navJpjCounter: INavData[] = [
  {
    name: 'Cop Semula No Casis',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    badge: {
      color: 'danger',
      text: 'Isu'
    },
    children: [
      {
        name: 'Casis Berkarat / Reput',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kemalangan',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kerosakan Pengilangan',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kenderaan Curi (Jumpa Semula)',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Agensi Kerajaan',
        url: '/base/collapse',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Duplikasi Nombor Casis',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Kelulusan Jenis Kenderaan ',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    badge: {
      color: 'info',
      text: '1'
    },
    children: [
      {
        name: 'Kelulusan Jenis Kenderaan ',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'info',
          text: 'Done'
        },
      },
      {
        name: 'Kelulusan Jenis Kenderaan (AP Individu) ',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Mesyuarat Jawatankuasa VTA  ',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Pengubahsuaian Kenderaan  ',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Penukaran Kegunaan Bas  ',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Menukar Kegunaan Bas - Workshop ',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Mengubahsuai Kenderaan Orang Kurang Upaya (OKU) ',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kenaikan / Penurunan Had Berat Kenderaan  ',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pelarasan/Kenaikan/Penurunan Berat Kenderaan  ',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Memasang Iklan  ',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Menukar Enjin ',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Menukar Jenis Badan ',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  }]

export const navImigresenPartner: INavData[] = [
  {
    name: 'Pengurusan Passport',
    iconComponent: { name: 'cil-address-book' },
    url: '/passport',
    badge: {
      color: 'info',
      text: 'Baru'
    },
    children: [
      {
        name: 'Permohonan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Permohonan Baru',
            url: '/passport/baru',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Pembaharuan Passport',
            url: '/passport/pembaharuan',
            icon: 'nav-icon-bullet'
          }
        ]
      },
      {
        name: 'Laporan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Laporan Permohonan Passport',
            url: '/passport/laporan',
            icon: 'nav-icon-bullet'
          }
        ]
      }
    ]
  },
  {
    name: 'Pengurusan Visa & Pas',
    url: '/visa-pas',
    iconComponent: { name: 'cil-paper-plane' },
    badge: {
      color: 'success',
      text: 'Aktif'
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
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Semakan Status',
            url: '/visa-pas/pelajar/status',
            icon: 'nav-icon-bullet'
          }
        ]
      },
      {
        name: 'Pas Lawatan Kerja Sementara (PLKS)',
        url: '/visa-pas/plks',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Senarai Pekerja Asing',
            url: '/visa-pas/plks/pekerja',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Permohonan Lanjutan',
            url: '/visa-pas/plks/lanjutan',
            icon: 'nav-icon-bullet'
          }
        ]
      }
    ]
  }
];

export const navJpjPartner: INavData[] = [
  {
    name: 'Pengurusan Hasil',
    iconComponent: { name: 'cil-puzzle' },
    url: '/base/accordion',
    badge: {
      color: 'warning',
      text: 'New'
    },
    children: [
      {
        name: 'Cawangan',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Cetak Semula Resit',
            url: '/base/accordion',
            icon: 'nav-icon-bullet'
          }
        ]
      },
      {
        name: 'Laporan eDaftar',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Laporan Transaksi Pendaftaran Online Kenderaan',
            url: '/base/accordion',
            icon: 'nav-icon-bullet'
          }
        ]
      },
    ]
  },
  {
    name: 'PENGURUSAN PERLESENAN KENDERAAN',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    badge: {
      color: 'danger',
      text: 'Issue'
    },
    children: [
      {
        name: 'Pendaftaran Kenderaan ',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Daftar Baru',
            url: '/buttons/buttons',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Cetak Semula Sijil Pemilikan Kenderaan Sementara',
            url: '/buttons/buttons',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Kenderaan Dalam Proses Pendaftaran',
            url: '/buttons/buttons',
            icon: 'nav-icon-bullet'
          },
        ]
      }
    ]
  }]

export const navJpjPublic: INavData[] = [
  {
    name: 'AAAPerlesenan Kenderaan',
    url: '/perlesenanKenderaan',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Bidaan Nombor Pendaftaran Kenderaan',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Semakan Lesen Kenderaan Motor (LKM)',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pembaharuan Lesen Kenderaan Motor (LKM)',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Semakan Nombor Pendaftaran Terkini',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Perlesenan Pemandu',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    badge: {
      color: 'secondary',
      text: 'Due'
    },
    children: [
      {
        name: 'Semakan Kelayakan Program Khas Peralihan Kelas B',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Semakan Lesen Memandu',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Penguatkuasaan',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    badge: {
      color: 'info',
      text: 'New'
    },
    children: [
      {
        name: 'Semakan Saman',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Bayaran Saman',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Perkhidmatan Umum',
    url: '/forms',
    iconComponent: { name: 'cilContrast' },
    children: [
      {
        name: 'JPJeQ',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'e-Aduan@JPJ',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Sejarah Transaksi',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      }
    ]
  }
]

// export const navCommonItems: INavData[] = [
//   {
//     title: true,
//     name: 'Core UI'
//   },
//   {
//     name: 'DEV References',
//     iconComponent: { name: 'cil-puzzle' },
//     badge: {
//       color: 'info',
//       text: 'DEV'
//     },
//     children: navCommonItemsChildrens
//   }
// ];

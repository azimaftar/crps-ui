import { INavData } from '@coreui/angular';

export const navModulesToBeCombined: INavData = {
  name: 'Modules',
  url: '',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'Laman Utama',
      url: '/IDM/kakitangan-sedia-ada/laman-utama',
      iconComponent: { name: 'cil-description' }
    },
    {
      name: 'Notifikasi',
      url: '/IDM/kakitangan-sedia-ada/terima-notifikasi-di-menu-notifikasi',
      iconComponent: { name: 'cil-description' }
    },
    {
      name: 'Semakan & Tindakan penyelia',
      url: '/senarai-semakan-dan-tindakan-penyelia',
      iconComponent: { name: 'cil-newspaper' }
    },
    {
      name: 'Padanan Data APSS',
      url: '/padanan-data-apss',
      iconComponent: { name: 'cil-description' }
    },
  ],
};

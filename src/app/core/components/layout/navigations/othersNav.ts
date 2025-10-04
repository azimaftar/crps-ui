import { INavData } from '@coreui/angular';

export const othersNav: INavData = {
  name: 'Lain-lain',
  url: '',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      iconComponent: { name: 'cil-speedometer' },
      badge: {
        color: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Niise Employee',
      url: '/niise-employee',
      iconComponent: { name: 'cil-speedometer' },
      badge: {
        color: 'warning',
        text: 'NEW',
      },
    },
  ],
};

import { INavData } from '@coreui/angular';

export const testNav: INavData = {
  name: 'Selenggara Tetapan Aliran Kerja',
  url: '/cmn/selenggara-tetapan-aliran-kerja',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    {
      name: 'Pengurusan Tetapan Kaedah Aliran Kerja',
      url: '/cmn/pengurusan-tetapan-kaedah-aliran-kerja',
      iconComponent: { name: 'cil-cursor' },
      badge: {
        color: 'warning',
        text: 'NEW'
      }
    }
  ]
};



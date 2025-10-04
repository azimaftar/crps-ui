import { INavData } from '@coreui/angular';

export const ptemplatNav: INavData = {
    name: 'Pengurusan Templat',
    url: '/CMN',
    iconComponent: { name: 'cil-lock-locked' },
    badge: {
        color: 'warning',
        text: 'NEW'
    },
    children: [
        {
            name: 'Selenggara Templat Surat/ Borang/ E-Mel/ Memo',
            url: '/cmn/selenggara-templat-surat-borang-emel-memo',
            iconComponent: { name: 'cil-lock-locked' },
            children: [
                {
                    name: 'Buat Carian Templat',
                    url: '/cmn/selenggara-templat-surat-borang-emel-memo/buat-carian-templat',
                    iconComponent: { name: 'cil-speedometer' },
                    badge: {
                        color: 'warning',
                        text: 'NEW'
                    }
                },
            ],
        },
        {
            name: 'Selenggara Templat OCR',
            url: '',
            iconComponent: { name: 'cil-lock-locked' }
        },
    ],
};
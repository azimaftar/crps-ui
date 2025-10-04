import {INavData} from "@coreui/angular";

export function navV2() : INavData[] {
  return [
    {
      name: 'Utama', href: '',
      // iconComponent: {name: 'cilHome'},
      class: 'nav-item-vertical',
      url: '/v2/dashboard-staff',
      icon: '.../../../../assets/figma/home.png'
    },
    { name: 'Inbox',
      // iconComponent: {name: 'cilInbox'},
      class: 'nav-item-vertical',
      icon: '.../../../../assets/figma/sms.png'
    },
    { name: 'Kakitangan',
      // iconComponent: {name: 'cilBriefcase'},
      class: 'nav-item-vertical',
      attributes: {cSidebarToggle: 'sidebar2', toggle: 'visible'},
      url: '/v2/ibc/dashboard',
      icon: '.../../../../assets/figma/briefcase.png'
    },
    { name: 'Awam',
      // iconComponent: {name: 'cilPeople'},
      class: 'nav-item-vertical',
      icon: '.../../../../assets/figma/people.png'
    },
    { name: 'e-perkhidmatan',
      // iconComponent: {name: 'cilSettings'},
      class: 'nav-item-vertical',
      icon: '.../../../../assets/figma/global.png'
    },
    // { name: 'e-perkhidmatan', iconComponent: {name: 'cil3d'}, class: 'nav-item-vertical'},
    { name: 'Bantuan',
      // iconComponent: {name: 'cilFindInPage'},
      class: 'border-top nav-item-vertical',
      icon: '.../../../../assets/figma/message-question.png'
    },
    { name: 'Konfigurasi',
      // iconComponent: {name: 'cilSettings'},
      class: 'nav-item-vertical',
      icon: '.../../../../assets/figma/setting-2.png'
    }
  ]
}


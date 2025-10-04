import {INavData} from "@coreui/angular";

export function footerNav() : INavData[] {
  return [
    { name: 'Bantuan', iconComponent: {name: 'cilFindInPage'}, class: 'border-top nav-item-vertical'},
    { name: 'Konfigurasi', iconComponent: {name: 'cilSettings'}, class: 'nav-item-vertical'}
  ]
}

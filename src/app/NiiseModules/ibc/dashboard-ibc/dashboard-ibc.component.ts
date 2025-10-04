import { Component } from '@angular/core';
import {
  BadgeComponent,
  BorderDirective, ButtonDirective,
  CardBodyComponent,
  CardComponent, CardFooterComponent, CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ContainerComponent, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective,
  FormControlDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
  TableDirective
} from "@coreui/angular";
import {IconComponent, IconDirective} from "@coreui/icons-angular";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-dashboard-ibc',
  imports: [
    ContainerComponent,
    CardBodyComponent,
    CardComponent,
    CardTextDirective,
    CardTitleDirective,
    ColComponent,
    IconDirective,
    RowComponent,
    BorderDirective,
    BadgeComponent,
    IconComponent,
    TableDirective,
    FormControlDirective,
    FormSelectDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    CardHeaderComponent,
    CardFooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './dashboard-ibc.component.html',
  standalone: true,
  styleUrl: './dashboard-ibc.component.scss'
})
export class DashboardIbcComponent {
  // Example data (you would likely fetch this from a service)
  users = [
    {
      docNo: '800211040991',
      country: { flag: 'https://flagcdn.vercel.app/flags/my.svg', code: 'MYS' },
      name: 'Aiman Bin Kasim',
      gender: 'Lelaki',
      logIn: '25 Jan 2024, 07:00',
      status: 'Diterima',
      statusColor: 'success'
    },
    {
      docNo: '910723125678',
      country: { flag: 'https://flagcdn.vercel.app/flags/sg.svg', code: 'SGP' },
      name: 'Nurul Huda Binti Ali',
      gender: 'Perempuan',
      logIn: '26 Jan 2024, 08:15',
      status: 'Dalam Semakan',
      statusColor: 'warning'
    }
  ];
}

import { Component } from '@angular/core';
import {
  AlertComponent, BgColorDirective, BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent, CardTextDirective, CardTitleDirective,
  ColComponent, ContainerComponent,
  RowComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";

@Component({
  selector: 'app-welcome-staff',
  imports: [
    CardComponent,
    CardBodyComponent,
    AlertComponent,
    ButtonDirective,
    IconDirective,
    RowComponent,
    ColComponent,
    BgColorDirective,
    ContainerComponent,
    CardTextDirective,
    CardTitleDirective,
    BorderDirective
  ],
  templateUrl: './welcome-staff.component.html',
  standalone: true,
  styleUrl: './welcome-staff.component.scss'
})
export class WelcomeStaffComponent {
}

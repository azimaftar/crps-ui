import { Component } from '@angular/core';
import {
  BadgeComponent,
  CardBodyComponent,
  CardComponent, CardFooterComponent, CardHeaderComponent, CardTextDirective, CardTitleDirective,
  ColComponent,
  ContainerComponent, FormControlDirective, FormSelectDirective, InputGroupComponent, InputGroupTextDirective,
  PaginationComponent,
  RowComponent, TableDirective
} from "@coreui/angular";
import {IconComponent, IconDirective} from "@coreui/icons-angular";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-dashboard-staff',
    imports: [
        ContainerComponent,
        RowComponent,
        ColComponent,
        CardBodyComponent,
        CardComponent,
        PaginationComponent,
        BadgeComponent,
        IconComponent,
        TableDirective,
        InputGroupComponent,
        CardTextDirective,
        CardTitleDirective,
        IconDirective,
        FormSelectDirective,
        InputGroupTextDirective,
        FormControlDirective,
        CardHeaderComponent,
        CardFooterComponent,
        NgOptimizedImage
    ],
  templateUrl: './dashboard-staff.component.html',
  standalone: true,
  styleUrl: './dashboard-staff.component.scss'
})
export class DashboardStaffComponent {

}

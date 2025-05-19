import { DOCUMENT, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective, TemplateIdDirective,
  TextColorDirective, WidgetStatAComponent
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

import { WidgetsBrandComponent } from '../../../others/views/dev-references/widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../../../others/views/dev-references/widgets/widgets-dropdown/widgets-dropdown.component';
// import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

// import {ActivatedRoute, Router, RouterLink} from '@angular/router';
// import {AuthService} from "../core/services/auth.service";
// import {SessionUtil} from "../core/utils/SessionUtil";
import {LeftContentComponent} from "./left-content/left-content.component";
import {EmployeeNotificationsComponent} from "./employee-notifications/employee-notifications.component";
import {CenterContentComponent} from "./center-content/center-content.component";

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
    templateUrl: 'niise-employee.component.html',
    styleUrls: ['niise-employee.component.scss'],
  imports: [ButtonDirective, ReactiveFormsModule, CardComponent, CardBodyComponent, LeftContentComponent, EmployeeNotificationsComponent, CenterContentComponent,
  ]
})
export class NiiseEmployeeComponent implements OnInit {

  static title: string = "Immigration Employee";

  ngOnInit(): void {
  }
}

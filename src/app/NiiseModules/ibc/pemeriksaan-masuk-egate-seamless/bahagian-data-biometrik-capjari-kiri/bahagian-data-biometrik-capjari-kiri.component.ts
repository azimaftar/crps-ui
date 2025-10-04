import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  ButtonDirective,
  ContainerComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent,
  CardComponent,
  CardHeaderComponent,// <c-card-header>
  CardBodyComponent,//<c-card-body>
} from '@coreui/angular';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-bahagian-data-biometrik-capjari-kiri',
  standalone: true,
  imports: [
    CardHeaderComponent,// <c-card-header>
    CardBodyComponent,//<c-card-body>
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    Tabs2Module, 
    IconDirective, 
    IconDirective
  ],
  templateUrl: './bahagian-data-biometrik-capjari-kiri.component.html',
  styleUrl: './bahagian-data-biometrik-capjari-kiri.component.scss'
})
export class BahagianDataBiometrikCapjariKiriComponent {
  //Tabs config
  cilHome = cilHome;

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  leftFingerprints = [
    { image: '/assets/images/fingerprint1.png' },
    { image: '/assets/images/fingerprint2.png' }
  ];
  fingerQuality: string = '';

}

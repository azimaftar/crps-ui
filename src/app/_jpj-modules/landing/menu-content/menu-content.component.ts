import {Component, Input} from '@angular/core';
import {INavData} from "@coreui/angular";
import { CommonModule } from '@angular/common';
import {SessionUtil} from "../../core/utils/SessionUtil";
// import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import { NgStyle } from '@angular/common';
// import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ChartOptions } from 'chart.js';
import {
  AccordionButtonDirective,
  AccordionComponent, AccordionItemComponent,
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective, TemplateIdDirective,
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';


import {ActivatedRoute, Router} from '@angular/router';
import {WidgetsDropdownComponent} from "../../../../others/views/dev-references/widgets/widgets-dropdown/widgets-dropdown.component";
import {WidgetsBrandComponent} from "../../../../others/views/dev-references/widgets/widgets-brand/widgets-brand.component";
// import {color} from "chart.js/helpers";
// import {AuthService} from "../../../../core/services/auth.service";
// import {SessionUtil} from "../../../../core/utils/SessionUtil";


@Component({
  selector: 'app-menu-content',
  standalone: true, // Required for standalone components
  // imports: [CommonModule, CardBodyComponent, CardComponent],
  imports: [CommonModule, CardBodyComponent, CardComponent,
    CardComponent, CardBodyComponent,
    ReactiveFormsModule, NgStyle,

  ],

  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent {
  @Input() menuData: INavData[] | undefined;
  @Input() title: string | undefined;
  @Input() url: string | undefined;
  @Input() type: string | undefined;
  @Input() bgColor: string | undefined;
  @Input() ftColor: string | undefined;
  // employeeContent = employeeContent;

  // constructor(private router: Router, private authService: AuthService) { }

  constructor(private router: Router) { }
  handleClick(url: any) {
    SessionUtil.setItem("menuData", this.menuData);
    SessionUtil.setItem("type", this.type);
    if (typeof (this as any)[url] === 'function') {
      (this as any)[url]();
    } if(typeof url !== 'string') {
      // alert("handleClick");
      // if(url.startsWith("//")) {
      //   url = url.substring(1);
      // }

      this.router.navigate([url]);
    }else {

      if(url.startsWith("//")) {
        url = url.substring(1);
      }
      this.router.navigate([url]);
      // console.error(`Function ${url} is not defined.`);
    }
  }

  onCardClick() {
    alert("onCardClick executed!");
    // Custom logic
  }

  protected readonly SessionUtil = SessionUtil;
  // protected readonly color = color;
}


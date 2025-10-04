import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  FormControlDirective,
  ButtonDirective,
  ButtonGroupComponent, FormLabelDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective
} from '@coreui/angular';
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup
} from "@angular/forms";
import { AuthResponse } from "../../../../core/models/AuthResponse";
import { SessionUtil } from "../../../../core/utils/SessionUtil";
import { LocalStorageUtil } from "../../../../core/utils/LocalStorageUtil";
import { config } from "../../../../../config/uiConfig";
// import {DevModeComponent} from "./dev-mode/dev-mode-component";

@Component({
  standalone: true,
  selector: 'portal-niise',
  templateUrl: './portal-niise.component.html',
  styleUrls: ['./portal-niise.component.scss'],
  imports: [CommonModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    CardComponent, CardBodyComponent, FormDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    FormControlDirective, ButtonDirective,RouterModule,
    FormsModule, ReactiveFormsModule, ButtonGroupComponent, FormLabelDirective, FormCheckComponent]
})
export class PortalNiiseComponent {
  username = String(LocalStorageUtil.getItem('usrId') || '');
  password = '';
  errorMessage = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  login() {
  this.authService.redirectToLogin();
}

  formRadio1 = new UntypedFormGroup({
    radio1: new UntypedFormControl('Radio1')
  });

  setRadioValue(value: string): void {
    this.formRadio1.setValue({ radio1: value });
  }


  protected readonly SessionUtil = SessionUtil;
  protected readonly LocalStorageUtil = LocalStorageUtil;
  protected readonly config = config;
}

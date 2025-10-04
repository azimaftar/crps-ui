import { Component, inject, OnInit  } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  CardHeaderComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  ButtonGroupComponent, FormLabelDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective
} from '@coreui/angular';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup
} from "@angular/forms";
import { AuthResponse } from "../../core/models/AuthResponse";
import { FeedComponent } from "../../../others/views/dev-references/feed/feed.component";
import { SessionUtil } from "../../core/utils/SessionUtil";
import { LocalStorageUtil } from "../../core/utils/LocalStorageUtil";
import { config } from "../../../config/uiConfig";
import { DevModeComponent } from "./dev-mode/dev-mode-component";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    CardComponent, CardBodyComponent, FormDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    FormControlDirective, ButtonDirective,
    FormsModule, ReactiveFormsModule, ButtonGroupComponent, FormLabelDirective, FormCheckComponent, DevModeComponent]
})
export class LoginComponent implements OnInit {
  username = String(LocalStorageUtil.getItem('usrId') || '');
  password = '';
  errorMessage = '';

  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit() {
    const fromSSO = this.route.snapshot.queryParamMap.get('fromSSO');
    if (fromSSO) {
      this.fetchLoginResponse();
    }
  }

  login() {
    this.authService.redirectToLogin();
  }

  fetchLoginResponse() {
    this.authService.getLoginResponse().subscribe({
      next: (res) => {
        console.log('Login response received:', res);

      },
      error: (err) => {
        console.warn('No session found, user may need to login', err);
      }
    });
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
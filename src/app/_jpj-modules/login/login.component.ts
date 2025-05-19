import {Component, inject} from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import {RouterLink, Router } from "@angular/router";
import {AuthService} from "../core/services/auth.service";
import {FormsModule} from "@angular/forms";
import {AuthResponse} from "../core/models/AuthResponse";
import {FeedComponent} from "../../../others/views/feed/feed.component";
import {SessionUtil} from "../core/utils/SessionUtil";
import {LocalStorageUtil} from "../core/utils/LocalStorageUtil";
import {config} from "../../../config/uiConfig";

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
    InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle,
    // RouterLink,
    FormsModule, FeedComponent]
})
export class LoginComponent {
  username = String(LocalStorageUtil.getItem('usrId') || '');
  password = '';
  errorMessage = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() { }

  login() {
    console.log('Logging : ',this.username);
    SessionUtil.setItem("usrId", this.username);
    LocalStorageUtil.setItem("usrId", this.username);
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response: AuthResponse) => {
        console.log('Token received:', response.token);
        // this.router.navigate(['/dashboard']);
        this.router.navigate(['/landing']);
      },
      error: () => {
        // this.errorMessage = 'Invalid credentials';
      }
    });

    this.router.navigate(['/landing']);
  }


  protected readonly SessionUtil = SessionUtil;
  protected readonly LocalStorageUtil = LocalStorageUtil;
  protected readonly config = config;
}

import { Component, input, inject } from "@angular/core";
import {
  AvatarComponent,
  BadgeComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderNavComponent, NavLinkDirective,
  HeaderComponent as CoreUiHeaderComponent, SidebarToggleDirective, ButtonDirective
} from "@coreui/angular";
import { config } from "../../../../config/uiConfig";
import { NgTemplateOutlet } from "@angular/common";
import { IconDirective } from "@coreui/icons-angular";
import { RouterLink, Router } from "@angular/router";
import { DevModeComponent } from "../../../NiiseModules/login/dev-mode/dev-mode-component";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  imports: [
    ContainerComponent,
    HeaderNavComponent,
    NgTemplateOutlet,
    AvatarComponent,
    BadgeComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    IconDirective,
    RouterLink,
    NavLinkDirective,
    SidebarToggleDirective,
    ButtonDirective,
    DevModeComponent
  ],
  styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent extends CoreUiHeaderComponent {
  protected readonly config = config;
  sidebarMain = input('sidebarMain');

  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    const authDataRaw = sessionStorage.getItem('auth_token');
    let idToken = '';

    if (authDataRaw) {
      try {
        const authData = JSON.parse(authDataRaw);

        idToken = authData?.data?.tokens?.id_token || '';

        console.log("Extracted idToken:", idToken);
      } catch (e) {
        console.warn("Failed to parse token", e);
      }
    }

    sessionStorage.clear();

    window.location.href = `http://localhost:8080/logout?idToken=${encodeURIComponent(idToken)}`;

  }
}

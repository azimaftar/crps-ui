import {Component, inject} from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  CardBodyComponent,
  INavData
} from '@coreui/angular';
import {RouterLink, Router } from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {FormsModule} from "@angular/forms";
import {AuthResponse} from "../../core/models/AuthResponse";
import {SessionUtil} from "../../core/utils/SessionUtil";
import {FeedComponent} from "../../../others/views/dev-references/feed/feed.component";
import {MenuContentComponent} from "./menu-content/menu-content.component";
import {MenuService} from "../../core/components/layout/menu.service";
import {navImigresenPartner} from "../../core/components/layout/navigations/agenciesNav";

@Component({
    standalone: true,
    selector: 'app-employee',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
  imports: [CommonModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
    CardBodyComponent,
    FormsModule, MenuContentComponent,
  ]
})

export class LandingComponent {
  navPublic: INavData[] = [];
  isLoading = false;
  error: string | null = null;
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.fetchMenus();
  }

  fetchMenus(): void {
    this.isLoading = true;
    // Fetch public menu
    this.menuService.getMenuList().subscribe({
      next: (data) => {
        this.navPublic = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load public menu';
        this.isLoading = false;
        console.error('Public Menu Error:', err);
      }
    });
  }

  protected readonly SessionUtil = SessionUtil;
  protected readonly navImigresenPartner = navImigresenPartner;
}

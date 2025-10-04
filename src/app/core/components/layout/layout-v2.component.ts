import {Component, input, OnInit, signal, ViewChild} from "@angular/core";
import {TopNavComponent} from "../top-nav/top-nav.component";
import {LeftNavComponent} from "../left-nav/left-nav.component";
import {
  ColComponent,
  ContainerComponent,
  HeaderTogglerDirective,
  INavData, ListGroupDirective, NavLinkDirective, OffcanvasToggleDirective, RowComponent, SidebarBrandComponent,
  SidebarComponent, SidebarFooterComponent, SidebarHeaderComponent,
  SidebarNavComponent, SidebarToggleDirective, SidebarTogglerDirective
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass, NgStyle} from "@angular/common";
import {NgScrollbar} from "ngx-scrollbar";
import {navV2} from "./navigation/mainNav";
import {navV2Modules} from "./_navV2";
import {footerNav} from "./navigation/footerNav";
import { IdlePopupComponent } from "../idle-popup/idle-popup.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout-v2.component.html',
  standalone: true,
  imports: [
    TopNavComponent,
    SidebarComponent,
    SidebarNavComponent,
    HeaderTogglerDirective,
    IconDirective,
    ContainerComponent,
    RouterOutlet,
    NgStyle,
    NgScrollbar,
    SidebarToggleDirective,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarFooterComponent,
    RowComponent,
    ColComponent,
    ListGroupDirective,
    NavLinkDirective,
    RouterLink,
    RouterLinkActive,
    SidebarTogglerDirective,
    OffcanvasToggleDirective,
    NgClass,
    IdlePopupComponent
  ],
  styleUrls: ['./layout-v2.component.scss']
})
export class LayoutV2Component implements OnInit {
  public navItems: INavData[] = [];
  public nav2Items: INavData[] = [];
  public footerNavItems: INavData[] = [];

  visibleSidebar = false;
  ngOnInit(): void {
    this.navItems.push(...navV2());
    this.nav2Items.push(...navV2Modules());
    this.footerNavItems.push(...footerNav());
  }

  visibleEvent(event: boolean) {
    this.visibleSidebar = event;
  }
}

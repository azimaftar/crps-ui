import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { IconDirective } from '@coreui/icons-angular';
// import { stringify } from "flatted";
// import { parse } from "flatted";
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { FooterComponent, HeaderComponent } from './index';
import { MenuService } from './menu.service';
import { INavData } from '@coreui/angular';
import {navCommonItems, navJpjCounter, navJpjPartner, navJpjPublic} from './_nav';
import {finalize} from "rxjs";
import {SessionUtil} from "../../utils/SessionUtil";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    SidebarComponent,
    // SidebarHeaderComponent,
    // SidebarBrandComponent,
    // RouterLink,
    // IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    HeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    FooterComponent
  ]
})
export class LayoutComponent implements OnInit {
  public navItems: INavData[] = [];

  @ViewChildren('c-sidebar-nav-link-content', { read: ElementRef }) linkContents!: QueryList<ElementRef>;

  constructor(private menuService: MenuService, private cdr: ChangeDetectorRef) {}
  insertLineBreaks(text: string, maxLineLength: number): string {
    let result = '';
    let lastBreakIndex = 0;

    while (lastBreakIndex < text.length) {
      const nextIndexTarget = lastBreakIndex + maxLineLength;

      if (nextIndexTarget >= text.length) {
        result += text.slice(lastBreakIndex);
        break;
      }

      let breakAt = text.indexOf(' ', nextIndexTarget);

      if (breakAt === -1) {
        // No more spaces, append the rest
        result += text.slice(lastBreakIndex);
        break;
      }

      result += text.slice(lastBreakIndex, breakAt) + '<br>';
      lastBreakIndex = breakAt + 1;
    }

    return result;
  }





  ngOnInit(): void {
    SessionUtil.setItem("showSidebar", true);

    this.navItems = [{name: 'Sistem Menu', title: true}];
    const menuData = SessionUtil.getItem<INavData[]>("menuData");
    if (menuData) {
      this.navItems.push(...menuData);
    }
    if(!this.navItems || this.navItems.length < 1){
      this.navItems.push({name: 'Unable to fetch menu', title: true});
    }
  }

  ngAfterViewInit(): void {


    // Select the top-level c-sidebar-nav-group's nav-group-toggle link
    const navGroupToggle = document.querySelectorAll('c-sidebar-nav-group > a.nav-group-toggle');
    if (navGroupToggle) {
      navGroupToggle.forEach((group: Element) => {
        const originalChildren = Array.from(group.childNodes);

        // Clear group first
        while (group.firstChild) {
          group.removeChild(group.firstChild);
        }

        // Re-insert with wrapped text for text nodes, and original node for others
        originalChildren.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent?.trim() ?? '';
            if (text.length > 0) {
              const wrapped = this.insertLineBreaks(text, 8);
              const lines = wrapped.split('<br>');
              lines.forEach((line, i) => {
                group.appendChild(document.createTextNode(line));
                if (i !== lines.length - 1) {
                  group.appendChild(document.createElement('br'));
                }
              });
            }
          } else {
            group.appendChild(node); // Keep original non-text node (like <svg>, <span>)
          }
        });
      });
    }



    const links = document.querySelectorAll('c-sidebar-nav-link-content');

    links.forEach((el, index) => {
      const rawText = el.textContent?.trim() || '';

      const wrapped = this.insertLineBreaks(rawText, 6);
      el.innerHTML = wrapped;

    });

  }


  onScrollbarUpdate(event: any): void {
    // console.log('Scrollbar updated:', event);
  }

  // ✅ Recursive function to handle nested children@Input() showSidebar: boolean = true;

  // List of icon names (indexed by layer)
  iconNamesByLayer: string[] = [
    'cil-home',     // Layer 0
    'cil-folder',   // Layer 1
    'cil-file',     // Layer 2
    'cil-chart',    // Layer 3
    'cil-cog'       // Layer 4
    // Add more if needed
  ];

  // Updated mapChildren function
  mapChildren(children: any[], layer: number ): INavData[] {
    console.log("mapChildren(children, layer):", children, layer);
    return children.map((child) => {
      const iconName = this.iconNamesByLayer[layer] || 'cil-puzzle'; // fallback if index out of range
      return {
        name: child?.bmDesc?.trim() || 'Unnamed Child',
        url: `/dashboard/${child?.id}`,
        iconComponent: { name: iconName },
        badge: {
          color: 'success',
          text: `Layer ${layer}`
        },
        children: child?.children ? this.mapChildren(child.children, layer + 1) : []
      };
    });
  }

  protected readonly SessionUtil = SessionUtil;
}

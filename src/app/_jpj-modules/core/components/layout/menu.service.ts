import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INavData } from '@coreui/angular';
import { API_CONFIG } from "../../../../../config/apiConfig";
import {map} from "rxjs/operators";
import {SessionUtil} from "../../utils/SessionUtil";
interface BackendNavData extends INavData {
  mmcExecPath?: string;
  mmcBmdesc?: string;
  children?: BackendNavData[];
}

interface MenuResponse {
  receivedStatus: number;
  resultErrDsc: string | null;
  data: BackendNavData[];
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // private apiUrl =  `${API_CONFIG.menu.allMenu}`;


  constructor(private http: HttpClient) {}

  getMenuList(): Observable<INavData[]> {

  let apiUrl = 'http://localhost:9091/api/menu/getAll?userId='+SessionUtil.getItemOnce('usrId');
    console.log("Passport Details:");
    return this.http.get<MenuResponse>(apiUrl).pipe(
      map((response: MenuResponse) => {
        if (response.receivedStatus === 1) {
          const menus = response.data;
          const navData = this.mapChildren(menus, 0);

          // const navData: INavData[] = menus.map(menu => ({
          //   name: menu.mmcBmdesc,          // Properly typed according to BackendNavData
          //   url: menu.mmcExecPath || undefined, // optional chaining if url can be null
          //   icon: 'icon-folder',          // or derive based on menu.mmcType, etc.
          //   children: []                  // optional: you can populate this if building a hierarchy
          // }));

          return navData;
        }
        throw new Error(response.resultErrDsc || 'Failed to load menu');
      })
    );
  }

  // mapChildren(children: BackendNavData[]): INavData[] {
  //   return children.map((menu) => ({
  //     name: menu?.mmcBmdesc?.trim() || 'Unnamed Child',
  //     url: `/dashboard/${menu?.mmcExecPath?.trim()}`,
  //     iconComponent: { name: 'cil-home' },
  //     badge: {
  //       color: 'success',
  //       text: `Layer`
  //     },
  //     children: menu?.children ? this.mapChildren(menu.children) : []
  //   }));
  // }

  // List of icon names (indexed by layer)
  iconNamesByLayer: string[] = [
    'cil-home',     // Layer 0
    'cil-chart',   // Layer 1
    'cil-file',     // Layer 2
    'cil-chart',    // Layer 3
    'cil-cog'       // Layer 4
    // Add more if needed
  ];

  // Updated mapChildren function
  mapChildren(menus: BackendNavData[], layer: number ): INavData[] {
    // console.log("mapChildren(children, layer):", children, layer);
    return menus.map((menu) => {
      const iconName = this.iconNamesByLayer[layer] || 'cil-puzzle'; // fallback if index out of range
      return {
        name: menu?.mmcBmdesc?.trim() || 'Unnamed Child',
        url: `/dashboard/${menu?.mmcExecPath?.trim()}`,
        // name: child?.bmDesc?.trim() || 'Unnamed Child',
        // url: `/dashboard/${child?.id}`,
        iconComponent: { name: iconName },
        badge: {
          color: 'success',
          text: `Layer ${layer}`
        },
        children: menu?.children ? this.mapChildren(menu.children, layer + 1) : []
      };
    });
  }

  capitalizeList(names: string[]): string[] {
    return names.map(name => name.toUpperCase());
  }


  // getNavItems(): Observable<INavData[]> {
  //   return this.http.get<INavData[]>(this.apiUrl);
  // }

  // getMenu() {
  //   return menus;
  // }

  // getMenuList(): Observable<INavData[]> {
  //   return this.http.get<INavData[]>(this.apiUrl);
  // }
}

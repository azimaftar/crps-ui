import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CardModule, NavModule, GridModule, SidebarBrandComponent} from '@coreui/angular';

@Component({
  selector: 'app-perlesenan-kenderaan',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ]
})
export class PassportComponent {
  selectedTab = 'pemilik';
  static title: string = "Passport";
}

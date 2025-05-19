import { Component } from '@angular/core';
import {CardBodyComponent, CardComponent} from "@coreui/angular";
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-content',
  standalone: true, // Required for standalone components
  imports: [CommonModule, CardBodyComponent, CardComponent],
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent {
  employeeContent = employeeContent;

  handleClick(methodName: string) {
    if (typeof (this as any)[methodName] === 'function') {
      (this as any)[methodName]();
    } else {
      console.error(`Function ${methodName} is not defined.`);
    }
  }

  onCardClick() {
    alert("onCardClick executed!");
    // Custom logic
  }
}

export const employeeContent = [
  {
    "name": "Time Attendance",
    "desc": "Pengurusan Masa Dan Kedatangan Kakitangan Jabatan Pengangkutan Jalan Malaysia.",
    "img": "time_attendance.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-puzzle" },
    "badge": { "color": "info", "text": "" }
  },
  {
    "name": "Library Management System",
    "desc": "Pengurusan Perpustakaan Secara Dalam Talian.",
    "img": "library_management.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-puzzle" },
    "badge": { "color": "info", "text": "" }
  },
  {
    "name": "Sistem Pengurusan Aduan IT Help Desk JPJ",
    "desc": "Kegunaan kakitangan Help Desk dan Support Team JPJIT.",
    "img": "helpdesk_management.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-puzzle" },
    "badge": { "color": "info", "text": "" }
  },
  {
    "name": "Sistem Panggilan Aduan IT Helpdesk JPJ",
    "desc": "Kegunaan kakitangan Help Desk JPJIT.",
    "img": "it_call_system.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-puzzle" },
    "badge": { "color": "info", "text": "" }
  },
  {
    "name": "Sistem Self Service Log Aduan Teknikal JPJIT",
    "desc": "Kegunaan Pengguna Di Cawangan.",
    "img": "self_service_log.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-puzzle" },
    "badge": { "color": "info", "text": "" }
  }
];

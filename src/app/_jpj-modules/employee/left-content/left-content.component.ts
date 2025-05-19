import { Component } from '@angular/core';
import {ButtonDirective, CardBodyComponent, CardComponent} from "@coreui/angular";
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SessionUtil} from "../../core/utils/SessionUtil";
import {employeeContent} from "../center-content/center-content.component";

@Component({
  selector: 'app-left-content',
  standalone: true, // Required for standalone components
  imports: [CommonModule, CardBodyComponent, CardComponent,
    // ButtonDirective
  ],
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent {
  // employeeContent = employeeContent;

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

  protected readonly SessionUtil = SessionUtil;
  protected readonly employeeContent = employeeContent;
}

// export const employeeContent = [
//   {
//     "name": "mySTAT",
//     "desc": "Pengurusan Laporan Dan Statistik Berkenaan Transaksi Dan Operasi Jabatan Pengangkutan Jalan Malaysia.",
//     "img": "mySTAT.jpg",
//     "url": "onCardClick",
//     "iconComponent": { "name": "cil-puzzle" },
//     "badge": { "color": "info", "text": "" }
//   },
//   {
//     "name": "Sistem Pengurusan Peperiksaan",
//     "desc": "Sistem Pengurusan Peperiksaan Berkenaan Penjawatan Secara Dalam Talian (KPSL & Perkhidmatan).",
//     "img": "exam_management.png",
//     "url": "onCardClick",
//     "iconComponent": { "name": "cil-puzzle" },
//     "badge": { "color": "info", "text": "" }
//   },
//   {
//     "name": "Arahan Jabatan",
//     "desc": "Senarai Arahan Jabatan Pengangkutan Jalan untuk dimuat turun.",
//     "img": "department_instructions.png",
//     "url": "onCardClick",
//     "iconComponent": { "name": "cil-puzzle" },
//     "badge": { "color": "info", "text": "" }
//   },
//   {
//     "name": "Prosedur Operasi Standard (SOP)",
//     "desc": "Senarai SOP Bahagian untuk dimuat turun.",
//     "img": "sop.png",
//     "url": "onCardClick",
//     "iconComponent": { "name": "cil-puzzle" },
//     "badge": { "color": "info", "text": "" }
//   },
//   {
//     "name": "Garis Panduan & Dasar Jabatan",
//     "desc": "Garis panduan dan dasar Jabatan untuk panduan Kakitangan Jabatan Pengangkutan Jalan.",
//     "img": "guidelines.png",
//     "url": "onCardClick",
//     "iconComponent": { "name": "cil-puzzle" },
//     "badge": { "color": "info", "text": "" }
//   }
// ];


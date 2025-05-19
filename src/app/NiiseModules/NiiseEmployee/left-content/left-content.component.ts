import { Component } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent } from "@coreui/angular";
import { CommonModule } from '@angular/common';
import { SessionUtil } from "../../../_jpj-modules/core/utils/SessionUtil";
import {employeeContent} from "../../../_jpj-modules/employee/center-content/center-content.component";

@Component({
  selector: 'app-left-content',
  standalone: true,
  imports: [CommonModule, CardBodyComponent, CardComponent],
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent {

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
  protected readonly immigrationContent = [
    {
      "name": "mySTAT Immigration",
      "desc": "Laporan dan statistik berkaitan keluar-masuk pelawat, ekspatriat, dan warganegara.",
      "img": "immigration_stat.jpg",
      "url": "onCardClick",
      "iconComponent": { "name": "cil-chart" },
      "badge": { "color": "primary", "text": "" }
    },
    {
      "name": "Peperiksaan Permohonan Visa",
      "desc": "Sistem peperiksaan atas talian untuk permohonan visa dan permit kerja.",
      "img": "visa_exam.png",
      "url": "onCardClick",
      "iconComponent": { "name": "cil-school" },
      "badge": { "color": "success", "text": "" }
    },
    {
      "name": "Arahan Ketua Imigresen",
      "desc": "Senarai arahan rasmi daripada Jabatan Imigresen Malaysia.",
      "img": "immigration_orders.png",
      "url": "onCardClick",
      "iconComponent": { "name": "cil-description" },
      "badge": { "color": "warning", "text": "" }
    },
    {
      "name": "Prosedur Operasi Standard (SOP) Imigresen",
      "desc": "Dokumen SOP untuk kawalan sempadan, visa, deportasi, dan lain-lain.",
      "img": "sop_immigration.png",
      "url": "onCardClick",
      "iconComponent": { "name": "cil-list" },
      "badge": { "color": "danger", "text": "" }
    },
    {
      "name": "Dasar & Garis Panduan Imigresen",
      "desc": "Panduan dan dasar yang diguna pakai oleh semua kakitangan imigresen.",
      "img": "immigration_guidelines.png",
      "url": "onCardClick",
      "iconComponent": { "name": "cil-notes" },
      "badge": { "color": "info", "text": "" }
    }
  ];
  // protected readonly employeeContent = immigrationContent;
}

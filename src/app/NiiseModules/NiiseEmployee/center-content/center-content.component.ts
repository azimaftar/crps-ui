import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent } from '@coreui/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-center-content',
  standalone: true,
  imports: [CommonModule, CardBodyComponent, CardComponent],
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent {
  immigrationContent = immigrationContent;

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

  protected readonly employeeContent = immigrationContent;
}

export const immigrationContent = [
  {
    "name": "Sistem Permohonan Visa",
    "desc": "Pengurusan permohonan visa secara dalam talian untuk pelawat dan ekspatriat.",
    "img": "visa_application.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-globe-alt" },
    "badge": { "color": "primary", "text": "" }
  },
  {
    "name": "Sistem Kelulusan Pasport",
    "desc": "Kelulusan dan pembaharuan pasport antarabangsa secara digital.",
    "img": "passport_approval.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-passport" },
    "badge": { "color": "success", "text": "" }
  },
  {
    "name": "Rekod Kemasukan & Keluar Negara",
    "desc": "Pantauan dan semakan pergerakan keluar-masuk individu di pintu masuk negara.",
    "img": "entry_exit_log.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-location-pin" },
    "badge": { "color": "warning", "text": "" }
  },
  {
    "name": "Sistem Aduan Kewarganegaraan",
    "desc": "Saluran rasmi untuk pertanyaan dan aduan berkaitan isu kewarganegaraan.",
    "img": "citizenship_complaints.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-comment-bubble" },
    "badge": { "color": "danger", "text": "" }
  },
  {
    "name": "Pendaftaran eKonsulat",
    "desc": "Perkhidmatan konsular digital untuk rakyat Malaysia di luar negara.",
    "img": "econsulate.png",
    "url": "onCardClick",
    "iconComponent": { "name": "cil-building" },
    "badge": { "color": "info", "text": "" }
  }
];

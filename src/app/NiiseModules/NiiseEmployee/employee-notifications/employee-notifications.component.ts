import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  BorderDirective,
  CardBodyComponent, CardComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";

@Component({
  selector: 'app-employee-notifications',
  standalone: true, // Ensure standalone is set
  imports: [CommonModule, IconDirective, TabDirective, TabPanelComponent, TabsComponent, TabsContentComponent, TabsListComponent, CardComponent], // Add CommonModule to imports
  templateUrl: './employee-notifications.component.html',
  styleUrls: ['./employee-notifications.component.scss']
})

export class EmployeeNotificationsComponent {
  notifications = notifications;
  readonly activeItem = signal(0);

  handleActiveItemChange(value: string | number | undefined) {
    this.activeItem.set(<number>value);
  }
}
export const notifications = [
  {
    "author": "Unit Imigresen HQ",
    "date": "Wednesday, January 10, 2024",
    "title": "PROSEDUR PEMOHONAN VISA DENGAN RUJUKAN",
    "category": "Imigresen",
    "important": true,
    "links": [
      { "text": "Panduan Permohonan Visa Dengan Rujukan", "url": "#" }
    ]
  },
  {
    "author": "Unit Operasi Imigresen",
    "date": "Monday, February 5, 2024",
    "title": "JADUAL PEMERIKSAAN PINTU MASUK ANTARABANGSA 2024",
    "category": "Imigresen",
    "important": true,
    "description": "Berikut adalah jadual semakan operasi untuk semua pintu masuk antarabangsa sepanjang tahun 2024.",
    "links": [
      { "text": "Jadual Pemeriksaan KLIA & KLIA2", "url": "#" },
      { "text": "Jadual Pemeriksaan Johor CIQ", "url": "#" },
      { "text": "Jadual Pemeriksaan Imigresen Sabah & Sarawak", "url": "#" }
    ]
  },
  {
    "author": "Pegawai Sistem Imigresen",
    "date": "Thursday, March 21, 2024",
    "title": "SOP TERKINI PERMOHONAN PAS LAWATAN KERJA SEMENTARA (PLKS)",
    "category": "Imigresen",
    "description": "Dokumen berikut mengandungi kemas kini terbaru berkaitan permohonan dan pembaharuan PLKS.",
    "links": [
      { "text": "SOP Permohonan Baharu PLKS 2024", "url": "#" },
      { "text": "SOP Pembaharuan PLKS 2024", "url": "#" },
      { "text": "Syarat & Garis Panduan Majikan", "url": "#" }
    ]
  },
  {
    "author": "Jabatan Imigresen Malaysia",
    "date": "Friday, April 12, 2024",
    "title": "NOTIS ARAHAN TETAP KEMASUKAN PELANCONG ASING",
    "category": "Imigresen",
    "description": "Arahan ini merangkumi negara-negara berisiko serta keperluan dokumentasi tambahan.",
    "links": [
      { "text": "Senarai Negara Berisiko Tinggi", "url": "#" },
      { "text": "Syarat Tambahan Kemasukan Pelancong", "url": "#" },
      { "text": "Langkah Pengesahan Visa Pelancong", "url": "#" }
    ]
  }
];


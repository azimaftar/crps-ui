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
    "author": "Admin Portal Staff",
    "date": "Monday, December 9, 2024",
    "title": "PROSEDUR PULANGAN BALIK HASIL (REFUND)",
    "category": "General",
    "important": true,
    "links": []
  },
  {
    "author": "Admin Portal Staff",
    "date": "Monday, December 9, 2024",
    "title": "TAKWIM PEPERIKSAAN JABATAN PENGANGKUTAN JALAN TAHUN 2025",
    "category": "General",
    "important": true,
    "description": "Bersama ini dilampirkan Takwim tersebut (Peperiksaan Perkhidmatan (Pengesahan Jawatan) dan Peperiksaan Khas untuk Memasuki Skim Perkhidmatan (PSL)) JPJ untuk rujukan dan tindakan selanjutnya.",
    "links": [
      { "text": "TAKWIM PEPERIKSAAN PERKHIDMATAN 2025", "url": "#" },
      { "text": "TAKWIM PEPERIKSAAN PSL 2025", "url": "#" },
      { "text": "EDITAN 2024 BORANG PERMOHONAN PSL", "url": "#" },
      { "text": "EDITAN 2024 BORANG PERMOHONAN EXAM PERKHIDMATAN", "url": "#" }
    ]
  },
  {
    "author": "Norizwan",
    "date": "Thursday, June 8, 2023",
    "title": "SOP Terkini di Portal Kakitangan",
    "category": "General",
    "description": "Sila klik capaian berikut untuk muatturun SOP terkini",
    "links": [
      { "text": "SOP Bilangan 1 Tahun 2024/ K", "url": "#" },
      { "text": "SOP Bilangan 2 Tahun 2024/ K: PROSEDUR PENGELUARAN, PENYERAHAN DAN PEMBATALAN PERMIT PEREDARAN ANTARABANGSA - INTERNATIONAL CIRCULATION PERMIT (ICP)", "url": "#" },
      { "text": "SOP Bilangan 3 Tahun 2024/ K: PROSEDUR PENGURUSAN ADUAN PENGUATKUASA", "url": "#" },
      { "text": "SOP Bilangan 4 Tahun 2024/ D: PROSEDUR PEMBANGUNAN APLIKASI v3.1", "url": "#" },
      { "text": "SOP Bilangan 4 Tahun 2024/ L: PROSEDUR PERMOHONAN PENGGUNAAN SEMULA NOMBOR PENDAFTARAN KENDERAAN YANG TELAH ROSAK ATAU BINASA", "url": "#" },
      { "text": "SOP Bilangan 12 Tahun 2024/ J: PROSEDUR PERMOHONAN PENDAFTARAN BENGKEL MENGECOP SEMULA NOMBOR CASIS DAN NOMBOR ENJIN MOTOR", "url": "#" }
    ]
  },
  {
    "author": "Norizwan",
    "date": "Friday, March 15, 2024",
    "title": "Arahan Jabatan Terkini di Portal Kakitangan",
    "category": "General",
    "description": "Sila klik capaian berikut untuk muatturun Arahan Jabatan terkini",
    "links": [
      { "text": "Arahan Jabatan Bil. 1 Tahun 2024/ L: Prosedur Pengurusan Nombor Pendaftaran Kenderaan", "url": "#" },
      { "text": "Arahan Jabatan Bil. 2 Tahun 2024/ P: Arahan Tetap Pengurusan Kenderaan Jabatan. Jabatan Pengangkutan Jalan Malaysia", "url": "#" },
      { "text": "Arahan Jabatan Bil. 3 Tahun 2024/ S: Pengurusan Senjata Api dan Amunisi Jabatan", "url": "#" }
    ]
  }
];

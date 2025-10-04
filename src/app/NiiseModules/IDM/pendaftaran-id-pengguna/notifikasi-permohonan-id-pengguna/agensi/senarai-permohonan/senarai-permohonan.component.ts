import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
  ButtonModule,
  TableModule,
} from '@coreui/angular';

@Component({
  selector: 'app-senarai-permohonan',
  templateUrl: './senarai-permohonan.component.html',
  styleUrl: './senarai-permohonan.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class SenaraiPermohonanComponent {
  //Modal
  visible: boolean = false;

  tableData = [
    {
      bil: 1,
      image: 'Icon Here',
      nama: "Mohd Nu'Man Bin Mohd Liki",
      noPermohonan: 'IDM/PUTRAJAYAKDND9/12/2022/09/098709',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: '11/02/2022',
      status: 'Baharu',
    },
    {
      bil: 2,
      image: 'Icon Here',
      nama: "Zainul Arif Bin Abu",
      noPermohonan: 'IDM/PUTRAJAYAKDND9/12/2022/08/050655',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: '12/12/2021',
      status: 'Baharu',
    },
    {
      bil: 3,
      image: 'Icon Here',
      nama: "Nur Qistina Binti Harun",
      noPermohonan: 'IDM/PUTRAJAYAKDND9/12/2022/07/050655',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: '03/12/2021',
      status: 'Baharu',
    },
  ];
}

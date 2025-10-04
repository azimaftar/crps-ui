import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent, TableColorDirective, TableDirective } from '@coreui/angular';
import { CoreuiModalComponent } from '../../../../../core/components/coreui-modal/coreui-modal.component';

@Component({
  selector: 'app-senarai-permohonan-ejen-perkapalan',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    TableDirective,
    TableColorDirective,
    FormsModule,
    CoreuiModalComponent
  ],
  templateUrl: './senarai-permohonan-ejen-perkapalan.component.html',
  styleUrl: './senarai-permohonan-ejen-perkapalan.component.scss'
})
export class SenaraiPermohonanEjenPerkapalanComponent {
permohonanList = [
  {
    namaSyarikat: 'Alam Maritim (M) Sdn Bhd',
    pelabuhan: 'Barat',
    statusPermohonan: '',
    catatan: 'Dokumen Tidak Lengkap'
  },
  {
    namaSyarikat: 'Ajang Shipping Sdn Bhd',
    pelabuhan: 'Klang',
    statusPermohonan: 'Lulus',
    catatan: 'Diluluskan'
  },
  {
    namaSyarikat: 'AME Marine Services Sdn Bhd',
    pelabuhan: 'Bintulu',
    statusPermohonan: 'Gagal',
    catatan: 'Tidak Lulus'
  }
];
constructor(private router: Router) {}
generateDecisionLetter() {
  console.log('Decision list:', this.permohonanList);

  // Optional: Navigate to another page or show modal
  this.router.navigate(['/ibc/pengurusan-perkapalan/paparan-surat-keputusan']);
}

//Modal
  openModal: string | null = null;

  open(modalId: string) {
    this.openModal = modalId;
  }

  close() {
    this.openModal = null;
  }
}

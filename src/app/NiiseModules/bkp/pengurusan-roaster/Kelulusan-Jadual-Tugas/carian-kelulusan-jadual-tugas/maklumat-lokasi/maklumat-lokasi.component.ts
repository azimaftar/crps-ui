import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, ButtonModule, TableModule, ButtonDirective, TableDirective, ModalModule } from '@coreui/angular';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { ModalSimpanComponent } from '../../modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from '../../modal-hantar/modal-hantar.component';
import { Router } from '@angular/router';
import { cibBathasu } from '@coreui/icons';
import { DataService } from '../../../../../../services/PengurusanRoster/KelulusanJadualTugas/DataService';
import { PutKelulusanJadualTugasService } from '../../../../../../services/PengurusanRoster/KelulusanJadualTugas/PutKelulusanJadualTugasService';

export interface ReceivedData{
  rowData: any;
  filters: any;
}

@Component({
  selector: 'app-maklumat-lokasi',
  imports: [ContainerComponent, ModalModule, CommonModule, FormsModule, CardModule, ButtonModule, TableModule, ButtonDirective, TableDirective, ContainerComponent, CardBodyComponent, ModalSimpanComponent, ModalHantarComponent],
  templateUrl: './maklumat-lokasi.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ]
})
export class MaklumatLokasiComponent {
  showModalSimpan = false;
  showModalHantar = false;

  formData: any = {
    bahagian: '',
    unit: '',
    kumpulan: '',
    tarikh: '',
    kaunter: '',
    nama: '',
    noPerkhidmatan: '',
    gredJawatan: '',
    kelulusan: '',
    startTime: '',
    endTime: '',
    remarks: '',
    schedule_id: '',
    originalStatus: ''
  };

 constructor(private router: Router, private dataService: DataService, private putKelulusanJadualTugasService: PutKelulusanJadualTugasService) {}

  ngOnInit() {
  const state = this.dataService.getSharedData();
  if (state && state.rowData && state.filters) {
    this.formData = {
      bahagian: state.filters.division_cd,
      unit: state.filters.unit_cd,
      kumpulan: state.filters.group,
      tarikh: state.filters.tarikh,
      kaunter: state.rowData.LokKaunter,
      nama: state.rowData.nama,
      noPerkhidmatan: state.rowData.noPerkhidmatan,
      gredJawatan: state.rowData.gred,
      kelulusan: state.rowData.kelulusan,
      startTime: state.rowData.startTime,
      endTime: state.rowData.endTime,
      remarks: state.rowData.remarks,
      schedule_id : state.rowData.schedule_id,
      originalStatus: state.rowData.originalStatus
    };
    console.log("data", this.formData)

  }
}

ngOnDestroy() {
  this.dataService.clearSharedData();
}

  onKelulusanChange(value: string, event: any) {
    const isChecked = event.target.checked;
    
    if (isChecked) {
        this.formData.kelulusan = value;
    } else {
        // Jika unchecked, set ke null atau empty
        this.formData.kelulusan = '';
    }
}

  onSimpan() {
    const requestData = {
      schedule_id: this.formData.schedule_id,
      Approval_Status: this.formData.kelulusan,
      remarks: this.formData.remarks
    };

    this.putKelulusanJadualTugasService.updateKelulusanJadual(requestData).subscribe({
    next: (response) => {
      console.log('Simpan successful', response);
      this.showModalSimpan = true;
    },
    error: (error) => {
      console.error('Simpan failed', error);
      // Handle error
    }
  });
  }

  onHantar() {
    this.putKelulusanJadualTugasService.activateSchedule(this.formData.schedule_id).subscribe({
      next: (response) => {
        console.log('Hantar successful', response);
            this.showModalHantar = true;
      },
      error: (error) => {
        console.log('Hantar failed', error);
      }
    })
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
    console.log('Modal Hantar closed');
  }
}

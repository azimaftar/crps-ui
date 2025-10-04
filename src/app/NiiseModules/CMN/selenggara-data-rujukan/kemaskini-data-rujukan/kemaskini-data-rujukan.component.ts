import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule,
  GridModule,
  ModalModule,
  ButtonModule,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../buat-carian-data-rujukan/senarai-rujukan-berdasarkan-table/api.service';

interface FieldMapping {
  key: string;
  label: string;
  isEditable: boolean;
}

@Component({
  selector: 'app-kemaskini-data-rujukan',
  templateUrl: './kemaskini-data-rujukan.component.html',
  styleUrls: ['./kemaskini-data-rujukan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ModalModule,
    ButtonModule,
  ],
})
export class KemaskiniDataRujukanComponent implements OnInit {
  tableName!: string;
  refCode!: string;
  detailData: any = {};
  fieldMappings: FieldMapping[] = [];

  showModal: boolean = false;
  modalMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.tableName = this.route.snapshot.paramMap.get('table')!;
    this.refCode = this.route.snapshot.paramMap.get('refCode')!;
    this.loadDetail();
  }

  loadDetail() {
    this.apiService.getValRujukanByKod(this.tableName, this.refCode).subscribe({
      next: (res) => {
        this.detailData = res.data;
        this.prepareFieldMappings();
        console.log('Loaded data:', this.detailData);
      },
      error: (err) => {
        console.error('Error loading detail:', err);
      },
    });
  }

  // Assign dummy values manually
  //Change to this loadDetails and  onSubmit dummyRun
  //   loadDetail() {
  //   this.detailData = {
  //     docCode: 'DOC001',
  //     docBmDesc: 'Deskripsi Bahasa Melayu',
  //     docBiDesc: 'Malay Description',
  //     recSts: '1',
  //     createId: 'admin_user',
  //     createDate: '2025-01-01T00:00:00Z',
  //     updateId: 'admin_user',
  //     updateDate: '2025-01-01T00:00:00Z'
  //   };

  //   this.prepareFieldMappings();
  //   console.log('Loaded dummy data:', this.detailData);
  // }

  getBmDescField(): string | null {
    return this.findFieldByPattern(['BM', 'BM_DESC', 'BMDESC', 'BM_DESCRIPTION', 'BMDESCRIPTION']);
  }

  getBiDescField(): string | null {
    return this.findFieldByPattern(['BI', 'BI_DESC', 'BIDESC', 'BI_DESCRIPTION', 'BIDESCRIPTION', 'EN', 'EN_DESC']);
  }

  private findFieldByPattern(patterns: string[]): string | null {
    const fields = Object.keys(this.detailData);
    
    for (const pattern of patterns) {
      const field = fields.find(f => 
        f.toUpperCase().includes(pattern.toUpperCase()) && 
        (f.toUpperCase().includes('DESC') || f.toUpperCase().includes('DESCRIPTION'))
      );
      
      if (field) {
        return field;
      }
    }
    
    return fields.find(f => 
      f.toUpperCase().includes('DESC') || f.toUpperCase().includes('DESCRIPTION')
    ) || null;
  }

  prepareFieldMappings() {
    const bmField = this.getBmDescField();
    const biField = this.getBiDescField();
    
    this.fieldMappings = Object.keys(this.detailData).map((key) => ({
      key: key,
      label: this.formatLabel(key),
      isEditable: key === bmField || key === biField
    }));
    
    console.log('BM Field:', bmField, 'BI Field:', biField);
    console.log('Field Mappings:', this.fieldMappings);
  }

  formatLabel(key: string): string {
    let formattedKey = key.replace(/^R\d+_/, '');

    formattedKey = formattedKey
      .split('_')
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');

    return formattedKey;
  }

  getRecStsDisplayValue(recStsValue: any): string {
    const status = String(recStsValue);
    return status === '0' ? 'Aktif' : status === '1' ? 'Tidak Aktif' : String(recStsValue);
  }

  goBack() {
    this.router.navigate([
      '/cmn/selenggara-data-rujukan/senarai-rujukan-berdasarkan-table',
    ]);
  }

  onSubmit() {
    const bmField = this.getBmDescField();
    const biField = this.getBiDescField();
    
    const payload = {
      cd: this.detailData.cd || this.refCode,
      refTbl: this.tableName,
      ref: this.detailData.docCode || this.refCode,
      appl: 'N',
      val: {
        ...this.detailData,
        [bmField || 'docBmDesc']: this.detailData[bmField || 'docBmDesc'],
        [biField || 'docBiDesc']: this.detailData[biField || 'docBiDesc'],
        updateId: 'SYSADMIN',
        updateDate: new Date().toISOString(),
      },
    };

    console.log('Sending payload:', payload);

    this.apiService.updateDataRujukan(payload).subscribe({
      next: (res) => {
        console.log('Success:', res);
        this.showSuccessModal('Keputusan telah berjaya disimpan.');
      },
      error: (err) => {
        console.error('Save failed:', err);
        this.showErrorModal('Gagal menyimpan keputusan. Sila cuba lagi.');
      },
    });
  }

  // dummyRun
  //   onSubmit() {
  //   const payload = {
  //     cd: this.detailData.cd || this.refCode,
  //     refTbl: this.tableName,
  //     ref: this.detailData.docCode || this.refCode,
  //     appl: 'N',
  //     val: {
  //       docCode: this.detailData.docCode,
  //       docBmDesc: this.detailData.docBmDesc,
  //       docBiDesc: this.detailData.docBiDesc,
  //       recSts: this.detailData.recSts,
  //       createId: this.detailData.createId,
  //       createDate: this.detailData.createDate,
  //       updateId: 'admin_user',
  //       updateDate: new Date().toISOString()
  //     }
  //   };

  //   console.log('Simulated submit payload:', payload);
  //   this.showSuccessModal('Keputusan telah berjaya disimpan (dummy mode).');
  // }

  showErrorModal(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  showSuccessModal(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    if (this.modalMessage.includes('berjaya')) {
      this.goBack();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, ModalModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-tambah-data-rujukan',
  templateUrl: './tambah-data-rujukan.component.html',
  styleUrl: './tambah-data-rujukan.component.scss',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule, FormsModule, ModalModule],
})
export class TambahDataRujukanComponent {
  tableRujukan: string = '';
  headers: string[] = [];
  dynamicFields: any[] = [];
  formData: any = {};

  showModal: boolean = false;
  modalMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.tableRujukan = params['tableRujukan'] || '';
      this.headers = params['headers'] ? JSON.parse(params['headers']) : [];

      this.prepareDynamicFields();
      this.initializeFormData();
    });
  }

  prepareDynamicFields() {
    this.dynamicFields = this.headers.map((header) => {
      const isDisabled = this.isDisabledField(header);
      const isEditable = this.isEditableField(header);

      return {
        key: header,
        label: this.formatLabel(header),
        disabled: isDisabled,
        editable: isEditable,
        value: '',
      };
    });
  }

  initializeFormData() {
    this.dynamicFields.forEach((field) => {
      this.formData[field.key] = field.value;
    });
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

  isDisabledField(fieldName: string): boolean {
    const disabledFields = [
      'CREATE_ID',
      'CREATE_DATE',
      'UPDATE_ID',
      'UPDATE_DATE',
      'REC_STS',
      'REC_STS_DESC',
      'CREATEID',
      'CREATEDATE',
      'UPDATEID',
      'UPDATEDATE',
      'RECSTS',
    ];
    const upperFieldName = fieldName.toUpperCase();
    return disabledFields.some((disabledField) =>
      upperFieldName.includes(disabledField)
    );
  }

  isEditableField(fieldName: string): boolean {
    return !this.isDisabledField(fieldName);
  }


  simpanMaklumat(): void {
    const tableRujukan = this.tableRujukan;
    const firstKey = this.headers.length > 0 ? this.headers[0] : null;

    const payload1 = {
      refTbl: this.tableRujukan,
      ref: firstKey ? this.formData[firstKey] : null,
      val: this.formData,
      appl: "P",
    };

    const payload: Record<string, any> = this.formData;
    payload['recSts'] = '1';

    this.apiService.postTambahDataRujukan(tableRujukan, payload).subscribe({
      next: () => {
        this.modalMessage = 'Maklumat berjaya disimpan!';
        this.showModal = true;
      },
      error: (error) => {
        console.error('Gagal simpan data:', error);
        this.modalMessage = 'Gagal menyimpan maklumat. Sila cuba lagi.';
        this.showModal = true;
      },
    });

    this.apiService.postPermohonanDataRujukan(payload1).subscribe({
      next: () => {
        this.modalMessage = 'Maklumat berjaya disimpan!';
        this.showModal = true;
      },
      error: (err) => {
        console.error('Gagal simpan data:', err);
        this.modalMessage = 'Gagal menyimpan maklumat. Sila cuba lagi.';
        this.showModal = true;
      }
    });
  }

  clearForm(): void {
    this.initializeFormData();
  }

  closeModal() {
    this.showModal = false;
    if (this.modalMessage.includes('berjaya')) {
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate([
      '/cmn/selenggara-data-rujukan/senarai-rujukan-berdasarkan-table',
    ]);
  }
}

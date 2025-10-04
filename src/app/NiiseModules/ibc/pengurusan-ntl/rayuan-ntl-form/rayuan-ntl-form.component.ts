import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ModalComponent,
  ModalToggleDirective,
  ModalBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastBodyComponent,
  ToastHeaderComponent,
  ModalHeaderComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-rayuan-ntl-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToastComponent,
    ToastBodyComponent,
    ToastHeaderComponent,
    ToasterComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalToggleDirective,
    NotificationModalComponent,
    ButtonDirective,
    FormsModule,
  ],
  templateUrl: './rayuan-ntl-form.component.html',
  styleUrls: ['./rayuan-ntl-form.component.scss'],
})
export class RayuanNtlFormComponent {
  tableHeaders: string[] = ['Bil', 'Keterangan', 'Nama Dokumen', 'Tindakan'];
  showModal = false;
  formData = {
    keterangan: '',
    file: null as File | null,
  };

  tableData: any[] = [];

  submitFormModal() {
    if (this.formData.keterangan && this.formData.file) {
      this.tableData.push({ ...this.formData });
      this.resetFormModal();
      this.showModal = false;
    }
  }

  resetFormModal() {
    this.formData = {
      keterangan: '',
      file: null,
    };
  }

  showToast = false;
  constructor(private cdr: ChangeDetectorRef) {}

  deleteRow(index: number): void {
    this.tableData.splice(index, 1);
    this.tableData.forEach((item, i) => (item.bil = i + 1));
    this.resetFormModal();
    this.showToast = true;
    this.cdr.detectChanges(); // force update

    setTimeout(() => {
      this.showToast = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  viewFile(row: any) {
    if (!row.file) return;

    const fileType = row.file.type;

    if (fileType.startsWith('image/') || fileType === 'application/pdf') {
      const fileURL = URL.createObjectURL(row.file);
      window.open(fileURL);
    } else {
      alert('Fail tidak dapat dipaparkan. Muat turun sebagai gantian.');
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const fileName = file.name.toLowerCase();
      const fileSizeMB = file.size / (1024 * 1024); // in MB
      const fileSizeKB = file.size / 1024; // in KB

      const allowedExtensions = /\.(doc|docx|pdf|xls|xlsx|ppt|jpg|jpeg|png)$/;

      if (!allowedExtensions.test(fileName)) {
        this.showErrorModal(
          'Sila muat naik fail dalam format yang disokong sahaja'
        );
        //'Format tidak disokong. Sila muat naik fail seperti .doc, .docx, .pdf, .xls, .xlsx, .ppt, .jpg, .jpeg, atau .png.'
        input.value = '';
        return;
      }

      const isImage = /\.(jpg|jpeg|png)$/.test(fileName);
      if (isImage && fileSizeKB > 300) {
        this.showErrorModal(
          'Dokumen yang dimuat naik melebihi saiz maksimum yang dibenarkan.'
        );
        //Imej melebihi 300KB. Sila kecilkan saiz imej.
        input.value = '';
        return;
      }

      const isDocument = /\.(doc|docx|pdf|xls|xlsx|ppt)$/.test(fileName);
      if (isDocument && fileSizeMB > 10) {
        this.showErrorModal(
          'Dokumen yang dimuat naik melebihi saiz maksimum yang dibenarkan.'
        );
        input.value = '';
        return;
      }

      this.formData.file = file;
    }
  }
  errorMessage: string = '';
  showError = false;

  showErrorModal(message: string) {
    this.errorMessage = message;
    this.showError = true;
  }

  confirm(): void {
    this.showError = false;
  }




  pengembara = {
    visitorType: '',
    docType: '',
    gender: '',
    docNo: '',
    kpNo: '',
    name: '',
    issueDatePassport: '',
    expiryDate: '',
    age: '',
    nationality: '',
    countryIssue: '',
    status: '',
    categoryNTL: '',
    sebabNTL: '',
    kelayakanRayuan: '',
    catatan: ''
  };
  handleSubmit(form: NgForm) {
    if (!form.valid) {
      this.showErrorModal(
        'Medan mandatori yang bertanda * adalah wajib diisi.'
      );
      return;
    }

    console.log('Form submitted successfully!');
  }
}

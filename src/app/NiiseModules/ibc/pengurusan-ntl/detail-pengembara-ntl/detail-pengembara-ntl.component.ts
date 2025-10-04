import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  selector: 'app-detail-pengembara-ntl',
  imports: [
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
    FormsModule,
    CommonModule,
  ],
  templateUrl: './detail-pengembara-ntl.component.html',
  styleUrl: './detail-pengembara-ntl.component.scss',
})
export class DetailPengembaraNtlComponent {
  pengembara: any = {
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
    keputusanRayuan: '',
    catatan: '',
  };

  tableHeaders = ['Bil', 'Keterangan', 'Nama Fail', 'Tindakan'];
  tableData: Array<{
    keterangan: string;
    file: {
      name: string;
      path: string;
    };
  }> = [];

  errorMessage: string = '';
  showError = false;
  isFormDisabled = false;
  showConfirmation = false;
  showTable = true;
  showButtons = true;

  ngOnInit() {
    const sessionData = sessionStorage.getItem('selectedTraveller');
    if (sessionData) {
      const pengembara = JSON.parse(sessionData);

      // Patch values (some from session, some dummy)
      this.pengembara = {
        visitorType: 'Pelancong',
        docType: 'Passport',
        gender: 'Lelaki',
        docNo: 'A1234567',
        kpNo: pengembara.noPengenalan || '',
        name: pengembara.nama || '',
        issueDatePassport: '2023-01-01',
        expiryDate: '2025-01-01',
        age: '32',
        nationality: 'Malaysia',
        countryIssue: 'Malaysia',
        status: pengembara.status || 'Lulus',
        categoryNTL: pengembara.kategori || 'A - Passport Tidak Sah',
        sebabNTL: pengembara.sebabNTL || 'B01 - Visa tamat tempoh.',
        kelayakanRayuan: pengembara.kelayakan || 'Layak',
        keputusanRayuan: '',
        catatan: 'Tiada',
        keterangan: 'Lesen Contoh',
        file: {
          name: 'lesen_contoh.png',
          path: '/assets/images/lesen_contoh.png', //dummy path
        },
      };
      //     this.apiService.getPengembaraDetails(id).subscribe((response) => {
      // this.pengembara = response;

      // this.tableData = response.documents.map((doc: any) => ({ this when api ready to be integrate with FE
      //   keterangan: doc.keterangan,
      //   file: {
      //     name: doc.filename,
      //     path: doc.url,
      //   },
      // }));
      this.tableData = [
        {
          keterangan: this.pengembara.keterangan,
          file: {
            name: this.pengembara.file.name,
            path: this.pengembara.file.path,
          },
        },
      ];
      this.isFormDisabled = true;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  handleSubmit(form: any) {
    if (form.invalid) {
      this.showErrorModal(
        'Medan mandatori yang bertanda * adalah wajib diisi.'
      );
      console.log('here 1');
      return;
    } else {
      console.log('here 2');
    }
  }

  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }

  showErrorModal(message: string) {
    this.errorMessage = message;
    this.showError = true;
  }

  selectedStatus: boolean | null = null;
  setKelayakanRayuan(status: boolean) {
    this.pengembara.keputusanRayuan = status
      ? 'Diluluskan'
      : 'Tidak Diluluskan';
    //API UPDATE kelayakan rayuan here
    this.selectedStatus = status;
    console.log('Rayuan set to:', this.pengembara.kelayakanRayuan);

    this.showErrorModal(
      `Rayuan ${status ? 'Telah Berjaya' : 'Tidak Berjaya'}.`
    );
    this.showConfirmation = true;
    this.showTable = false;
    this.showButtons = false;
  }

  confirm(): void {
    this.showError = false;
  }

  paparDokumen(): void {
    this.router.navigate(['../papar-dokumen-ntl'], { relativeTo: this.route });
  }

  viewFile(row: any) {
    if (!row.file) return;

    // Assign dummy type if missing (based on file extension)
    let fileType = row.file.type;

    if (!fileType && row.file.name) {
      if (row.file.name.endsWith('.pdf')) {
        fileType = 'application/pdf';
      } else if (row.file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        fileType = 'image/*';
      } else {
        fileType = 'application/octet-stream'; // unknown type
      }
    }

    console.log('here 2');

    if (fileType.startsWith('image/') || fileType === 'application/pdf') {
      // Use static asset path
      const fileURL = row.file.path || `/assets/images/${row.file.name}`;
      window.open(fileURL, '_blank');
    } else {
      this.showErrorModal(
        'Fail tidak dapat dipaparkan. Muat turun sebagai gantian.'
      );
    }
  }
}

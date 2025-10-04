import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconDirective } from '@coreui/icons-angular';
import { SharedModalComponent } from '../../../../../shared-modal/shared-modal.component';
import { MatTableModule } from '@angular/material/table';
import { PermohonanBaruComponent } from '../../permohonan-baru.component';
import { penerimaanpermohonan } from '../../../../../../../services/PermohonanPasPerkahwinanWargaAsing/penerimaanpermohonan.service';
import { PermohonanService } from '../../../../../../../core/services/sec-services/PermohonanPasPerkahwinanWargaAsing.services';
import { HttpClient } from '@angular/common/http';
import { DocumentResponse } from '../../../../../../../core/models/document-response.model';

import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalModule,
} from '@coreui/angular';
import {apiConfig} from "../../../../../../../api.config";

interface DocumentItem {
  Bil: number;
  Keterangan: string;
  fileName: string;
  Format: string;
  file?: File | null; // optional file
  type?: string; // optional type
}

@Component({
  selector: 'app-dokumen-sokongan',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    TableDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    IconDirective,
    SharedModalComponent,
    MatTableModule,
    ModalModule,
  ],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrl:
    '../../../../../pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-pas-perkahwinan-warga-asing.component.scss',
})
export class DokumenSokonganComponent {
  pageTitle: string = 'Dokumen Sokongan';
  currentStep: number = 3;
  displayedColumns: string[] = [
    'Bil',
    'Keterangan',
    'fileName',
    'Format',
    'tindakan',
  ];

  documents: DocumentItem[] = [];
  dataSource = this.documents;

  // Form Data
  nama: string = '';
  jenisDokumen: string = '';
  noDokumen: string = '';
  jantina: string = '';
  nomborTelefon: string = '';
  alamat1: string = '';
  alamat2: string = '';
  alamat3: string = '';
  poskod: string = '';
  bandar: string = '';
  negeri: string = '';
  tujuanPermohonan: string = '';
  sahkanChecked: boolean = false;
  negeriBerlepas: string = '';
  selectedCategory: string = '';

  // Modal
  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  submissionData: any;

  steps = [
    {
      number: 1,
      title: 'Maklumat Pemohon',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru',
    },
    {
      number: 2,
      title: 'Maklumat Pasangan',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/maklumat-pasangan',
    },
    {
      number: 3,
      title: 'Dokumen Sokongan',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/maklumat-pasangan/dokumen-sokongan',
    },
  ];

  jenisDokumenList = ['IC', 'Passport', 'License'];
  jenisJantinaList = ['Lelaki', 'Perempuan', 'Lain-Lain'];
  jenisBandarList = [
    'Alor Setar',
    'Bandar Saujana Utama',
    'Butterworth',
    'Chukai',
    'George Town',
    'Gombak',
    'Ipoh',
    'Johor Bahru',
    'Jitra',
    'Juru',
    'Kangar',
    'Kelang',
    'Klebang',
    'Kota Bharu',
    'Kota Kinabalu',
    'Kuala Terengganu',
    'Kuantan',
    'Kulim',
    'Kulai',
    'Labuan',
    'Lenggong',
    'Melaka',
    'Meru',
    'Nilai',
    'Pagoh',
    'Prai',
    'Puncak',
    'Putrajaya',
    'Seremban',
    'Shah Alam',
    'Tapah',
    'Temerloh',
    'Yan',
  ];
  jenisNegeriList = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Melaka',
    'Negeri Sembilan',
    'Pahang',
    'Perak',
    'Perlis',
    'Pulau Pinang',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private permohonanService: PermohonanService, // ✅ Now matches class name
    private docService: PermohonanService
  ) {}

  private counter: number = 1; // Counter for sequence number

  //////////////////////////////////////////////

  // Function to generate No Rujukan Permohonan
  async generateNoRujukanPermohonan(isDraft: boolean): Promise<string> {
    try {
      const code = isDraft ? 'T0018' : 'T0011';

      // Call your API to get the sequence
      const seqData: any = await this.http
        .get(`${apiConfig.apiUrlSec}/seqCode?code=${code}`)
        .toPromise();

      if (!seqData || seqData.length === 0) {
        throw new Error('Failed to fetch sequence data.');
      }

      const seq = seqData[0]; // Take first record from API

      // Build date part: MM-YY
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear().toString().slice(-2);

      // Construct final No Rujukan Permohonan
      // Format: prefix1 / smdl / MM-YY / seqNo
      return `${seq.R353_PREFIX_1} / ${seq.R353_SMDL} / ${month}-${year} / ${seq.R353_SEQ_NO}`;
    } catch (error) {
      console.error('Error generating Rujukan Permohonan:', error);
      return 'ERROR / SEQ / 0000';
    }
  }

  //////////////////////////////////////////////

  /////////////////////////////////////////////

  uploadFile(index: number): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '*/*';

    fileInput.onchange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        this.handleFile(file, this.documents[index]);
      }
    };

    fileInput.click();
  }

  /////////////////////////////////////////////

  /////////////////////////////////////////////
  // Submit form function into database as
  async saveSubmitForm(isDraft: boolean = true): Promise<void> {
    try {
      const formData = this.permohonanService.getFormData();
      if (!formData) {
        alert('❌ Tiada data untuk dihantar.');
        return;
      }

      // 1️⃣ Generate dynamic No Rujukan Permohonan
      const noRujukan = await this.generateNoRujukanPermohonan(isDraft);

      // 2️⃣ Construct final payload
      const FinalJsonPayLoad = {
        noRujukanPermohonan: noRujukan,
        ...formData,
      };

      console.log(
        '🧠 FINAL PAYLOAD:',
        JSON.stringify(FinalJsonPayLoad, null, 2)
      );

      // 3️⃣ Send to backend
      this.http
        .post(
          '${apiConfig.apiUrlSec}/postDaftarPermohonan2.1',
          FinalJsonPayLoad
        )
        .subscribe({
          next: (res) => {
            console.log('✅ Submission successful', res);
            alert(
              `✅ Data berjaya dihantar sebagai ${
                isDraft ? 'Draft' : 'Official'
              }!`
            );

            // Navigate to different page if needed
            this.router.navigate(['/sec/sl/tambah-sl']);
          },
          error: (err) => {
            console.error('❌ Submission failed', err);
            alert('❌ Gagal menghantar data. Sila cuba lagi.');
          },
        });
    } catch (error) {
      console.error('❌ Error in saveSubmitForm:', error);
      alert('❌ Ralat semasa menjana No Rujukan Permohonan.');
    }
  }

  /////////////////////////////////////////////

  private handleFile(file: File, doc: DocumentItem): void {
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSizeInBytes) {
      alert('❌ File size exceeds 10MB limit. Please upload a smaller file.');
      return;
    }

    doc.file = file;
    doc.fileName = file.name;
    doc.Format = file.name.split('.').pop() || '';
  }

  // Lifecycle hook
  groupedDocuments: { [txnCD: string]: DocumentItem[] } = {};

  ngOnInit(): void {
    this.permohonanService.getMarriageDocuments().subscribe({
      next: (docs: DocumentResponse[]) => {
        const grouped: { [txnCD: string]: DocumentItem[] } = {};

        docs.forEach((d) => {
          const item: DocumentItem = {
            Bil: 0, // temporary
            Keterangan: d.attachName,
            fileName: '',
            Format: '',
            file: null,
            type: d.txnCD,
          };

          if (!grouped[d.txnCD]) {
            grouped[d.txnCD] = [];
          }
          grouped[d.txnCD].push(item);
        });

        // ✅ Recalculate Bil within each group
        Object.keys(grouped).forEach((txnCD) => {
          grouped[txnCD].forEach((item, idx) => {
            item.Bil = idx + 1;
          });
        });

        this.groupedDocuments = grouped;
        console.log('📂 Grouped docs:', this.groupedDocuments);
      },
      error: (err) => console.error('❌ Failed to load docs:', err),
    });
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find((step) => step.number === 1);
    if (step1) this.router.navigate([step1.route]);
  }

  goBack(): void {
    this.router.navigate(['..'], {
      relativeTo: this.route,
    });
  }

  isFormValid(): boolean {
    return (
      !!this.nama &&
      !!this.jenisDokumen &&
      !!this.noDokumen &&
      !!this.jantina &&
      !!this.nomborTelefon &&
      !!this.alamat1 &&
      !!this.poskod &&
      !!this.bandar &&
      !!this.negeri &&
      !!this.tujuanPermohonan &&
      this.sahkanChecked === true
    );
  }

  resetForm(): void {
    this.nama = '';
    this.jenisDokumen = '';
    this.noDokumen = '';
    this.jantina = '';
    this.nomborTelefon = '';
    this.alamat1 = '';
    this.alamat2 = '';
    this.alamat3 = '';
    this.poskod = '';
    this.bandar = '';
    this.negeri = '';
    this.tujuanPermohonan = '';
    this.sahkanChecked = false;
  }

  openSubmitModal(): void {
    const saveData = this.permohonanService.getFormData();
    if (!saveData) return;

    this.modalMessage = 'Adakah anda pasti mahu menghantar permohonan ini?';
    this.modalMode = 'confirm';
    this.modalVisible = true;
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;
    this.saveSubmitForm();
  }

  // Helper to convert file to base64 string
  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]; // Strip data:*/*;base64,
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
  }

  onFileSelected(event: any, element: any): void {
    const file = event.target.files[0];
    if (file) {
      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSizeInBytes) {
        alert('❌ File size exceeds 10MB limit. Please upload a smaller file.');
        return;
      }
      element.file = file;
      element.fileName = file.name;
      element.Format = file.name.split('.').pop();
    }
  }

  // Upload modal state
  uploadModalVisible = false;
  uploadingElement: any = null;
  uploadKeterangan: string = '';
  uploadFileObj: File | null = null;

  openUploadModal(element: any) {
    this.uploadingElement = element;
    this.uploadKeterangan = element.Keterangan || '';
    this.uploadFileObj = null;
    this.uploadModalVisible = true;
  }

  confirmUpload() {
    if (!this.uploadKeterangan || !this.uploadFileObj) {
      return;
    }

    // Build new row object
    const newDoc = {
      Bil: this.getNextBil('T02'),
      Keterangan: this.uploadKeterangan,
      fileName: this.uploadFileObj.name,
      Format: this.getFileExtension(this.uploadFileObj.name),
    };

    // Add to groupedDocuments["T02"]
    if (!this.groupedDocuments['T02']) {
      this.groupedDocuments['T02'] = [];
    }
    this.groupedDocuments['T02'].push(newDoc);

    // Close modal + reset
    this.uploadModalVisible = false;
    this.uploadKeterangan = '';
    this.uploadFileObj = null;
  }

  handleUploadFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadFileObj = input.files[0];
    }
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  getNextBil(key: string): number {
    return this.groupedDocuments[key]?.length + 1 || 1;
  }
}

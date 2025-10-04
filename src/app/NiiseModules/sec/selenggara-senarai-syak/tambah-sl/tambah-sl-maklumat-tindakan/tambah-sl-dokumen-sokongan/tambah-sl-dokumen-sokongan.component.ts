import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormDataService } from '../../../../../../services/form-data.service';
import { IconDirective } from '@coreui/icons-angular';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  Tabs2Module,
} from '@coreui/angular';


@Component({
  selector: 'app-tambah-sl-dokumen-sokongan',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    Tabs2Module,
    IconDirective,
  ],
  templateUrl: './tambah-sl-dokumen-sokongan.component.html',
  styleUrl: './tambah-sl-dokumen-sokongan.component.scss'
})
export class TambahSlDokumenSokonganComponent {
  currentStep = 3;

  noRujukanPermohonan: string = '';
  jenisPermohonan: number = 0; //1: Aktif , 0: Baru

  steps = [
    { number: 1, title: 'Maklumat Peribadi Subjek', route: '/sec/sl/tambah-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/tambah-sl/maklumat-tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/tambah-sl/dokumen-sokonganSL' },
  ];

  documents = [
    { keterangan: 'Permohonan SL', fileName: '', format: '', file: null, type: 'permohonan' },
    { keterangan: 'Salinan Kad Pengenalan', fileName: '', format: '', file: null, type: 'ic' },
  ];

  constructor(
    private router: Router,
    private http: HttpClient,
    private formDataService: FormDataService,
    private route: ActivatedRoute,
  ) {}

  generatenoRujukanPermohonan(): string {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    const randomString = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `APP-${formattedDate}-${randomString}`;
  }

  ngOnInit(): void {
    const data = this.formDataService.getFormData();
    if (!data) {
      console.warn('Form data not found. Redirecting...');
      this.router.navigate(['/sec/sl/tambah-sl']);
    } else {
      console.log('Received form data:', data);
    }
    this.noRujukanPermohonan = this.generatenoRujukanPermohonan();
  }

  uploadFile(index: number): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '*/*';

    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB

        if (file.size > maxSizeInBytes) {
          alert('❌ File size exceeds 10MB limit. Please upload a smaller file.');
          return;
        }

        this.documents[index].file = file;
        this.documents[index].fileName = file.name;
        this.documents[index].format = file.name.split('.').pop();
      }
    };

    fileInput.click();
  }

  async submitForm(): Promise<void> {
    const savedData = this.formDataService.getFormData();
    if (!savedData) return;

    const filePromises = this.documents.map(async (doc, index) => {
      if (!doc.file) return null;

      const base64 = await this.convertToBase64(doc.file);
      return {
        [`attchDocAppl${index + 1}`]: base64,
      };
    });

    const base64Results = await Promise.all(filePromises);

    // Merge all base64 results into one flat object
    const attachments = Object.assign({}, ...base64Results.filter(Boolean));

    const finalJsonPayload = {
      noRujukanPermohonan: this.noRujukanPermohonan,
      jenisPermohonan: this.jenisPermohonan,
      ...savedData,         // all other flat form fields
      ...attachments        // attchDocAppl1, attchDocAppl2, etc.
    };

    console.log("🧠 FINAL PAYLOAD:", JSON.stringify(finalJsonPayload, null, 2));

    this.http.post('${apiConfig.apiUrlSec}/postMaklumatSL', finalJsonPayload).subscribe({
      next: (res) => {
        console.log('✅ Submission successful', res);
        alert('✅ Data berjaya dihantar!');
        this.router.navigate(['/sec/selenggara-senarai-syak/carian-sl']);
      },
      error: (err) => {
        console.error('❌ Submission failed', err);
        alert('❌ Gagal menghantar data. Sila cuba lagi.');
      }
    });
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

  resetForm(): void {
    this.documents.forEach((doc) => {
      doc.file = null;
      doc.fileName = '';
      doc.format = '';
    });
  }

  previousStep(): void {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}

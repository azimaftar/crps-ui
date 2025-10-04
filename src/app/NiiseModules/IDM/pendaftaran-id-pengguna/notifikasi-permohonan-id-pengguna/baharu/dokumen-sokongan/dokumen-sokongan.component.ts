import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from '../../../../shared/reusable-tab/reusable-tab.component';
import { PermohonanDetailService } from '../../../services/permohonan-detail-api.service';

interface DokumenItem {
  id: number;
  namadokumen: string;
  format: string;
  file: File; // store actual file
}

export interface HantarWujudIDPayload {
  j007UsrProTmpDTO: any;
  j008UsrBrnTmpDTO: any;
  j009UsrPtjTmpDTO: any;
  j010UsrRlTmPDTO: any;
  j012UsrExctxnTmpDTO: any;
  j026SupDocDTO?: {
    doc: string; // base64
    type: string;
    nameDoc: string;
  };
}

@Component({
  selector: 'dokumen-sokongan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReusableTabComponent
  ],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: ['./dokumen-sokongan.component.scss'],
})
export class DokumenSokonganComponent implements OnInit {
  dokumenList: DokumenItem[] = [];
  selectedFile: File | null = null;

  currentStep = 4;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  constructor(private router: Router, private permohonanDetailService: PermohonanDetailService) { }

  ngOnInit(): void {
    const draft = this.permohonanDetailService.getDraft();
    console.log('Existing draft from P1-P4:', draft);
  }

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  get paginatedDocuments(): DokumenItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.dokumenList.slice(startIndex, endIndex);
  }

  get totalItems(): number {
    return this.dokumenList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    return `${startIndex}-${endIndex}`;
  }

  removeDocument(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam dokumen ini?')) {
      this.dokumenList = this.dokumenList.filter(item => item.id !== id);
      if (this.paginatedDocuments.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first': this.currentPage = 1; break;
      case 'prev': if (this.currentPage > 1) this.currentPage--; break;
      case 'next': if (this.currentPage < this.totalPages) this.currentPage++; break;
      case 'last': this.currentPage = this.totalPages; break;
    }
    this.goToPageNumber = this.currentPage;
  }

  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      this.goToPageNumber = this.currentPage;
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  goToPrevious(): void {
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-ptj']);
  }

  async goToNext(): Promise<void> {
    console.log('Navigating to Sejarah ID');

    const payload = await this.preparePayload();

    // 🔥 Save draft with document included
    this.permohonanDetailService.setDraft(payload);

    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/sejarah-id']);
  }


  showWujudID(): void {
    alert('Fungsi semakan ID sedia ada akan dilaksanakan.');
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const newItem: DokumenItem = {
        id: Date.now(),
        namadokumen: file.name,
        format: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
        file: file
      };
      this.dokumenList = [newItem]; // only one document allowed
      console.log('File added to table:', newItem);
    }
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  }

  async preparePayload(): Promise<HantarWujudIDPayload> {
    const draft = this.permohonanDetailService.getDraft() || {};
    const payload: HantarWujudIDPayload = { ...draft };

    if (this.dokumenList.length > 0) {
      const docItem = this.dokumenList[0];
      const base64Doc = await this.fileToBase64(docItem.file);

      payload.j026SupDocDTO = {
        doc: base64Doc,
        type: '01',
        nameDoc: docItem.namadokumen
      };

      // 🔑 Save back into draft so Sejarah ID can read it later
      this.permohonanDetailService.setDraft({
        j026SupDocDTO: payload.j026SupDocDTO,
      });
    }

    return payload;
  }


  exportHistory(): void {
    const dataStr = JSON.stringify(this.dokumenList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `dokumen-sokongan-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }
}

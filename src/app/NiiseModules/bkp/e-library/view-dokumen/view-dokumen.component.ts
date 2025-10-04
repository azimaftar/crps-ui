import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, CardTextDirective, CardTitleDirective, ColComponent, RowComponent, ContainerComponent, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, ModalModule, } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SharedFolderService } from '../../../../services/e-library/shared-folder.service';
import { ModalSucessSendSaveComponent } from '../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../modal/modal-sucess-send/modal-sucess-send.component';
import { ELibraryService, MuatNaikDokumenResponse } from '../../../../services/e-library/eLibrary.service';

@Component({
  selector: 'app-view-dokumen',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    BorderDirective,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ContainerComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    ModalSucessSendComponent,
    ModalSucessSendSaveComponent,
    ModalModule,
  ],
  templateUrl: './view-dokumen.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class ViewDokumenComponent implements OnInit {
  dokumenId!: string;
  dokumenData?: MuatNaikDokumenResponse;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eLibraryService: ELibraryService
  ) {}

  ngOnInit(): void {
    // Get the document ID from the route parameter
    this.dokumenId = this.route.snapshot.paramMap.get('id')!;
    
    if (this.dokumenId) {
      console.log('Loading document with ID:', this.dokumenId);
      this.loadDokumenData();
    } else {
      this.error = 'Document ID not found in route';
      console.error('No document ID provided in route parameters');
    }
  }

  private loadDokumenData(): void {
    this.isLoading = true;
    this.error = '';

    // Call backend service
    this.eLibraryService.getDokumenById(this.dokumenId).subscribe({
      next: (response: MuatNaikDokumenResponse) => {
        this.dokumenData = response;
        this.isLoading = false;
        console.log('Document data loaded successfully:', response);
      },
      error: (error) => {
        this.error = 'Failed to load document data';
        this.isLoading = false;
        console.error('Error fetching document:', error);
        
        // Show error message
        alert('Gagal untuk memuatkan maklumat dokumen. Sila cuba lagi.');
      }
    });
  }

  cetakDokumen(): void {
    if (this.dokumenData?.filePath) {
      // Open document in new tab for printing
      window.open(this.dokumenData.filePath, "_blank");
    } else {
      alert('Tiada fail untuk dicetak');
    }
  }

  downloadFile(): void {
    if (this.dokumenData?.filePath && this.dokumenData?.fileName) {
      try {
        // Create a temporary link element for download
        const link = document.createElement("a");
        link.href = this.dokumenData.filePath;
        link.download = this.dokumenData.fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download error:', error);
        alert('Gagal untuk memuat turun fail');
      }
    } else {
      alert('Tiada fail untuk dimuat turun');
    }
  }

  goBack(): void {
    // Navigate back to search results
    this.router.navigate(['bkp/e-library/maklumat-carian']);
  }

  // Helper methods to display user-friendly status text
  getApprovalStatusText(status: string): string {
    switch(status) {
      case 'Y': return 'Diluluskan';
      case 'N': return 'Ditolak';
      case 'P': return 'Menunggu Kelulusan';
      default: return status || 'Tiada Status';
    }
  }

  getRecordStatusText(status: string): string {
    switch(status) {
      case 'A': return 'Aktif';
      case 'I': return 'Tidak Aktif';
      case 'P': return 'Pending';
      case 'D': return 'Dipadam';
      default: return status || 'Tiada Status';
    }
  }
}
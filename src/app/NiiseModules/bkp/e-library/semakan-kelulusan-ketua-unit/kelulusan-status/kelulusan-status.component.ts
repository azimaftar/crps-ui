import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ModalModule,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalSucessSendSaveComponent } from '../../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../../modal/modal-sucess-send/modal-sucess-send.component';
import { BreadcrumbKPOTComponent } from '../breadcrumb-KPOT.component';
import { ELibraryService, MuatNaikDokumenResponse } from '../../../../../services/e-library/eLibrary.service';

@Component({
  selector: 'app-kelulusan-status',
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
      ModalModule,
      ModalSucessSendSaveComponent,
      ModalSucessSendComponent,
      BreadcrumbKPOTComponent,
      FormsModule
    ],
  templateUrl: './kelulusan-status.component.html',
  styleUrls: ['../../../bkp.scss']
})
export class KelulusanStatusComponent implements OnInit {
  kelulusanForm!: FormGroup;
  documentId!: string;
  dokumenData?: MuatNaikDokumenResponse;
  isLoading: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private eLibraryService: ELibraryService
  ) {}

  ngOnInit(): void {
    // Initialize form with proper field names matching your database
    this.kelulusanForm = this.fb.group({
      uid: [''],              // Document UID (readonly)
      fileName: [''],         // File name (readonly)
      staffId: [''],          // Staff ID (readonly)  
      folderName: [''],       // Folder name (readonly)
      uploadDate: [''],       // Upload date (readonly)
      approvalStatus: [''],   // Current approval status (readonly)
      recordStatus: [''],     // Current record status (readonly)
      kelulusan: ['setuju'],  // New approval decision (user can change)
      publish: ['aktif']      // Publish status (user can change)
    });

    // Get document ID from route parameter
    this.documentId = this.route.snapshot.paramMap.get('id')!;
    
    if (this.documentId) {
      this.loadDocumentData();
    } else {
      alert('Tiada ID dokumen. Sila pilih dokumen dari senarai.');
      this.router.navigate(['bkp/e-library/semakan-kelulusan-ketua-unit']);
    }
  }

  private loadDocumentData(): void {
    this.isLoading = true;
    
    // Fetch document data from backend
    this.eLibraryService.getDokumenById(this.documentId).subscribe({
      next: (data: MuatNaikDokumenResponse) => {
        this.dokumenData = data;
        this.populateForm(data);
        this.isLoading = false;
        console.log('Document data loaded for approval:', data);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Failed to load document data:', error);
        alert('Gagal memuatkan data dokumen. Sila cuba lagi.');
        this.router.navigate(['bkp/e-library/semakan-kelulusan-ketua-unit']);
      }
    });
  }

  private populateForm(data: MuatNaikDokumenResponse): void {
    // Populate form with document data
    this.kelulusanForm.patchValue({
      uid: data.uid,
      fileName: data.fileName,
      staffId: data.staffId,
      folderName: data.folderName,
      uploadDate: data.uploadDate,
      approvalStatus: data.approvalStatus,
      recordStatus: data.recordStatus,
      // Default values for user decisions
      kelulusan: data.approvalStatus === 'Y' ? 'setuju' : 'tolak',
      publish: data.recordStatus === 'A' ? 'aktif' : 'tidak-aktif'
    });
  }

  // Stepper props
  currentStep = 2;
  steps = [
    { number: 1, title: 'Semak Kelulusan Ketua Unit', route: 'bkp/e-library/semakan-kelulusan-ketua-unit' },
    { number: 2, title: 'Status Kelulusan', route: 'bkp/e-library/semakan-kelulusan-ketua-unit/kelulusan-status' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }

  // Modal properties
  HantarModalsave = false;
  HantarModalsend = false;

  showHantarModal() {
    this.HantarModalsave = false;
    setTimeout(() => {
      this.HantarModalsave = true;
    }, 0);
  }

  showHantarModalsend() {
    this.HantarModalsend = false;
    setTimeout(() => {
      this.HantarModalsend = true;
    }, 0);
  }

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;
  }

  //Action Methods

  onSimpan(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    console.log('Saving approval decision:', this.kelulusanForm.value);

    // Call backend to save (change status to Pending)
    this.eLibraryService.simpanKelulusan(this.documentId).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        console.log('Save successful:', response);
        this.showHantarModal(); // Show success modal
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Save failed:', error);
        alert('Gagal menyimpan keputusan. Sila cuba lagi.');
      }
    });
  }

  onHantar(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    console.log('Submitting approval decision:', this.kelulusanForm.value);

    // Call backend to submit (finalize the approval)
    this.eLibraryService.hantarKelulusan(this.documentId).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        console.log('Submit successful:', response);
        this.showHantarModalsend(); // Show success modal
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Submit failed:', error);
        alert('Gagal menghantar keputusan. Sila cuba lagi.');
      }
    });
  }

  onSubmit() {
    // This method is called from template, will handle via specific buttons
    console.log('Form submitted:', this.kelulusanForm.value);
  }

  goBack(): void {
    this.router.navigate(['bkp/e-library/semakan-kelulusan-ketua-unit']);
  }

  // Helper methods for display
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
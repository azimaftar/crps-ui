import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ModalSucessSendSaveComponent } from '../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../modal/modal-sucess-send/modal-sucess-send.component';
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
} from '@coreui/angular';
import { ELibraryService, CarianRequest, CarianResponse, KonfigurasiPerananRequest, KonfigurasiPerananResponse, MuatNaikDokumenResponse } from '../../../../services/e-library/eLibrary.service';

// Interface for staff role configuration
interface StaffRoleConfig {
  staffPosition: string;
  downloadStatus: boolean;
  uploadStatus: boolean;  // Upload permission
  viewStatus: boolean;
}

// Interface for document selection
interface DocumentResult {
  uid: string;
  namaDokumen: string;
  tahun: string;
  folderName: string;
  staffId: string;
}

// Extend staff config with local UI 
interface SubmittedGrant extends StaffRoleConfig {
  status: 'Draf' | 'Selesai';
  createDate?: string;
}

@Component({
  selector: 'app-peranan-konfigurasi',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    CommonModule, 
    ModalSucessSendSaveComponent, 
    ModalSucessSendComponent
  ],
  templateUrl: './peranan-konfigurasi.component.html',
  styleUrls: ['../../bkp.scss']
})
export class PerananKonfigurasiComponent implements OnInit {
  searchForm!: FormGroup;

  // Component state
  isLoading = false;
  carianDone = false;
  message = '';
  isSubmitting = false;
  
  // Search results and selected document
  searchResults: DocumentResult[] = [];
  selectedDocument?: DocumentResult;
  selectedDocumentDetails?: MuatNaikDokumenResponse;

  // Available grades (from service)
  availableGrades: string[] = [];

  // The per-grade "new" object used by the Add UI
  newGrant: StaffRoleConfig = {
    staffPosition: '',
    downloadStatus: false,
    uploadStatus: false,
    viewStatus: false
  };

  // Local array of submitted grants
  submittedGrants: SubmittedGrant[] = [];

  // Modal states
  HantarModalsave = false;
  HantarModalsend = false;

  // For editing (index) - null means adding new
  editingIndex: number | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private eLibraryService: ELibraryService
  ) {}

  ngOnInit(): void {
    this.loadStaffPosition();

    // initialize FormGroup
    this.searchForm = this.fb.group({
      Doc_Name: [''],
      Doc_number: [''],
      Doc_year: ['']
    });
  }

  // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Set Peranan Konfigurasi', route: 'bkp/e-library/peranan-konfigurasi' },
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

  private loadStaffPosition(): void {
    this.eLibraryService.getStaffPosition().subscribe({
      next: (grades) => {
        this.availableGrades = grades;
        //no longer auto-create perananPegawai for every grade.
      },
      error: (error) => {
        console.error('Failed to load staff grades:', error);
        this.availableGrades = ['Gred 11', 'Gred 14', 'Gred 19', 'Gred 22', 'Gred 29', 'Gred 41', 'Gred 44', 'Gred 48', 'Gred 52', 'Gred 54'];
      }
    });
  }

  //Search & select document 
  onCari(): void {
    const { Doc_Name, Doc_number, Doc_year } = this.searchForm.value;

    if (!Doc_Name && !Doc_number && !Doc_year) {
      alert('Sila masukkan sekurang-kurangnya satu kriteria carian.');
      return;
    }

    this.isLoading = true;
    this.searchResults = [];
    this.selectedDocument = undefined;
    this.carianDone = false;

    const searchRequest: CarianRequest = {
      namaDokumen: Doc_Name || undefined,
      nomborDokumen: Doc_number || undefined,
      tahun: Doc_year ? Doc_year.toString() : undefined
    };

    this.eLibraryService.carianDokumen(searchRequest).subscribe({
      next: (response: CarianResponse[]) => {
        this.isLoading = false;
        this.searchResults = response.map(item => ({
          uid: item.uid,
          namaDokumen: item.namaDokumen,
          tahun: item.tahun,
          folderName: item.folderName,
          staffId: item.staffId
        }));
        if (this.searchResults.length === 0) {
          alert('Tiada dokumen dijumpai. Sila cuba dengan kriteria carian lain.');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Search error:', error);
        alert('Gagal mencari dokumen. Sila cuba lagi.');
      }
    });
  }

  onReset(): void {
      this.searchForm.reset();  
      this.searchResults = [];
      this.selectedDocument = undefined;
      this.selectedDocumentDetails = undefined;
      this.carianDone = false;
      this.message = '';
      this.submittedGrants = [];
      this.newGrant = { staffPosition: '', downloadStatus: false, uploadStatus: false, viewStatus: false };
      this.editingIndex = null;
  }

  private loadDocumentDetails(documentId: string): void {
    this.eLibraryService.getDokumenById(documentId).subscribe({
      next: (details) => {
        this.selectedDocumentDetails = details;
      },
      error: (error) => {
        console.error('Failed to load document details:', error);
      }
    });
  }

 private loadExistingRoleConfiguration(documentId: string): void {
  this.eLibraryService.getKonfigurasiPeranan(documentId).subscribe({
    next: (existingConfig: KonfigurasiPerananResponse[]) => {
      // Compare Integer properly (1 = true, 0 = false)
      this.submittedGrants = existingConfig.map(cfg => ({
        staffPosition: cfg.staffPosition,
        downloadStatus: cfg.downloadStatus === 1,  // Integer comparison
        uploadStatus: false,  // Not in backend yet
        viewStatus: cfg.viewStatus === 'Y',       // String comparison
        status: cfg.recordStatus === 'A' ? 'Selesai' : 'Draf',
        createDate: cfg.createDate
      }));
      
      console.log('Loaded existing permissions:', this.submittedGrants);
    },
    error: (error) => {
      console.log('No existing config found:', error);
      this.submittedGrants = [];
    }
  });
}

  //LOCAL UI: Add/Edit/Remove grants in local array
  isGradeAdded(grade: string): boolean {
  return this.submittedGrants.some(g => g.staffPosition === grade);
}

  addGrantToList(): void {
  // validation
  if (!this.newGrant.staffPosition) {
    alert('Sila pilih gred pegawai.');
    return;
  }
  if (!this.newGrant.downloadStatus && !this.newGrant.uploadStatus && !this.newGrant.viewStatus) {
    alert('Sila pilih sekurang-kurangnya satu kebenaran (Download / Upload / View).');
    return;
  }

  // ✅ ADD THIS: Check if grade already exists (only when not editing)
  if (this.editingIndex === null && this.isGradeAdded(this.newGrant.staffPosition)) {
    alert(`Gred ${this.newGrant.staffPosition} sudah wujud. Sila gunakan butang Edit untuk mengubah.`);
    return;
  }

  if (this.editingIndex === null) {
    // Add new
    const toAdd: SubmittedGrant = {
      ...this.newGrant,
      status: 'Draf',
      createDate: new Date().toISOString()
    };
    this.submittedGrants.push(toAdd);
    this.message = `Gred ${toAdd.staffPosition} ditambah ke senarai (Draf).`;
  } else {
    // Update existing
    this.submittedGrants[this.editingIndex] = {
      ...this.newGrant,
      status: this.submittedGrants[this.editingIndex].status,
      createDate: this.submittedGrants[this.editingIndex].createDate
    };
    this.message = `Gred ${this.newGrant.staffPosition} dikemaskini.`;
    this.editingIndex = null;
  }

  // reset form
  this.newGrant = { staffPosition: '', downloadStatus: false, uploadStatus: false, viewStatus: false };
}

  editGrant(index: number): void {
    const selected = this.submittedGrants[index];
    // pre-fill newGrant fields for editing
    this.newGrant = {
      staffPosition: selected.staffPosition,
      downloadStatus: selected.downloadStatus,
      uploadStatus: selected.uploadStatus,
      viewStatus: selected.viewStatus
    };
    this.editingIndex = index;
  }

  removeGrant(index: number): void {
    const removed = this.submittedGrants.splice(index, 1)[0];
    this.message = `Gred ${removed.staffPosition} dibuang dari senarai.`;
    // if editing the same row, reset editing
    if (this.editingIndex !== null && this.editingIndex === index) {
      this.editingIndex = null;
      this.newGrant = { staffPosition: '', downloadStatus: false, uploadStatus: false, viewStatus: false };
    }
  }

  onSimpan(): void {
  if (!this.selectedDocument) {
    alert('Sila pilih dokumen terlebih dahulu.');
    return;
  }
  if (this.submittedGrants.length === 0) {
    alert('Tiada grant untuk disimpan.');
    return;
  }

  this.isSubmitting = true;

  //call backend API for each grant
  const savePromises = this.submittedGrants.map(grant => {
    const payload: KonfigurasiPerananRequest = {
      documentId: this.selectedDocument!.uid,
      staffPosition: grant.staffPosition,
      downloadStatus: grant.downloadStatus ? 1 : 0,  // Integer: 1=yes, 0=no
      printStatus: 0,  // Set to 0 for now (upload not in backend yet)
      viewStatus: grant.viewStatus ? 'Y' : 'N'       // String: Y/N
    };

    return this.eLibraryService.setKonfigurasiPeranan(payload, 'ADMIN').toPromise();
  });

  Promise.all(savePromises).then(
    (responses) => {
      this.isSubmitting = false;
      console.log('Saved to database:', responses);
      
      this.submittedGrants = this.submittedGrants.map(g => ({ ...g, status: 'Draf' }));
      this.message = 'Konfigurasi peranan berjaya disimpan ke database!';
      this.showHantarModal();
    },
    (error) => {
      this.isSubmitting = false;
      console.error('Failed:', error);
      alert('Gagal menyimpan. Error: ' + JSON.stringify(error));
    }
  );
}

onHantar(): void {
  if (!this.selectedDocument) {
    alert('Sila pilih dokumen terlebih dahulu.');
    return;
  }
  if (this.submittedGrants.length === 0) {
    alert('Tiada grant untuk dihantar.');
    return;
  }

  this.isSubmitting = true;

  //call backend API for each grant
  const submitPromises = this.submittedGrants.map(grant => {
    const payload: KonfigurasiPerananRequest = {
      documentId: this.selectedDocument!.uid,
      staffPosition: grant.staffPosition,
      downloadStatus: grant.downloadStatus ? 1 : 0,  
      printStatus: 0,  
      viewStatus: grant.viewStatus ? 'Y' : 'N'       
    };

    return this.eLibraryService.setKonfigurasiPeranan(payload, 'ADMIN').toPromise();
  });

  Promise.all(submitPromises).then(
    (responses) => {
      this.isSubmitting = false;
      console.log('Submitted to database:', responses);
      
      this.submittedGrants = this.submittedGrants.map(g => ({ ...g, status: 'Selesai' }));
      this.message = 'Konfigurasi peranan berjaya dihantar ke database';
      this.showHantarModalsend();
    },
    (error) => {
      this.isSubmitting = false;
      console.error('Failed:', error);
      alert('Gagal menghantar. Error: ' + JSON.stringify(error));
    }
  );
}

  // Modal helpers
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

  onSelectDocument(doc: DocumentResult): void {
  this.selectedDocument = doc;
  this.carianDone = true;
  this.loadDocumentDetails(doc.uid);
  this.loadExistingRoleConfiguration(doc.uid);
}
 
}

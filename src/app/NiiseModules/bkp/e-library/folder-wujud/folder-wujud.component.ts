import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, CardTextDirective, CardTitleDirective, ColComponent, RowComponent, ContainerComponent, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, ModalModule, } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SharedFolderService } from '../../../../services/e-library/shared-folder.service';
import { ModalSucessSendSaveComponent } from '../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../modal/modal-sucess-send/modal-sucess-send.component';
import { ELibraryService, PostMuatNaikDokumenRequest, MuatNaikDokumenResponse } from '../../../../services/e-library/eLibrary.service';

@Component({
  selector: 'app-folder-wujud',
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
  templateUrl: './folder-wujud.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class FolderWujudComponent implements OnInit {
  // Reactive Form
  folderWujudForm!: FormGroup;

  // upload file
  selectedFile: File | null = null;
  selectedFileName: string | null = null;

  // uploaded file state
  uploadedData: any = null;
  uploadedFileLink: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedFolderService: SharedFolderService,
    private route: ActivatedRoute,
    private eLibraryService: ELibraryService 
  ) {}

  errorMessage: string = '';

  // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Muat Naik Fail', route: 'bkp/e-library/folder-wujud' },
    // { number: 2, title: 'Maklumat Subjek', route: '' },
    // { number: 3, title: 'Maklumat Terperinci', route: '' },
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
  //end of stepper

  // untuk modalsave(SIMPAN MODAL)
  HantarModalsave = false;

  showHantarModal() {
    // Reset and reopen to ensure visibility
    this.HantarModalsave = false;
    setTimeout(() => {
      this.HantarModalsave = true;
    }, 0); // Short delay allows Angular change detection to register state change
  }

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;
  }
  // modal end save

  //modal send(HANTAR MODAL)
  HantarModalsend = false;

  showHantarModalsend() {
    // Reset and reopen to ensure visibility
    this.HantarModalsend = false;
    setTimeout(() => {
      this.HantarModalsend = true;
    }, 0); // Short delay allows Angular change detection to register state change
  }
  // modal end send

// For SIMPAN modal
simpanPermohonan() {
  if (this.uploadedData?.backendResponse?.uid) {
    this.eLibraryService.simpanPermohonan(this.uploadedData.backendResponse.uid).subscribe({
      next: (response) => {
        this.closeModal();
      },
      error: (error) => {
        this.errorMessage = "Gagal untuk simpan permohonan.";
        console.error('Save error:', error);
      }
    });
  }
}

// For HANTAR modal  
hantarPermohonan() {
  if (this.uploadedData?.backendResponse?.uid) {
    this.eLibraryService.hantarPermohonan(this.uploadedData.backendResponse.uid).subscribe({
      next: (response) => {
        this.closeModal();
      },
      error: (error) => {
        this.errorMessage = "Gagal untuk hantar permohonan.";
        console.error('Submit error:', error);
      }
    });
  }
}

  //validator dalam component for date
  futureDateValidator() {
    return (control: any) => {
      if (!control.value) return null;
      const inputDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return inputDate < today ? { pastDate: true } : null;
    };
  }

  ngOnInit(): void {
    // Initialize form with default values, validators
    this.folderWujudForm = this.fb.group({
      Staff_name: ['', Validators.required],
      // Bahagian: ['', Validators.required],
      fileName: [{ value: '', disabled: true }],
      selectedFolder: [{ value: '', disabled: true }, Validators.required],
      // Doc_type: ['', Validators.required],
      Upload_time: ['',Validators.required],
      Upload_date: ['', [Validators.required, this.futureDateValidator()]]
    });

    // Auto update folder when selected from service
    this.sharedFolderService.selectedFolder$.subscribe((folder: string) => {
      this.folderWujudForm.patchValue({ selectedFolder: folder });
    });

    // Auto fill from cipta-folder (query param)
    this.route.queryParams.subscribe(params => {
      const folder = params['folder'];
      if (folder) {
        this.folderWujudForm.patchValue({ selectedFolder: folder });
      }
    });
  }

  onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (!file) {
    this.selectedFile = null;
    return;
  }

  // Allowed file types
  const allowedTypes = [
    'application/pdf', // PDF
    'image/jpeg', 'image/png', 'image/gif', // Images
    'video/mp4', 'video/avi', 'video/mov'   // Videos
  ];

  if (!allowedTypes.includes(file.type)) {
    alert('Hanya PDF untuk dokumen, atau fail imej/video dibenarkan.');
    event.target.value = ''; // reset input
    this.selectedFile = null;
    this.selectedFileName = null;
    this.folderWujudForm.get('fileName')?.reset();
    return;
  }

  // Set selected file + name
  this.selectedFile = file;
  this.selectedFileName = file.name;

  // 🔑 Remove extension
  const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, '');

  // Save into form control (so DB won’t store extension)
  this.folderWujudForm.get('fileName')?.setValue(fileNameWithoutExt);
}

 // submit
muatNaikFW() {
  if (this.folderWujudForm.invalid || !this.selectedFile) {
    this.folderWujudForm.markAllAsTouched(); // highlight invalid fields
    this.errorMessage = "Sila isi semua maklumat yang diperlukan dan pilih fail.";
    return;
  }
  
  this.errorMessage = "";
  
  // Prepare request data for backend
  const requestData: PostMuatNaikDokumenRequest = {
    staffId: this.folderWujudForm.get('Staff_name')?.value,
    folderName: this.folderWujudForm.get('selectedFolder')?.value,
    fileName: this.folderWujudForm.get('fileName')?.value,
    filePath: `/uploads/${this.selectedFile.name}`
  };

  // Call backend API
  this.eLibraryService.postMuatNaikDokumen(requestData).subscribe({
    next: (response: MuatNaikDokumenResponse) => {
      alert("Berjaya untuk muat naik");
      
      // Use backend response
      this.uploadedData = {
        staff: response.staffId,
        folder: response.folderName,
        type: this.folderWujudForm.get('Doc_type')?.value,
        time: new Date().toLocaleTimeString(),
        date: new Date().toISOString().split("T")[0],
        fileName: response.fileName,
        fileLink: URL.createObjectURL(this.selectedFile!),
        backendResponse: response  // Store full backend response
      };

      this.fillFormWithUploadedData();
    },
    error: (error) => {
      this.errorMessage = "Gagal untuk muat naik dokumen. Sila cuba lagi.";
      console.error('Upload error:', error);
    }
  });
}

  private fillFormWithUploadedData() {
    this.folderWujudForm.patchValue({
      Staff_name: this.uploadedData.staff,
      selectedFolder: this.uploadedData.folder,
      Doc_type: this.uploadedData.type,
      Upload_time: this.uploadedData.time,
      Upload_date: this.uploadedData.date
    });

    this.uploadedFileLink = this.uploadedData.fileLink;
  }
  get hasUploaded(): boolean {
    return this.uploadedData !== null;
  }
}
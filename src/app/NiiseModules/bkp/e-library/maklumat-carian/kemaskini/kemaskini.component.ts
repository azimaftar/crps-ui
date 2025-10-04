import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ELibraryService, PostMuatNaikDokumenRequest, MuatNaikDokumenResponse } from '../../../../../services/e-library/eLibrary.service';
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
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kemaskini',
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
  ],
  templateUrl: './kemaskini.component.html',
  styleUrls: ['../../../bkp.scss']
})
export class KemaskiniComponent implements OnInit {
  kemaskiniForm: FormGroup;
  documentId!: string;
  originalData?: any;
  isLoading: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private eLibraryService: ELibraryService
  ) {
    // Form field names must match HTML
    this.kemaskiniForm = this.fb.group({
      Staff_name: ['', Validators.required],      // staffId in backend
      doc_Name: ['', Validators.required],        // folderName in backend  
      fileName: ['', Validators.required],        // fileName in backend
      Upload_date: ['', Validators.required],
      Upload_time: ['', Validators.required],     //upload datetime
    });
  }

  // Stepper props
  currentStep = 2; 
  steps = [
    { number: 1, title: 'Maklumat Carian Dokumen', route: 'bkp/e-library/maklumat-carian' },
    { number: 2, title: 'Kemas kini', route: 'bkp/e-library/maklumat-carian/kemaskini' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
   navigateTo(step: any) {
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }
  //end stepper


  ngOnInit(): void {
    // Get document ID from route parameters
    this.documentId = this.route.snapshot.paramMap.get('id')!;
    
    if (!this.documentId) {
      // If no ID try to get from query params (from search page)
      this.route.queryParams.subscribe(params => {
        if (params['uid']) {
          this.documentId = params['uid'];
          this.loadDocumentData();
        } else {
          alert('Tiada ID dokumen. Sila pilih dokumen dari senarai carian.');
          this.router.navigate(['bkp/e-library/maklumat-carian']);
        }
      });
    } else {
      this.loadDocumentData();
    }
  }

  private loadDocumentData(): void {
    this.isLoading = true;
    
    // Fetch existing document data from backend
    this.eLibraryService.getDokumenById(this.documentId).subscribe({
      next: (data: MuatNaikDokumenResponse) => {
        this.originalData = data;
        this.populateForm(data);
        this.isLoading = false;
        console.log('Document data loaded for editing:', data);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Failed to load document data:', error);
        alert('Gagal memuatkan data dokumen. Sila cuba lagi.');
        this.router.navigate(['bkp/e-library/maklumat-carian']);
      }
    });
  }

  private populateForm(data: MuatNaikDokumenResponse): void {
  // These must be declared INSIDE the function
  const uploadDateTime = new Date(data.uploadDate);
  const dateOnly = uploadDateTime.toISOString().split('T')[0];
  const timeOnly = uploadDateTime.toTimeString().slice(0, 5);
  
  this.kemaskiniForm.patchValue({
    Staff_name: data.staffId || '',
    doc_Name: data.folderName || '',
    fileName: data.fileName || '',
    Upload_date: dateOnly,
    Upload_time: timeOnly
  });
}

  // Kemaskini Button 
 kemaskini(): void {
  if (this.kemaskiniForm.invalid) {
    alert('Sila lengkapkan semua maklumat yang diperlukan.');
    return;
  }

  if (this.isSubmitting) {
    return;
  }

  this.isSubmitting = true;
  
  const formValue = this.kemaskiniForm.value;

  // Don't include uploadDate if backend doesn't support it
  const payload: PostMuatNaikDokumenRequest = {
    staffId: formValue.Staff_name,
    folderName: formValue.doc_Name,
    fileName: formValue.fileName,
    filePath: this.originalData?.filePath || ''
    // uploadDate removed
  };

  this.eLibraryService.kemaskiniMaklumat(this.documentId, payload).subscribe({
    next: (response) => {
      this.isSubmitting = false;
      alert('Dokumen berjaya dikemaskini!');
      this.router.navigate(['bkp/e-library/maklumat-carian']);
    },
    error: (error) => {
      this.isSubmitting = false;
      alert('Kemaskini gagal. Sila cuba lagi.');
    }
  });
}
  //Navigation Methods
  goBack(): void {
    this.router.navigate(['bkp/e-library/maklumat-carian']);
  }

  //Utility Methods
  isFormFieldInvalid(fieldName: string): boolean {
    const field = this.kemaskiniForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
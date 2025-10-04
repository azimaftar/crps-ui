import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ColComponent, RowComponent } from '@coreui/angular';
import { ModalModule, ButtonModule, ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent, } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
// import { AuthService } from 'src/app/core/services/auth.service';



interface Subject {
  noKP: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tanggalLahir: string;
  jenisKelamin: string;
  status: string;
  NoRujukan: string;
}

@Component({
  selector: 'app-carian-subjek',
  templateUrl: './carian-subjek.component.html',
  styleUrls: [
    '../pengurusan-senarai-syak.component.scss'
  ],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ColComponent,
    RowComponent,
  ]
})
export class CarianComponentKP implements OnInit {
  static title: string = "Carian Subjek";
  
  // Stepper properties
  currentStep: number = 1;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '/sec/sl/carian-subjek' },
    { number: 2, title: 'Maklumat Subjek', route: '' },
    { number: 3, title: 'Maklumat Terperinci', route: '' },
  ];

  // private authService = inject(AuthService);
  private router = inject(Router);
  
  // Search form properties
  selectedCategory: string = '';
  searchText: string = '';
  searchNama: string = '';
  searchWarganegara: string = '';
  searchTarikhLahir: string = '';
  searchNoKP: string = '';
  searchNoDokumen: string = '';
  searchNoRujukan: string = '';

  // Categories for dropdown
  categories: string[] = [
    'Sila Pilih',
    'Warganegara',
    'WargaAsing',
    'No Rujukan',
  ];

  // Subject list
  subjects: Subject[] = [];

  // Modal properties
  showNoRecordModal: boolean = false; //model for SEC-S001
  modalVisible: boolean = false;
  modalMessage: string = '';
  modalType: 'confirmation' | 'success' | 'noRecord' = 'noRecord';
  currentAction: 'batal' | 'lupus' | null = null;
  selectedSubjectForAction: Subject | null = null;

  // New properties for Lupus functionality
  showLupusForm: boolean = false;
  lupusCatatan: string = '';
  pendingLupusSubject: Subject | null = null;

  constructor() { }

  ngOnInit(): void {
    // Initialize component
    this.loadInitialData();
  }

  loadInitialData(): void {
    // You can load initial data here if needed
    // Example: this.loadSubjects();
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    console.log('Category changed to:', this.selectedCategory);
  }

  onSearch(): void {
    // Implement search logic here
    if (!this.searchText.trim()) {
      console.log('Please enter search text');
    
      return;
    }

    console.log('Searching for:', this.searchText, 'in category:', this.selectedCategory);

    // Example search implementation
    this.performSearch();
  }

  performSearch(): void {
    const mockSubjects: Subject[] = [
      {
        noKP: '991202101234',
        noDokumen: 'A1234567',
        warganegara: 'MY',
        nama: 'mohamad raziq',
        tanggalLahir: '01/01/1990',
        jenisKelamin: 'LELAKI',
        status: 'AKTIF',
        NoRujukan: '12345678910'
      },
      {
        noKP: '991202101234',
        noDokumen: 'A1234567',
        warganegara: 'MY',
        nama: 'mohamad raziq',
        tanggalLahir: '01/01/1990',
        jenisKelamin: 'LELAKI',
        status: 'Baru',
        NoRujukan: '12345678910'
      },
      {
        noKP: '987654321098',
        noDokumen: 'B7654321',
        warganegara: 'MY',
        nama: 'SITI FATIMAH BINTI HASSAN',
        tanggalLahir: '15/05/1985',
        jenisKelamin: 'PEREMPUAN',
        status: 'AKTIF',
        NoRujukan: '12345678901'
      },
      {
        noKP: '',
        noDokumen: 'B7654321',
        warganegara: 'IDN',
        nama: 'ali siti BINTI HASSAN',
        tanggalLahir: '15/05/1985',
        jenisKelamin: 'PEREMPUAN',
        status: 'AKTIF',
        NoRujukan: '01123456789'
      }
    ];

    // Filter logic based on selectedCategory
    this.subjects = mockSubjects.filter(subject => {
      switch (this.selectedCategory) {
        case 'No Rujukan':
          return subject.NoRujukan.includes(this.searchNoRujukan || '');
        case 'Nama':
          return subject.nama.toLowerCase().includes((this.searchNama || '').toLowerCase());
        case 'Warganegara':
          return subject.noKP.toLowerCase().includes((this.searchText || ''));
        default:
          // Advanced search when category is not specific
          return (
            (!this.searchNama || subject.nama.toLowerCase().includes(this.searchNama.toLowerCase())) &&
            (!this.searchWarganegara || subject.warganegara.toLowerCase().includes(this.searchWarganegara.toLowerCase())) &&
            (!this.searchTarikhLahir || subject.tanggalLahir.includes(this.searchTarikhLahir)) &&
            (!this.searchNoRujukan || subject.NoRujukan.includes(this.searchNoRujukan)) &&
            (!this.searchNoKP || subject.noKP.toLowerCase().includes(this.searchNoKP.toLowerCase()))
          );
      }
    });
    this.showNoRecordModal = this.subjects.length === 0;//model for SEC-S001
  }

  closeModal(): void {//model for SEC-S001
    this.showNoRecordModal = false;
  }

  Papar() {//SEC 01.1-4
    this.router.navigate(['/sec/sl/papar-subjek']);
  }

  Pinda() {//Navigate to Pinda page
    this.router.navigate(['/sec/pengurusan-senarai-syak/carian-subjek/pinda-subjek']);
  }

  // New methods for handling Batal and Lupus actions
  onBatal() {
    this.router.navigate(['/sec/sl/batal']);
  }

  onLupus(subject: Subject): void {
    // Show the Lupus form instead of modal
    this.showLupusForm = true;
    this.pendingLupusSubject = subject;
    this.lupusCatatan = ''; // Reset catatan field
  }

  onCancelLupus(): void {
    // Cancel Lupus action and hide form
    this.showLupusForm = false;
    this.pendingLupusSubject = null;
    this.lupusCatatan = '';
  }

  onModalYa(): void {
    if (this.currentAction === 'batal') {
      this.performBatal();
    }
  }

  onModalTidak(): void {
    // Cancel the action and close modal
    this.modalVisible = false;
    this.currentAction = null;
    this.selectedSubjectForAction = null;
  }

  performBatal(): void {
    // Implement the actual batal logic here
    console.log('Batalkan subject:', this.selectedSubjectForAction);
    
    // Show success message
    this.modalType = 'success';
    this.modalMessage = 'Rekod telah berjaya dibatalkan';
    
    // You can also remove the subject from the list or update its status
    // this.subjects = this.subjects.filter(s => s !== this.selectedSubjectForAction);
  }

  performLupus(): void {
    // Implement the actual lupus logic here
    console.log('Lupuskan subject:', this.pendingLupusSubject);
    console.log('Catatan:', this.lupusCatatan);
    
    // Show success message
    this.modalType = 'success';
    this.modalMessage = 'Rekod telah berjaya dilupuskan';
    this.modalVisible = true;
    
    // Hide the lupus form
    this.showLupusForm = false;
    this.pendingLupusSubject = null;
    this.lupusCatatan = '';
    
    // You can also remove the subject from the list
    // this.subjects = this.subjects.filter(s => s !== this.pendingLupusSubject);
  }

  onModalOk(): void {
    this.modalVisible = false;
    this.currentAction = null;
    this.selectedSubjectForAction = null;
    
    // Optionally refresh the subject list after successful action
    if (this.modalType === 'success') {
      // this.performSearch(); // Refresh the list
    }
  }

  addNewSubject(): void {
    // Implement add new subject logic
    console.log('Adding new subject');

    // You might want to navigate to a new subject form
    // or open a modal dialog

    // Example: Navigate to next step
    this.goToNextStep();
  }

  onSetSemula(): void {
    // Reset form
    this.selectedCategory = 'Kategori Carian';
    this.searchText = '';
    this.subjects = [];
    // Also reset lupus form if shown
    this.showLupusForm = false;
    this.pendingLupusSubject = null;
    this.lupusCatatan = '';
    console.log('Form reset');
  }

  onKembali(): void {
    // Go back logic
    console.log('Going back');

    // You might want to navigate to previous page
    // this.router.navigate(['/previous-page']);
  }

  onNext(): void {
    // Proceed to next step
    console.log('Going to next step');
    this.goToNextStep();
  }

  onHantar(): void {
    // Handle Hantar button click
    if (this.showLupusForm && this.lupusCatatan.trim()) {
      // If lupus form is shown and catatan is filled, proceed with lupus
      this.currentAction = 'lupus';
      this.modalType = 'confirmation';
      this.modalMessage = 'Adakah anda pasti?';
      this.modalVisible = true;
    } else {
      // Handle normal Hantar functionality
      console.log('Normal Hantar functionality');
    }
  }

  // Updated onModalYa to handle lupus confirmation
  onModalYaUpdated(): void {
    if (this.currentAction === 'batal') {
      this.performBatal();
    } else if (this.currentAction === 'lupus') {
      this.performLupus();
    }
  }

  goToNextStep(): void {
    // Update current step
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }

    // You might want to navigate to next component
    // this.router.navigate(['/next-step']);
  }

  goToPreviousStep(): void {
    // Update current step
    if (this.currentStep > 1) {
      this.currentStep--;
    }

    // You might want to navigate to previous component
    // this.router.navigate(['/previous-step']);
  }

  selectSubject(subject: Subject): void {
    // Handle subject selection
    console.log('Selected subject:', subject);

    // You might want to store selected subject and navigate
    // this.subjectService.setSelectedSubject(subject);
    // this.goToNextStep();
  }
}
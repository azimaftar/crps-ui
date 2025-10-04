import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BreadcrumbpemerhatianComponent } from './tambah-kes-pemerhatian/breadcrumb-pemerhatian.component';
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
  selector: 'app-carian-pemerhatian',
  templateUrl: './carian-pemerhatian.component.html',
  styleUrls: [
    '../permehatian.component.scss'
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
    BreadcrumbpemerhatianComponent,
  ]
})
export class CarianPemerhatianComponent implements OnInit {
  static title: string = "Carian Bukan Subjek Sebenar" ;
   currentSection = 1;
  step = 1;
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
    'Warganegara / Penduduk Tetap',
    'Warga Asing',
  ];

  // Subject list
  subjects: Subject[] = [];

  // // Navigation steps
  // steps = [
  //   { number: 1, title: 'Carian & Senarai Subjek', active: true },
  //   { number: 2, title: 'Maklumat Subjek', active: false },
  //   { number: 3, title: 'Maklumat Terpenting', active: false }
  // ];

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
  showNoRecordModal: boolean = false; //model for SEC-S001

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
        case 'WargaAsing':
          return subject.nama.toLowerCase().includes((this.searchNama || '').toLowerCase());
        case 'Warganegara / Penduduk Tetap':
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

  // addNewSubject(): void {
  //   // Implement add new subject logic
  //   console.log('Adding new subject');

  //   // You might want to navigate to a new subject form
  //   // or open a modal dialog

  //   // Example: Navigate to next step
  //   this.goToNextStep();
  // }

  onSetSemula(): void {
    // Reset form
    this.selectedCategory = 'Kategori Carian';
    this.searchText = '';
    this.subjects = [];
    console.log('Form reset');
  }

  onKembali(): void {
    // Go back logic
    console.log('Going back');

    // You might want to navigate to previous page
    // this.router.navigate(['/previous-page']);
  }

  // onNext(): void {
  //   // Proceed to next step
  //   console.log('Going to next step');
  //   this.goToNextStep();
  // }

  // goToNextStep(): void {
  //   // Update step navigation
  //   const currentActiveIndex = this.steps.findIndex(step => step.active);
  //   if (currentActiveIndex < this.steps.length - 1) {
  //     this.steps[currentActiveIndex].active = false;
  //     this.steps[currentActiveIndex + 1].active = true;
  //   }

  //   // You might want to navigate to next component
  //   // this.router.navigate(['/next-step']);
  // }

  selectSubject(subject: Subject): void {
    // Handle subject selection
    console.log('Selected subject:', subject);

    // You might want to store selected subject and navigate
    // this.subjectService.setSelectedSubject(subject);
    // this.goToNextStep();
  }


  
  isBreadcrumbOpen = false;
  activeStep = 3;

  openBreadcrumb() {
    this.isBreadcrumbOpen = true;
  }

  closeBreadcrumb() {
    this.isBreadcrumbOpen = false;
  }
  
  Papar() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/papar-kes-pemerhatian']);
  }
  Tambahimigresen() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-imigresen']);
  }
  Tambahkastam() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-kastam']);
  }
  Tambahlhdn() {
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/tambah-kes-pemerhatian/tambah-kes-pemerhatian-lhdn']);
  }
  Pinda(){
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/pinda-kes-pemerhatian']);
  }
  Batal(){
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/batal-kes-pemerhatian']);
  }
  KemaskiniImigresen(){
    this.router.navigate(['/sec/permehatian/carian-pemerhatian/kemaskini-kes-pemerhatian/kemaskini-kes-pemerhatian-imigresen']);
  }

selectedSubjectForLupus: any = null;
showCatatanSection: boolean = false;
catatanText: string = '';


    Lupus(subject: any): void {
  this.selectedSubjectForLupus = subject;
  this.showCatatanSection = true;
  this.catatanText = '';
}

  hantarCatatan(): void {
  console.log('Lupuskan:', this.selectedSubjectForLupus);
  console.log('Catatan:', this.catatanText);
  // TODO: Call your delete API/service here

  // Reset after deletion
  this.showCatatanSection = false;
  this.selectedSubjectForLupus = null;
  this.catatanText = '';
}

resetCatatan(): void {
  this.showCatatanSection = false;
  this.selectedSubjectForLupus = null;
  this.catatanText = '';
}


}
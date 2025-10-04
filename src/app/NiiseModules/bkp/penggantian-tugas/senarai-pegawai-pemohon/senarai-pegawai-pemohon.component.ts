import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import {
  CardModule,
  GridModule,
  ListGroupModule,
  ProgressModule,
  NavModule,
  ButtonModule,
  BadgeModule,
  FormModule
} from '@coreui/angular';
import { MenuContentComponent } from '../../../landing/menu-content/menu-content.component';
import {PenggantianTugasServices} from '../../../../core/services/bkp-services/PenggantianTugas.services';


export interface Subject {
  bil: number;
  namapegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
  pegawaicatatan: string;
  catatantarikh: string; 
  catatanmasa: string;
  kelulusan: boolean;
  selected: boolean;
}

export interface Statuskelulusan {
  kelulusan: boolean;
}

@Component({
  selector: 'app-senarai-pegawai-pemohon',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    RouterModule,
    ReactiveFormsModule,
    ListGroupModule,
    ProgressModule,
    NavModule,
    ButtonModule,
    BadgeModule,
    FormModule,
    FormsModule,
    OnSubmitComponent,
  ],
  templateUrl: './senarai-pegawai-pemohon.component.html',
  styleUrls: ['../../bkp.scss']
})
export class SenaraiPegawaiPemohonComponent {
  currentStep: number = 1;
  activeTab: string = 'maklumat';
  searchForm: FormGroup;
  subjects: Subject[] = [];
  statuskelulusan: Statuskelulusan[] = [];
  selectedSubject: Subject | null = null;
  isAllSelected: boolean = false;
  keputusan: string | null = null;

  HantarSubmitPopup = false;
  HantarSimpanPopup = false;

  tableData : any;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private penggantiantugasservices: PenggantianTugasServices
  ) {

    this.searchForm = this.fb.group({
      kategori: ['', Validators.required],
      nokp: ['', [
        Validators.required,
        Validators.pattern(/^\d{6}-\d{2}-\d{4}$/)
      ]]
    });

    // Initialize sample data
    // this.loadSampleData();
  }

  private loadSampleData(): void {
    this.subjects = [
      {
        bil: 1,
        namapegawai: 'Muhammad Hilmi Bin Hashim',
        nokp: '780514-10-5649',
        gred: 'N41',
        bahagian: 'Bahagian Dasar & Perancangan',
        unit: 'Unit Pengurusan Aset',
        kumpulan: 'A',
        pegawaicatatan: 'Muhammad Asri Bin Saidin',
        catatantarikh: '12-06-2025',
        catatanmasa: '10.00',
        kelulusan: true,
        selected: false
      },
      {
        bil: 2,
        namapegawai: 'Ahmad Faizal Bin Hamzah',
        nokp: '870312-10-5563',
        gred: 'N29',
        bahagian: 'Khidmat Pengurusan',
        unit: 'Unit Pengurusan Aset',
        kumpulan: 'B',
        pegawaicatatan: 'Muhammad Asri Bin Saidin',
        catatantarikh: '25-07-2025',
        catatanmasa: '15.45',
        kelulusan: false,
        selected: false
      }
    ];
  }

  ngOnInit(): void {
    this.loadSenaraiPegawaiPemohon();
  }

  loadSenaraiPegawaiPemohon() {
    // const request: maklumatCutiSemasaRequest = { stfMstrUid: 'UID7', year: 2025 };
    this.penggantiantugasservices.getSenaraiPermohonanGantian()
      .subscribe({
        next: (data) => {
          console.log('API response:', data);
          this.tableData = data;
        },
        error: (err) => {
          console.error('Error fetching data', err);
        }
      });
  }

  toggleRadio(value: string): void {
  if (this.keputusan === value) {
    this.keputusan = null;  // unselect if clicked again
  } else {
    this.keputusan = value;
  }
}

 toggleSelectAll() {
  this.isAllSelected = !this.isAllSelected;
  this.tableData.forEach((item: any) => item.selected = this.isAllSelected);
}


  ondetail(): void {
    this.router.navigate(['maklumat-pegawai-pemohon'], { relativeTo: this.route });
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      const searchCriteria = this.searchForm.value;
      this.filterSubjects(searchCriteria);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.searchForm.controls).forEach(key => {
      this.searchForm.get(key)?.markAsTouched();
    });
  }

  private filterSubjects(criteria: any): void {
    // Reset to original data first
    this.loadSampleData();

    if (criteria.noPengenalan) {
      this.subjects = this.subjects.filter(subject =>
        subject.nokp.includes(criteria.noPengenalan)
      );
    }
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.selectedSubject = null;
    this.loadSampleData();
  }

  selectSubject(subject: Subject): void {
    this.selectedSubject = subject;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'Aktif': return 'success';
      case 'Tidak Aktif': return 'danger';
      case 'Pending': return 'warning';
      default: return 'secondary';
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  printReport(): void {
    if (this.selectedSubject) {
      window.print();
    }
  }

  getFormula(): void {
    if (this.selectedSubject) {
      console.log('Getting formula for:', this.selectedSubject.namapegawai);
    }
  }

  addNewSubject(): void {
    console.log('Add new subject clicked');
  }

  closeModal() {
    this.HantarSubmitPopup = false;
    this.HantarSimpanPopup = false;
  }

  showHantarSubmit() {
  // Reset and reopen to ensure visibility
  this.HantarSubmitPopup = false;
  setTimeout(() => {
    this.HantarSubmitPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

showHantarSimpan() {
  // Reset and reopen to ensure visibility
  this.HantarSimpanPopup = false;
  setTimeout(() => {
    this.HantarSimpanPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
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
import {PenggantianTugasServices} from '../../../../core/services/bkp-services/PenggantianTugas.services';
import { LocalStorageService } from '../../../../core/services/bkp-services/local-storage.service';
import { S } from '@angular/material/form-field.d-CMA_QQ0R';


export interface Subject {
  id: number;
  namapegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
}

@Component({
  selector: 'app-senarai-gantian-tugas',
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
  ],
  templateUrl: './senarai-gantian-tugas.component.html',
  styleUrls: ['../../bkp.scss']
})
export class SenaraiGantianTugasComponent implements OnInit{
  currentStep: number = 1;
  activeTab: string = 'maklumat';
  searchForm: FormGroup;
  subjects: Subject[] = [];
  selectedSubject: Subject | null = null;
  tableData : any;
  tarikh: string | null = null;        // real Date object

  searchSenarai() {
  if (!this.tarikh) {
    console.error("Tarikh not selected");
    return;
  }

  const selectedDate = new Date(this.tarikh as string);

  // Format YYYY-MM-DD
  const formatted = selectedDate.toISOString().split("T")[0];

  console.log("Formatted Date:", formatted);

  this.penggantiantugasservices.getSenaraiGantianPemohon(formatted)
    .subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.tableData = data;
      },
      error: (err) => console.error('Error fetching data', err)
    });
}


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private penggantiantugasservices : PenggantianTugasServices,
    private localStorage : LocalStorageService) 
  {
    this.searchForm = this.fb.group({
      kategori: ['', Validators.required],
      nokp: ['', [
        Validators.required,
        Validators.pattern(/^\d{6}-\d{2}-\d{4}$/)
      ]]
    });
  }


  ngOnInit(): void {
    this.loadSenaraiPegawaiPengganti();
  }

  // searchSenarai(tarikh: Date){
  //   this.penggantiantugasservices.getSenaraiGantianPemohon(tarikh) 
  //   .subscribe({ next: (data: any) => 
  //     { console.log('API response:', data); 
  //       this.tableData = data; }, error: (err: any) => 
  //         { console.error('Error fetching data', err); } 
  //     }); 
  // }

  loadSenaraiPegawaiPengganti() { 
    // this.penggantiantugasservices.getSenaraiGantianPemohon() 
    // .subscribe({ next: (data: any) => 
    //   { console.log('API response:', data); 
    //     this.tableData = data; }, error: (err: any) => 
    //       { console.error('Error fetching data', err); } 
    //   }); 
    }

  ondetail(item: Subject): void { 
    console.log('Lokal Storage:', item); 
    this.localStorage.setItem('data', item);

    // localhost:4200/#/bkp/penggantian-tugas/permohonan-gantian-tugas/senarai-gantian-tugas/maklumat-pegawai-pemohon
    this.router.navigate(
      ['maklumat-pegawai-pemohon'],
      { relativeTo: this.route }
    );
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
    if (criteria.noPengenalan) {
      this.subjects = this.subjects.filter(subject =>
        subject.nokp.includes(criteria.noPengenalan)
      );
    }
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.selectedSubject = null;
    // this.loadSampleData();
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
}

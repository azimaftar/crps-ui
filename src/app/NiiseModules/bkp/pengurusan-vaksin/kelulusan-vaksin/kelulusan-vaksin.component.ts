import { Component, viewChild, ViewChild } from '@angular/core';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { NgForm, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KelulusanVaksinDTO, KelulusanVaksinService } from './kelulusan-vaksin.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kelulusan-vaksin',
  standalone: true,
  imports: [ 
    ContainerComponent,
    CardBodyComponent,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './kelulusan-vaksin.component.html',
  styleUrls: ['../../bkp.scss']
})
export class KelulusanVaksinComponent {

  status!: number;
  approvalSTS!: number;
  branches: any[] = [];
  states: any[] = [];
  units: any[] = [];
  @ViewChild('seachForm') searchForm!: NgForm;

  constructor(
    private kelulusanService: KelulusanVaksinService,
    private router: Router ) {}

  filters = {
    stateCode: '',
    branchCode: '',
    division: '',
    unitCode: '',
    year: '',
    consent: ''
  };

  model: KelulusanVaksinDTO = {
    id: '',
    stateCode: '',
    branchCode: '',
    division: '',
    unitCode: '',
    vaccYear: '',
    
  };

  ngOnInit() {
    this.kelulusanService.getBranches().subscribe(data => {
    this.branches = data;
  });
    this.kelulusanService.getState().subscribe(data => {
    this.states = data;
  });
    this.kelulusanService.getUnit().subscribe(data => {
    this.units = data;
  });
  }

  selectedRow!: KelulusanVaksinDTO;
  onSelectRow(row: KelulusanVaksinDTO) {
      this.selectedRow = row;
    }

//   searchResults: any[] = [
//   { region: 'Putrajaya', branch: 'Pejabat Imigresen Putrajaya', department: 'Depot', unit: 'Unit Latihan', vaccYear: '2024', status: 'Setuju' },
//   { region: 'Putrajaya', branch: 'Pejabat Imigresen Putrajaya', department: 'Depot', unit: 'Unit Latihan', vaccYear: '2024', status: 'Setuju' },
// ];


   searchResults: any[] = [];
  hasSearched = false;
  isModalVisible = false;

  onSearch(){
  console.log('Cari Clicked');
  console.log('Search triggered with filters:', this.filters);

      // const noFiltersApplied = !this.filters.region && !this.filters.branch && !this.filters.department
      // && !this.filters.unit && !this.filters.year && !this.filters.status;

      // if (noFiltersApplied) {
      //   this.searchResults = [];
      //   this.hasSearched = false;
      //   this.showNoDataModal();
      //   return;
      // }

      this.hasSearched = true;
      this.performSearch();
    }

  performSearch() {
  this.searchResults = [
    {
      name: 'Ahmad',
      icNo: '0828123321',
      perkhidmatanNo: 'TBS5146',
      email: 'syag@gmail.com',
      position: 'Kerani',
      applyDate: '27/10/2025',   
      vaccAgree: 'Tidak Setuju',
      vaccApproval: 'YES'
    },
    {
      name: 'Syafiq Delitdib',
      icNo: '900101138238',
      perkhidmatanNo: 'SERV001',
      email: 'ahmad.ali@email.com',
      position: 'Manager',
      applyDate: '01/11/2025',
      vaccAgree: 'Setuju',
      vaccApproval: 'NO'
    }
  ];
  console.log('Results:', this.searchResults);
}

//Papar
goToView(name: string) {
    this.router.navigate(['bkp/pengurusan-vaksin/kelulusan-vaksin/maklumat-permohonan-vaksin', name]);
  }



    showNoDataModal() {
      this.isModalVisible = true;
      // Optional: scroll to top if needed
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onPilih() {}
    onPapar(row: any) {}
    onLulus(selectedRow: any) {}
    onGagal(selectedRow: any) {}

}

import { Component, viewChild, ViewChild } from '@angular/core';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { NgForm, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TarikhSuntikVaksinDTO, TarikhSuntikVaksinService } from './tarikh-suntik-vaksin.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { group } from 'console';

@Component({
  selector: 'app-tarikh-suntik-vaksin',
  standalone: true,
  imports: [
     ContainerComponent,
    CardBodyComponent,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './tarikh-suntik-vaksin.component.html',
  styleUrl: '../../bkp.scss'
})
export class TarikhSuntikVaksinComponent {
  status!: number;
  approvalSTS!: number;
  branches: any[] = [];
  states: any[] = [];
  units: any[] = [];
  @ViewChild('seachForm') searchForm!: NgForm;

  constructor(
    private tarikhSuntik: TarikhSuntikVaksinService,
    private router: Router ) {}

  filters = {
    stateCode: '',
    branchCode: '',
    division: '',
    unitCode: '',
    year: '',
    consent: '',
    name: '',
    branch: '',
    unit: '',
    group: '',
    vaccName: '',
    vaccQuota: '',
    startDate: '',
    endDate: '',
  };

  model: TarikhSuntikVaksinDTO = {
    id: '',
    name: '',
    branch: '',
    division: '',
    unit: '',
    group: '',
    vaccName: '',
    vaccQuota: '',
    startDate: '',
    endDate: '',
    
  };

  ngOnInit() {
    this.tarikhSuntik.getBranches().subscribe(data => {
    this.branches = data;
  });
    this.tarikhSuntik.getState().subscribe(data => {
    this.states = data;
  });
    this.tarikhSuntik.getUnit().subscribe(data => {
    this.units = data;
  });
  }

  selectedRow!: TarikhSuntikVaksinDTO;
  onSelectRow(row: TarikhSuntikVaksinDTO) {
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

      this.hasSearched = true;
      this.performSearch();
    }

  performSearch() {
  this.searchResults = [
    {
      name: 'Ahmad',
      branch: 'Pejabat Imigresen Putrajaya',
      division: 'Bahagian Depot Tahanan Imigresen',
      unit: 'HR',
      group: 'Depot Tahanan Imigresen',
      vaccName: 'Tetanus Toxoid',
      vaccQuota: '10/04/2025',
      startDate: '10/04/2025',
      endDate: '10/10/2025'
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

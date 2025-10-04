import { Component } from '@angular/core';
import {
  ContainerComponent,
  ModalModule,
  ButtonModule,
  FormModule,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  MaklumatCarianDaftarJadualResponseDto,
  PengurusanRosterService,
} from '../../../../../services/PengurusanRoster/PengurusanRosterService';
import { Router } from '@angular/router';

// Interface declarations
interface Division {
  code: string;
  name: string;
}

interface Unit {
  code: string;
  name: string;
}

interface SearchForm {
  divisionCode: string;
  unitCode: string;
  icNo: string;
  tarikhMulaRoster: string;
  tarikhAkhirRoster: string;
}

@Component({
  selector: 'app-maklumat-carian',
  imports: [
    ContainerComponent,
    ModalModule,
    ButtonModule,
    FormModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './maklumat-carian.component.html',
  styleUrls: ['../../pengurusan-roaster.component.scss',
    '../../../bkp.scss'
  ]
})
export class MaklumatCarianComponent {
  // Modal visibility state
  isModalVisible = false;
  isLoading = false;
  errorMessage: string = '';

  // Form data
  searchForm: SearchForm = {
    divisionCode: '',
    unitCode: '',
    icNo: '',
    tarikhMulaRoster: '',
    tarikhAkhirRoster: '',
  };

  // Search results data
  searchResults: MaklumatCarianDaftarJadualResponseDto[] = [];

  divisionList: Division[] = [
    { code: 'D', name: 'D' },
    { code: 'NIRMA', name: 'NIRMA' },
    { code: 'PRIMA', name: 'PRIMA' },
  ];

  unitList: Unit[] = [{ code: 'U01', name: 'U01' }];

  constructor(
    private pengurusanRosterService: PengurusanRosterService,
    private router: Router
  ) {}

  // Handle the form submission
  onSearch(form: NgForm) {
 if(form.invalid){
       form.control.markAllAsTouched();
        this.errorMessage = 'Sila isi semua medan yang diperlukan.';
        return;
    }
    this.errorMessage = '';

    this.isLoading = true;
    this.searchResults = []; // Clear previous results

    this.pengurusanRosterService
      .searchMaklumatCarian(this.searchForm)
      .subscribe(
        (response: MaklumatCarianDaftarJadualResponseDto[]) => {
          if (response.length === 0) {
            this.isModalVisible = true; // Show modal if no data found
          } else {
            this.searchResults = response; // Assign directly
          }
          this.isLoading = false; // Hide loading spinner after the request is processed
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false;
          this.isModalVisible = true; // Show the modal in case of error
        }
      );
  }

  // Utility method to format Date to 'yyyy-MM-dd' format
  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0]; // Format date as 'yyyy-MM-dd'
  }

  // Handle modal OK button click (close modal)
  onModalOk() {
    this.isModalVisible = false;
  }

  onDaftar(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/dftar-jadual/maklumat-carian/maklumat-pendaftaran-jdual-baru',
    ]);
  }
}

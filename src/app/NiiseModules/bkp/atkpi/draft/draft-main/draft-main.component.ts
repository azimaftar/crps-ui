import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarianDrafService } from './draft-main-service';
import { FormDataService } from './services/pegawai-data.service';

import {
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule
} from '@coreui/angular';

@Component({
  selector: 'app-draft-main',
  imports: [
  CommonModule, 
  FormsModule, 
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule],
  templateUrl: './draft-main.component.html',
  styleUrls: [
    // './draft-main.component.scss',
    '../../../bkp.scss'
  ]
})
export class DraftMainComponent {
  //SET TO EMPTY ONCE FINISHED DEVELOPEMENT
  searchData = {
    nama: 'amalin',
    noPerkhidmatan: 'SERV01',
    noDraf: 'DRAF-A-001'
  };

  filteredData: any[] = [];   // now API results will go here
  errorMessage: string = '';
  validationFailed = false;

  // modal control
  isModalVisible = false;
  
  loading = false;

  hasResults(): boolean {
    return this.filteredData && this.filteredData.length > 0;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carianDrafService: CarianDrafService,
    private dataService: FormDataService
  ) {}

  // Validation wrapper
  validateAndSearch() {
    if (!this.searchData.nama && !this.searchData.noPerkhidmatan && !this.searchData.noDraf) {
      this.errorMessage = "Sila masukkan sekurang-kurangnya satu daripada 3 kekunci carian.";
      this.validationFailed = true; // 🔴 highlight fields
      return;
    }

    this.validationFailed = false; // ✅ reset highlight if valid
    this.loading = true;
	  this.errorMessage = '';
    this.filteredData = [];
    
    // Search using API
    this.carianDrafService.getMaklumatCarianPegawai(
      this.searchData.nama,
      this.searchData.noPerkhidmatan,
      this.searchData.noDraf
    ).subscribe({
      next: (response) => {
        // Depending on backend structure, response may be { status: "...", data: [...] }
        this.filteredData = response.data ? response.data : response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.filteredData = [];
        
        if (err.status === 404 && err.error?.message) {
          // Instead of showing error text, trigger the modal
          this.isModalVisible = true;
        } else {
          // Handle other errors (500, network issues, etc.)
          this.errorMessage = "Ralat dalaman pelayan. Sila cuba lagi kemudian.";  //this.errorMessage = err.error.message; could probably work. Service/Controller already has a custom message for error code 500
        }
        this.loading = false;
      }
    });
  }

  // Close modal handler
  onModalOk() {
    this.isModalVisible = false;
  }

  onRegister() {
    this.dataService.clearData('pegawai');
    this.dataService.clearData('draf');
    console.log("Daftar button clicked");
    // Navigate directly to the 'Maklumat Pegawai' page without search check
    //this.router.navigate(['bkp/atkpi/draft/maklumat-pegawai']);
    this.router.navigate(['./maklumat-pegawai-mendaftar'], { relativeTo: this.route });
  }

  onUpdate(item: any) {
    console.log('Kemaskini clicked for:', item);
    // Option A: Pass the ID in the route
    // this.router.navigate(
    //   ['./maklumat-pegawai-mendaftar', item.id],
    //   { relativeTo: this.route }
    // );

  // Option B: Pass the whole object in navigation state
    this.router.navigate(
      ['/bkp/atkpi/draft/semakan-draf/maklumat-pegawai-mendaftar'],
      { 
        //relativeTo: this.route,
        state: { record: item } 
      }
    );
  }
}
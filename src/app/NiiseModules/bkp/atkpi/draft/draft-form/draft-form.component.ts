import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draft-form',
  imports: [CommonModule],
  templateUrl: './draft-form.component.html',
  styleUrls: ['../../../bkp.scss']
})
export class DraftFormComponent {

  searchData = {
    namaPegawai: 'Azmi',
    noPerkhidmatan: 'J1234567',
    noDraf: 'DRAF-IMI-2025-001'
  };

  // constructor(private router: Router) {} 
  constructor(private router: Router, private route: ActivatedRoute) {}

  showNotFoundPopup = false;
  showKemaskiniButton = false;
  

  onSearch() {
    //console.log("Cari button clicked");
    //this.showKemaskiniButton = true;

    //const found = false;
    //if (!found) {
    //  this.showNotFoundPopup = true;
    //

  console.log("Cari button clicked");
  this.showKemaskiniButton = true;

  // Perform your search logic here, for example, checking if the data exists
  const found = this.checkIfDataExists();  // Replace with actual check logic

  if (found) {
    // Logic to navigate to the 'Maklumat Pegawai' page
    this.navigateToMaklumatPegawai();  // Call the function to navigate
  } else {
    this.showNotFoundPopup = true;
  }
}

checkIfDataExists() {
  // Logic to check if the data exists, for example, compare user input
  // with available data (could be an API call, or comparing form inputs)
  return true; // For now, return false to trigger the popup, update with actual logic
}

navigateToMaklumatPegawai() {
  // Logic to navigate to the 'Maklumat Pegawai' page, e.g., using Angular Router
  this.router.navigate(['bkp/atkpi/draft/maklumat-pegawai']);  // Example with Angular Router
}


closePopup() {
  this.showNotFoundPopup = false;
}

onDaftar() {
    console.log("Daftar button clicked");
    // Navigate directly to the 'Maklumat Pegawai' page without search check
    this.router.navigate(['bkp/atkpi/draft/maklumat-pegawai']);
  }
  
}

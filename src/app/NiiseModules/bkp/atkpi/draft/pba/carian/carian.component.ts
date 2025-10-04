import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carian',
  imports: [CommonModule],
  templateUrl: './carian.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ]
})
export class CarianComponent {

  showKemaskiniButton = false;

  searchData = {
    namaPegawai: 'Azmi',
    noPerkhidmatan: 'J1234567',
    noDraf: 'DRAF-IMI-2025-001'
  };

  showNotFoundPopup = false;

  onSearch() {
    // Replace this logic with real search
    console.log("Cari button clicked");
    this.showKemaskiniButton = true;

    const found = false;
    if (!found) {
      this.showNotFoundPopup = true;
    }
  }

  onUpdate() {
    console.log("Kemaskini button clicked");

    // Add the logic for updating the draft here
    // You can do any action that needs to happen when the Kemaskini button is clicked
  }

  onRegister() {
    console.log("Daftar button clicked");
    // Add your logic for the "Daftar" functionality here
  }

  closePopup() {
    this.showNotFoundPopup = false;
  }

}

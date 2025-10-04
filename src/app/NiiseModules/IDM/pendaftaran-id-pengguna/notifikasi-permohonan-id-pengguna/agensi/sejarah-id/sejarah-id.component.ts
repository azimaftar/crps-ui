import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
  ButtonModule,
  TableModule,
} from '@coreui/angular';

@Component({
  selector: 'app-sejarah-id',
  templateUrl: './sejarah-id.component.html',
  styleUrl: './sejarah-id.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class SejarahIdComponent {
  //Modal
  visible: boolean = false;

  //Hapus Modal
  confirmHapusVisible: boolean = false;

  //Simpan Modal
  confirmSimpanVisible: boolean = false;

  //Tolak Modal
  confirmTolakVisible: boolean = false;

  //Checklist Select All Main Table
  selectAll = false;

  //Right Side Breadcrumb
  currentStep = 5; //change based on which level
  steps = [
    { label: 'Maklumat Profil Pegawai' },
    { label: 'Maklumat Penetapan Peranan' },
    { label: 'Maklumat PTJ' },
    { label: 'Dokumen Sokongan' },
    { label: 'Sejarah ID' },
  ];

  //main Table
  mainSejarah = [
    {
      bil: '1',
      tarikh: '05/30/2025',
      perkara: 'tiada',
      tempat: 'KL',
      dilaksanakan: 'adam',
      diluluskan: 'adam',
      status: 'tiada',
      checklist: false,
    },
  ];

  // For select all checklist in main table
  toggleAll() {
    this.mainSejarah.forEach((item) => {
      item.checklist = this.selectAll;
    });
  }

  // Show confirmation modal when hapus clicked
  hapusModel() {
    const selected = this.mainSejarah.filter((item) => item.checklist);
    if (selected.length === 0) {
      //If nothing is selected is true nothing happens.
      return;
    }
    this.confirmHapusVisible = true;
  }

  // Confirmation modal logic
  confirmDelete(confirm: boolean) {
    if (confirm) {
      //This ONLY FOR debugging remove when done with it.
      const deletedItems = this.mainSejarah
        .filter((item) => item.checklist)
        .map((item) => `Bil: ${item.bil}, perkara: ${item.perkara}`)
        .join('\n');

      console.log('Items Deleted:\n' + deletedItems);
      //debug code end.

      // Proceed with deletion ONLY frontend, ADD API when possible.
      this.mainSejarah = this.mainSejarah.filter((item) => !item.checklist);
    }
    this.confirmHapusVisible = false;
  }

  // Show confirmation modal when simpan clicked
  simpanModel() {
    this.confirmSimpanVisible = true;
  }

  confirmHantar(){
    this.confirmSimpanVisible = false;
  }

   // Show confirmation modal when simpan clicked
  tolakModel() {
    this.confirmTolakVisible = true;
  }

  confirmTolak(confirm:boolean){
    if(confirm){
      alert("Berjaya Tolak")
      this.confirmTolakVisible = false;
    }
    alert("Berjaya Tolak")
    this.confirmTolakVisible = false;
  }
}

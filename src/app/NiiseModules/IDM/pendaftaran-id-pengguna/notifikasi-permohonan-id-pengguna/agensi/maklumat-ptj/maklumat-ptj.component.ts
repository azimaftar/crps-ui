import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-ptj',
  templateUrl: './maklumat-ptj.component.html',
  styleUrl: './maklumat-ptj.component.scss',
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
export class MaklumatPtjComponent {
  //Modal
  visible: boolean = false;

  //Simpan Modal
  confirmVisible: boolean = false;

  //Checklist Select All Main Table
  selectAll = false;

  //Right Side Breadcrumb
  currentStep = 3; //change based on which level
  steps = [
    { label: 'Maklumat Profil Pegawai' },
    { label: 'Maklumat Penetapan Peranan' },
    { label: 'Maklumat PTJ' },
    { label: 'Dokumen Sokongan' },
    { label: 'Sejarah ID' },
  ];

  //main Table
  mainkodPTJ = [
    {
      bil: '1',
      kodPTJ: '040100',
      cawangan: 'PEJABAT IMIGRESEN KEDAH',
      checklist: false,
    },
    {
      bil: '2',
      kodPTJ: '040200',
      cawangan: 'PEJABAT IMIGRESEN SUNGAI PETANI',
      checklist: false,
    },
  ];

  //Modal Table
  modalkodPTJ = [
    {
      bil: '1',
      cawangan: 'PEJABAT IMIGRESEN KEDAH',
      kodPTJ: '040100',
      checklist: true,
    },
    {
      bil: '2',
      cawangan: 'PEJABAT IMIGRESEN SUNGAI PETANI',
      kodPTJ: '040200',
      checklist: false,
    },
    {
      bil: '3',
      cawangan: 'PEJABAT IMIGRESEN SIK',
      kodPTJ: '040300',
      checklist: false,
    },
  ];

  // For select all checklist in main table
  toggleAll() {
    this.mainkodPTJ.forEach((item) => {
      item.checklist = this.selectAll;
    });
  }

  // Show confirmation modal when hapus clicked
  hapusModel() {
    const selected = this.mainkodPTJ.filter((item) => item.checklist);
    if (selected.length === 0) {
      //If nothing is selected is true nothing happens.
      return;
    }
    this.confirmVisible = true;
  }

  // Confirmation modal logic
  confirmSave(confirm: boolean) {
    if (confirm) {

      //This ONLY FOR debugging remove when done with it.
      const deletedItems = this.mainkodPTJ
        .filter((item) => item.checklist)
        .map((item) => `Bil: ${item.bil}, KodPTJ: ${item.kodPTJ}`)
        .join('\n');

      console.log('Items Deleted:\n' + deletedItems);
      //debug code end.

      // Proceed with deletion ONLY frontend, ADD API when possible.
      this.mainkodPTJ = this.mainkodPTJ.filter((item) => !item.checklist);
    }
    this.confirmVisible = false;
  }
}

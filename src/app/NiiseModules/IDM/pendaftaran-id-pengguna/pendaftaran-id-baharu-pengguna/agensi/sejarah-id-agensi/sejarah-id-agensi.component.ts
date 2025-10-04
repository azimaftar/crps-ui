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
import { BreadcrumbAgensiComponent } from '../breadcrumb-agensi.component';

@Component({
  selector: 'app-sejarah-id-agensi',
  templateUrl: './sejarah-id-agensi.component.html',
  styleUrl: './sejarah-id-agensi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    BreadcrumbAgensiComponent,
  ],
})
export class SejarahIdAgensiComponent {
  //Modal
  visible: boolean = false;

  //Simpan Modal
  confirmVisible: boolean = false;

  //Checklist Select All Main Table
  selectAll = false;

  //main Table
  sejarah = [
    {
      bil: '1',
      tarikh: '29/5/2025',
      perkara: 'KEMASKINI MAKLUMAT PTJ',
      tempat: 'PEJABAT IMIGRESEN SHAH ALAM',
      dilaksanakan: 'AHMAD AIZAT BIN OSMAN',
      diluluskan: 'AQILAH HUSNA BINTI AZIZ',
      status: 'BERJAYA',
    },
    {
      bil: '2',
      tarikh: '2/4/2025',
      perkara: 'DAFTAR MAKLUMAT PTJ',
      tempat: 'PEJABAT IMIGRESEN BANTNG',
      dilaksanakan: 'MOHD NUMAN BIN MOHD LIKI',
      diluluskan: 'AQILAH HUSNA BINTI AZIZ',
      status: 'BERJAYA',
    },
  ];

  isBreadcrumbOpen = false;
  activeStep = 4;

  openBreadcrumb() {
    this.isBreadcrumbOpen = true;
  }

  closeBreadcrumb() {
    this.isBreadcrumbOpen = false;
  }

  //Modal Table
  modalPeranan = [
    {
      bil: '1',
      kod: '040100',
      cawangan: 'PEJABAT IMIGRESEN KEDAH',
      checklist: true,
    },
    {
      bil: '2',
      kod: '040200',
      cawangan: 'PEJABAT IMIGRESEN SUNGAI PETANI',
      checklist: false,
    },
    {
      bil: '3',
      kod: '040300',
      cawangan: 'PEJABAT IMIGRESEN SIK',
      checklist: false,
    },
  ];

  // For select all checklist in main table
  // toggleAll() {
  //   this.sejarah.forEach((item) => {
  //     item.checklist = this.selectAll;
  //   });
  // }

  // Show confirmation modal when hapus clicked
  // hapusModel() {
  //   const selected = this.sejarah.filter((item) => item.checklist);
  //   if (selected.length === 0) {
  //     //If nothing is selected is true nothing happens.
  //     return;
  //   }
  //   this.confirmVisible = true;
  // }

  onSimpanClick() {
    this.confirmVisible = true; // Open the confirmation modal
  }

  // Confirmation modal logic
  confirmSave(confirm: boolean) {
    if (confirm) {
      //This ONLY FOR debugging remove when done with it.
      const deletedItems = this.sejarah
        // .filter((item) => item.checklist)
        .map((item) => 'Bil: ${item.bil}, Peranan: ${item.peranan}')
        .join('\n');

      console.log('Items Deleted:\n' + deletedItems);
      //debug code end.

      // Proceed with deletion ONLY frontend, ADD API when possible.
      // this.sejarah = this.sejarah.filter((item) => !item.checklist);
    }

    this.confirmVisible = false;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { BreadcrumbAgensiComponent } from '../../agensi/breadcrumb-agensi.component';

@Component({
  selector: 'app-dokumen-sokongan-agensi',
  templateUrl: './dokumen-sokongan-agensi.component.html',
  styleUrl: './dokumen-sokongan-agensi.component.scss',
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
export class DokumenSokonganAgensiComponent {
  //Modal
  visible: boolean = false;

  //Simpan Modal
  confirmVisible: boolean = false;

  //Checklist Select All Main Table
  selectAll = false;

  //main Table
  namaDokumen = [
    {
      bil: '1',
      dokumen: 'surat_mohon_id',
      format: '.pdf',
      checklist: false,
    },
    {
      bil: '2',
      dokumen: 'surat_kemaskini_id',
      format: '.pdf',
      checklist: false,
    },
  ];

  isBreadcrumbOpen = false;
  activeStep = 3;

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
  toggleAll() {
    this.namaDokumen.forEach((item) => {
      item.checklist = this.selectAll;
    });
  }

  // Show confirmation modal when hapus clicked
  hapusModel() {
    const selected = this.namaDokumen.filter((item) => item.checklist);
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
      const deletedItems = this.namaDokumen
        .filter((item) => item.checklist)
        .map((item) => 'Bil: ${item.bil}, Peranan: ${item.peranan}')
        .join('\n');

      console.log('Items Deleted:\n' + deletedItems);
      //debug code end.

      // Proceed with deletion ONLY frontend, ADD API when possible.
      this.namaDokumen = this.namaDokumen.filter((item) => !item.checklist);
    }
    this.confirmVisible = false;
  }
}

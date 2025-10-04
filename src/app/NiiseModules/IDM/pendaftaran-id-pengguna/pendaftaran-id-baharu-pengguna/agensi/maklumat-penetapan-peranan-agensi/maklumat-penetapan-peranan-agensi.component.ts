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
  selector: 'app-maklumat-penetapan-peranan-agensi',
  templateUrl: './maklumat-penetapan-peranan-agensi.component.html',
  styleUrl: './maklumat-penetapan-peranan-agensi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    BreadcrumbAgensiComponent,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class MaklumatPenetapanPerananAgensiComponent {
  //Modal
  visible: boolean = false;

  //Simpan Modal
  confirmVisible: boolean = false;

  //Checklist Select All Main Table
  selectAll = false;

  //main Table
  mainPeranan = [
    {
      bil: '1',
      bahagian: 'Visa, Pas dan Permit',
      unit: 'PLS',
      peranan: 'Penyelia Kanan',
      checklist: false,
    },
    {
      bil: '2',
      bahagian: 'Pengurusan ID',
      unit: 'Passport',
      peranan: 'Penyelia',
      checklist: false,
    },
  ];

  isBreadcrumbOpen = false;
  activeStep = 2;

  openBreadcrumb() {
    this.isBreadcrumbOpen = true;
  }

  closeBreadcrumb() {
    this.isBreadcrumbOpen = false;
  }

  //Modal Table
  modalPeranan = [
    {
      name: 'Tambah Peranan dan Tugasan ID Pengguna',
      key: 'tambahPeranan',
      checklist: true,
    },
    {
      name: 'Kemas Kini Maklumat Pengguna Dan Jawatan',
      key: 'kemaskiniPengguna',
      checklist: false,
    },
  ];

  // For select all checklist in main table
  toggleAll() {
    this.mainPeranan.forEach((item) => {
      item.checklist = this.selectAll;
    });
  }

  // Show confirmation modal when hapus clicked
  hapusModel() {
    const selected = this.mainPeranan.filter((item) => item.checklist);
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
      const deletedItems = this.mainPeranan
        .filter((item) => item.checklist)
        .map((item) => 'Bil: ${item.bil}, Peranan: ${item.peranan}')
        .join('\n');

      console.log('Items Deleted:\n' + deletedItems);
      //debug code end.

      // Proceed with deletion ONLY frontend, ADD API when possible.
      this.mainPeranan = this.mainPeranan.filter((item) => !item.checklist);
    }
    this.confirmVisible = false;
  }
}
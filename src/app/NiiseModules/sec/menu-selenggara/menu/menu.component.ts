import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  TooltipModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { KodService } from '../../../../services/MenuSelenggara/KodService';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TooltipModule,
    IconModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  selectedCategory = '';
  submitted = false;
  tableData: any[] = [];

  // Modal
  modalVisible = false;
  modalMessage = 'Sila pilih kategori dahulu';

  // Stepper
  currentStep = 1;
  steps = [
    { number: 1, title: 'Carian & Senarai Kod' },
    { number: 2, title: 'Maklumat Kod' },
  ];

  constructor(
    private kodService: KodService,
    private router: Router
  ) {}

  // ===========================
  // Modal methods
  // ===========================
  showModal(message = 'Sila pilih kategori dahulu') {
    this.modalMessage = message;
    this.modalVisible = true;
  }
  closeModal() {
    this.modalVisible = false;
  }
  onModalOk() {
    this.closeModal();
  }

  // ===========================
  // Fetch data based on dropdown
  // ===========================
  onCategoryChange() {
    this.tableData = [];

    if (this.selectedCategory === 'kod-tindakan') {
      this.kodService.getKodTindakan().subscribe({
        next: (res) => (this.tableData = res),
        error: () => this.showModal('Ralat ambil data Kod Tindakan'),
      });
    } else if (this.selectedCategory === 'kod-tco') {
      this.kodService.getKodTco().subscribe({
        next: (res) => (this.tableData = res),
        error: () => this.showModal('Ralat ambil data Kod TCO'),
      });
    } else if (this.selectedCategory === 'kod-nap') {
      this.kodService.getKodNap().subscribe({
        next: (res) => (this.tableData = res),
        error: () => this.showModal('Ralat ambil data Kod NAP'),
      });
    }
  }

  // ===========================
  // Navigation (Tambah Kod)
  // ===========================
  goToKodPage() {
    this.submitted = true;

    if (!this.selectedCategory) {
      this.showModal();
      return;
    }

    const base = '/sec/menu-selenggara/';
    this.router.navigate([`${base}${this.selectedCategory}`], {
      state: { mode: 'tambah' }, // pass mode to form
    });
  }

  // ===========================
  // Row actions (Pilih / Kemaskini / Batal / Lupus)
  // ===========================
  goToForm(item: any, mode: 'pilih' | 'kemaskini' | 'batal' | 'lupus') {
    if (!this.selectedCategory) {
      this.showModal();
      return;
    }

    const base = '/sec/menu-selenggara/';
    this.router.navigate([`${base}${this.selectedCategory}`], {
      state: { selectedItem: item, mode }, // pass selected row + mode
    });
  }

  // ===========================
  // Stepper
  // ===========================
  navigateTo(step: any) {
    this.currentStep = step.number;
  }
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}

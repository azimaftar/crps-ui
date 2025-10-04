import { Component, NgModule, OnInit } from '@angular/core';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular'; // For <c-badge>
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from './../../../../shared/reusable-tab/reusable-tab.component'
import { PermohonanDetailService, PtjDTO } from '../../../services/permohonan-detail-api.service';


interface PTJItem {
  id: number;
  ptjcd: string;
  cawangan: string;
  selected: boolean;
  tempSelected?: boolean; // For modal selection
}

@Component({
  selector: 'maklumat-ptj',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    ColComponent,
    RowComponent,
    CardModule,
    GridModule,
    ButtonModule,
    RouterModule,
    ReusableTabComponent
  ],
  templateUrl: './maklumat-ptj-selepas-data-dihapus.component.html',
  styleUrls: ['./maklumat-ptj-selepas-data-dihapus.component.scss']
})
export class MaklumatPtjSelepasDataDihapusComponent implements OnInit {

  availablePTJList: PTJItem[] = [];

  // Selected PTJ items (shown in main table) - starts with one pre-selected item
  ptjList: PTJItem[] = [];

  // Pagination properties for main table
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // Modal/Dialog state
  showCodeSelection: boolean = false;

  // Modal pagination properties
  modalCurrentPage: number = 1;
  modalItemsPerPage: number = 10;
  modalGoToPageNumber: number = 1;

  constructor(private router: Router, private permohonanDetailService: PermohonanDetailService) { }

  currentStep = 3;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  ngOnInit(): void {
    // Initialize pagination values
    this.goToPageNumber = this.currentPage;
    this.modalGoToPageNumber = this.modalCurrentPage;

    // Load draft from service
    const draft = this.permohonanDetailService.getDraft();
    console.log('Existing draft from P1:', draft);

    // Initialize PTJ list
    this.availablePTJList = [];

    // Fetch PTJ reference data from backend
    this.permohonanDetailService.getMaklumatPtjRef().subscribe(res => {
      if (res && res.data && Array.isArray(res.data)) {
        // Map backend DTO to PTJItem interface
        this.availablePTJList = res.data.map((ptj, index) => ({
          id: index + 1,         // Unique ID for table
          ptjcd: ptj.ptjCode,    // map ptjCode to ptjcd
          cawangan: ptj.bmDesc,  // map bmDesc to cawangan
          selected: false,
          tempSelected: false     // For modal selection
        }));
      } else {
        console.warn('No PTJ data received from backend.');
      }
    }, err => {
      console.error('Error fetching PTJ reference data:', err);
    });
  }



  // Main table pagination
  get paginatedPTJ(): PTJItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.ptjList.slice(startIndex, endIndex);
  }

  get totalItems(): number {
    return this.ptjList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Modal pagination
  get paginatedModalPTJ(): PTJItem[] {
    const startIndex = (this.modalCurrentPage - 1) * this.modalItemsPerPage;
    const endIndex = startIndex + this.modalItemsPerPage;
    // Filter out already selected items
    const availableItems = this.availablePTJList.filter(item =>
      !this.ptjList.some(selected => selected.id === item.id)
    );
    return availableItems.slice(startIndex, endIndex);
  }

  get modalTotalItems(): number {
    return this.availablePTJList.filter(item =>
      !this.ptjList.some(selected => selected.id === item.id)
    ).length;
  }

  get modalTotalPages(): number {
    return Math.ceil(this.modalTotalItems / this.modalItemsPerPage);
  }

  getDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    return `${startIndex}-${endIndex}`;
  }

  // Modal methods
  closeModal(): void {
    this.showCodeSelection = false;
    // Reset temporary selections
    this.availablePTJList.forEach(item => item.tempSelected = false);
    this.modalCurrentPage = 1;
    this.modalGoToPageNumber = 1;
  }

  addSelectedPTJ(): void {
    const selectedItems = this.availablePTJList.filter(item => item.tempSelected);

    if (selectedItems.length === 0) {
      alert('Sila pilih sekurang-kurangnya satu item PTJ.');
      return;
    }

    // Take the first item only (since only one PTJ is allowed now)
    const item = selectedItems[0];

    // Replace ptjList (only 1 PTJ stored for display)
    this.ptjList = [{
      id: item.id,
      ptjcd: item.ptjcd,
      cawangan: item.cawangan,
      selected: false
    }];

    // Update draft (same style as tambahPeranan)
    const draft = this.permohonanDetailService.getDraft();
    draft.j009UsrPtjTmpDTO = {
      ptjCd: item.ptjcd
    };
    this.permohonanDetailService.setDraft(draft);

    // Reset temporary selections
    this.availablePTJList.forEach(i => i.tempSelected = false);

    // Close modal
    this.closeModal();

    alert(`PTJ ${item.ptjcd} telah berjaya ditambah.`);
  }

  // Inside your component
  buildPayload(): any {
    const draft = this.permohonanDetailService.getDraft();

    return {
      ...draft,
      j009UsrPtjTmpDTO: this.ptjList.map(row => ({
        ptjcd: row.ptjcd
      }))
    };
  }


  isAllModalItemsSelected(): boolean {
    const visibleItems = this.paginatedModalPTJ;
    return visibleItems.length > 0 && visibleItems.every(item => item.tempSelected);
  }

  toggleSelectAllModal(event: any): void {
    const isChecked = event.target.checked;
    this.paginatedModalPTJ.forEach(item => {
      item.tempSelected = isChecked;
    });
  }

  // Modal pagination methods
  goToModalPage(action: string): void {
    switch (action) {
      case 'first':
        this.modalCurrentPage = 1;
        break;
      case 'prev':
        if (this.modalCurrentPage > 1) {
          this.modalCurrentPage--;
        }
        break;
      case 'next':
        if (this.modalCurrentPage < this.modalTotalPages) {
          this.modalCurrentPage++;
        }
        break;
      case 'last':
        this.modalCurrentPage = this.modalTotalPages;
        break;
    }
    this.modalGoToPageNumber = this.modalCurrentPage;
  }

  goToSpecificModalPage(): void {
    if (this.modalGoToPageNumber >= 1 && this.modalGoToPageNumber <= this.modalTotalPages) {
      this.modalCurrentPage = this.modalGoToPageNumber;
    } else {
      this.modalGoToPageNumber = this.modalCurrentPage;
    }
  }

  onModalItemsPerPageChange(): void {
    this.modalCurrentPage = 1;
    this.modalGoToPageNumber = 1;
  }

  // Existing methods
  removePTJ(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam rekod PTJ ini?')) {
      this.ptjList = this.ptjList.filter(item => item.id !== id);

      // Adjust current page if necessary
      if (this.paginatedPTJ.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first':
        this.currentPage = 1;
        break;
      case 'prev':
        if (this.currentPage > 1) {
          this.currentPage--;
        }
        break;
      case 'next':
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
        break;
      case 'last':
        this.currentPage = this.totalPages;
        break;
    }
    this.goToPageNumber = this.currentPage;
  }

  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      this.goToPageNumber = this.currentPage;
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  goToPrevious(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-penetapan-peranan']);
  }


  goToNext(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.permohonanDetailService.setDraft(this.buildPayload());
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/dokumen-sokongan']);

  }

  showWujudID(): void {
    console.log('Checking for existing ID');
    alert('Fungsi semakan ID sedia ada akan dilaksanakan.');
  }

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.ptjList.forEach(item => {
      item.selected = isChecked;
    });
  }

  getSelectedCount(): number {
    return this.ptjList.filter(item => item.selected).length;
  }

  deleteSelected(): void {
    const selectedCount = this.getSelectedCount();
    if (selectedCount === 0) {
      alert('Sila pilih item untuk dipadam.');
      return;
    }

    if (confirm(`Adakah anda pasti untuk memadam ${selectedCount} item yang dipilih?`)) {
      this.ptjList = this.ptjList.filter(item => !item.selected);

      if (this.paginatedPTJ.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

}
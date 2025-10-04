import { Component, NgModule, OnInit } from '@angular/core';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular'; // For <c-badge>
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';

interface PTJItem {
  id: number;
  kod: string;
  cawangan: string;
  selected: boolean;
  tempSelected?: boolean; // For modal selection
}

@Component({
  selector: 'maklumat-ptj-selepas-data-dihapus',
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
    RouterModule
  ],
  templateUrl: './maklumat-ptj-selepas-data-dihapus.component.html',
  styleUrls: ['./maklumat-ptj-selepas-data-dihapus.component.scss']
})
export class MaklumatPtjSelepasDataDihapusComponent implements OnInit {

  // Available PTJ options (14 items) - These are options to select from
  availablePTJList: PTJItem[] = [
    { id: 1, kod: '040100', cawangan: 'PEJABAT IMIGRESEN KEDAH', selected: false, tempSelected: false },
    { id: 2, kod: '040200', cawangan: 'PEJABAT IMIGRESEN SUNGAI PETANI', selected: false, tempSelected: false },
    { id: 3, kod: '040300', cawangan: 'PEJABAT IMIGRESEN SIK', selected: false, tempSelected: false },
    { id: 4, kod: '040400', cawangan: 'PEJABAT IMIGRESEN PENANG', selected: false, tempSelected: false },
    { id: 5, kod: '040500', cawangan: 'PEJABAT IMIGRESEN PERAK', selected: false, tempSelected: false },
    { id: 6, kod: '040600', cawangan: 'PEJABAT IMIGRESEN SELANGOR', selected: false, tempSelected: false },
    { id: 7, kod: '040700', cawangan: 'PEJABAT IMIGRESEN KUALA LUMPUR', selected: false, tempSelected: false },
    { id: 8, kod: '040800', cawangan: 'PEJABAT IMIGRESEN NEGERI SEMBILAN', selected: false, tempSelected: false },
    { id: 9, kod: '040900', cawangan: 'PEJABAT IMIGRESEN MELAKA', selected: false, tempSelected: false },
    { id: 10, kod: '041000', cawangan: 'PEJABAT IMIGRESEN JOHOR', selected: false, tempSelected: false },
    { id: 11, kod: '041100', cawangan: 'PEJABAT IMIGRESEN PAHANG', selected: false, tempSelected: false },
    { id: 12, kod: '041200', cawangan: 'PEJABAT IMIGRESEN TERENGGANU', selected: false, tempSelected: false },
    { id: 13, kod: '041300', cawangan: 'PEJABAT IMIGRESEN KELANTAN', selected: false, tempSelected: false },
    { id: 14, kod: '041400', cawangan: 'PEJABAT IMIGRESEN SABAH', selected: false, tempSelected: false },
    { id: 15, kod: '041500', cawangan: 'PEJABAT IMIGRESEN SARAWAK', selected: false, tempSelected: false },
    { id: 16, kod: '041600', cawangan: 'PEJABAT IMIGRESEN LABUAN', selected: false, tempSelected: false },
  ];

  // Selected PTJ items (shown in main table) - starts with one pre-selected item
  ptjList: PTJItem[] = [
    { id: 1, kod: '040100', cawangan: 'PEJABAT IMIGRESEN KEDAH', selected: true }
  ];

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
    this.modalGoToPageNumber = this.modalCurrentPage;
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

    // Add selected items to main list
    selectedItems.forEach(item => {
      const newItem: PTJItem = {
        id: item.id,
        kod: item.kod,
        cawangan: item.cawangan,
        selected: false
      };
      this.ptjList.push(newItem);
    });

    // Reset temporary selections
    this.availablePTJList.forEach(item => item.tempSelected = false);

    // Close modal
    this.closeModal();

    alert(`${selectedItems.length} item PTJ telah berjaya ditambah.`);
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
    console.log('Going to previous step - Dokumen Sokongan');
     this.router.navigate(['/IDM/kakitangan-sedia-ada/maklumat-penetapan-peranan']);
  }

  goToNext(): void {
    console.log('Completing the ID application process');

    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
    this.router.navigate(['/IDM/kakitangan-sedia-ada/dokumen-sokongan']);
  }

  showWujudID(): void {
    console.log('Checking for existing ID');
    alert('Fungsi semakan ID sedia ada akan dilaksanakan.');
  }

  toggleSelectAll(selectAll: boolean): void {
    this.paginatedPTJ.forEach(item => {
      item.selected = selectAll;
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

  exportPTJ(): void {
    console.log('Exporting PTJ data');
    const dataStr = JSON.stringify(this.ptjList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `ptj-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  refreshPJT(): void {
    console.log('Refreshing PTJ data');
    this.ptjList.forEach(item => item.selected = false);
    alert('Data PTJ telah dikemaskini.');
  }
}
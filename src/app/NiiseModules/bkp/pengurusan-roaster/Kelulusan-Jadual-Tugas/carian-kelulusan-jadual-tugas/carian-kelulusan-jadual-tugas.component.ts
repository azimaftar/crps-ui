import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  ButtonModule,
  FormModule,
  ContainerComponent,
  ModalModule,
  DropdownModule,
} from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import { ModalSimpanComponent } from '../modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from '../modal-hantar/modal-hantar.component';
import {
  KelulusanJadualTugasService,
  ReqKelulusanJadualTugas,
  RespKelulusanJadualTugas,
} from '../../../../../services/PengurusanRoster/KelulusanJadualTugas/KelulusanJadualTugasService';
import { IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../../../../services/PengurusanRoster/KelulusanJadualTugas/DataService';
import { MockKelulusanJadualTugasService } from '../../../../../services/PengurusanRoster/KelulusanJadualTugas/MockKelulusanJadualTugasService';
import { PutKelulusanJadualTugasService } from '../../../../../services/PengurusanRoster/KelulusanJadualTugas/PutKelulusanJadualTugasService';
import { forkJoin } from 'rxjs';

export interface SearchResult {
  LokKaunter: string;
  nama: string;
  noPerkhidmatan: string;
  gred: string;
  kelulusan: string;
  isLulus: boolean;
  isGagal: boolean;
  startTime: string;
  endTime: string;
  originalStatus: string; // '0', '1', '2'
  remarks: string;
  schedule_id: string;
}

@Component({
  selector: 'app-carian-kelulusan-jadual-tugas',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    FormModule,
    ContainerComponent,
    ModalModule,
    DropdownModule,
    ModalSimpanComponent,
    ModalHantarComponent,
  ],
  templateUrl: './carian-kelulusan-jadual-tugas.component.html',
  styleUrls: ['../../pengurusan-roaster.component.scss', '../../../bkp.scss'],
  providers: [
    // { provide: KelulusanJadualTugasService, useClass: MockKelulusanJadualTugasService }
    { provide: KelulusanJadualTugasService },
  ],
})
export class CarianKelulusanJadualTugasComponent implements OnInit, OnDestroy {
  private storageKey = 'carianKelulusanData';
  private service = inject(KelulusanJadualTugasService);

  constructor(
    private router: Router,
    private dataService: DataService,
    private iconSet: IconSetService,
    private putKelulusanJadualTugasService: PutKelulusanJadualTugasService
  ) {
    this.iconSet.icons = { cilEnvelopeClosed };
  }

  isModalVisible = false;
  dropdownOpen = false;

  ngOnInit() {
    const savedData = sessionStorage.getItem(this.storageKey);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        this.filters = {
          division_cd: parsedData.filters?.division_cd || '',
          unit_cd: parsedData.filters?.unit_cd || '',
          group: parsedData.filters?.group || '',
          tarikh: parsedData.filters?.tarikh || '',
        };
        this.searchResults = (parsedData.searchResults || []).map(
          (result: any) => ({
            LokKaunter: result.LokKaunter || '',
            nama: result.nama || '',
            noPerkhidmatan: result.noPerkhidmatan || '',
            gred: result.gred || '',
            kelulusan: result.kelulusan || 'Tiada Status',
            isLulus: result.isLulus || false,
            isGagal: result.isGagal || false,
            startTime: result.startTime || '',
            endTime: result.endTime || '',
            originalStatus: result.originalStatus || '0',
            remarks: result.remarks || '',
            schedule_id: result.schedule_id || '',
          })
        );
        this.hasSearched = parsedData.hasSearched || false;
      } catch (error) {
        console.error('Error parsing sessionStorage data:', error);
        this.filters = { division_cd: '', unit_cd: '', group: '', tarikh: '' };
        this.searchResults = [];
        this.hasSearched = false;
      }
    }
  }

  ngOnDestroy() {
    // Optional: clear storage bila keluar component
    sessionStorage.removeItem(this.storageKey);
  }

  private saveToStorage() {
    const dataToSave = {
      filters: this.filters,
      searchResults: this.searchResults,
      hasSearched: this.hasSearched,
    };
    sessionStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
  }

  onView(result: SearchResult) {
    this.dataService.setSharedData({ rowData: result, filters: this.filters });
    this.router.navigate([
      '/bkp/pengurusan-roaster/Kelulusan-Jadual-Tugas/carian-kelulusan-jadual-tugas/maklumat-lokasi',
    ]);
  }

  filters: ReqKelulusanJadualTugas = {
    division_cd: '',
    unit_cd: '',
    group: '',
    tarikh: '',
  };

  searchResults: SearchResult[] = [];
  hasSearched = false;
  isLoading = false;
  errorMessage = '';

  kaunterList: string[] = [];
  persons: string[] = [];
  tempohMula: string[] = [];
  tempohAkhir: string[] = [];
  nomborPerkhidmatan: string[] = [];
  gredJawatan: string[] = [];
  kelulusan: string[] = [];
  remarks: string[] = [];
  schedule_id: string[] = [];

  selectedRows: Set<string> = new Set();

  onSearch(form: NgForm) {
    console.log('Search triggered with filters:', this.filters);

    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = 'Sila isi semua medan yang diperlukan.';
      this.hasSearched = true;
      return;
    }

    const noFiltersApplied =
      !this.filters.division_cd && !this.filters.unit_cd && !this.filters.group;

    if (noFiltersApplied) {
      this.searchResults = [];
      this.hasSearched = false;
      this.kaunterList = [];
      this.persons = [];
      this.tempohMula = [];
      this.tempohAkhir = [];
      this.nomborPerkhidmatan = [];
      this.gredJawatan = [];
      this.showNoDataModal();
      this.kelulusan = [];
      this.remarks = [];
      return;
    }

    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';
    this.performSearch();
  }

  private performSearch() {
    this.service.getMaklumatCarian(this.filters).subscribe({
      next: (response: RespKelulusanJadualTugas[]) => {
        this.isLoading = false;
        this.hasSearched = true;
        this.searchResults = response.map((item) => ({
          LokKaunter: item.Kaunter,
          nama: item.Name,
          noPerkhidmatan: item.NOSERV,
          gred: item.Gred,
          kelulusan:
            item.approvRoster === '1'
              ? 'Lulus'
              : item.approvRoster === '2'
              ? 'Gagal'
              : 'Tiada Status',
          isLulus: item.approvRoster === '1',
          isGagal: item.approvRoster === '2',
          startTime: item.N001_START_TIME,
          endTime: item.N001_END_TIME,
          originalStatus: item.approvRoster || '0',
          remarks: item.remarks,
          schedule_id: item.schedule_id,
        }));
        if (this.searchResults.length === 0) {
          this.showNoDataModal();
        }
        this.saveToStorage();
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.hasSearched = true;
        console.error('API error:', err);
        if (err.error?.error) {
          this.errorMessage = `${err.error.error}: ${err.error.message}`;
          if (err.error.error === 'CMN-E006') {
            this.showNoDataModal();
          }
        } else {
          this.errorMessage = 'CMN-E500: Internal server error occurred.';
        }
      },
    });
  }

  showNoDataModal() {
    this.isModalVisible = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onModalOk() {
    this.closeModal();
  }

  resetSearch() {
    this.filters = { division_cd: '', unit_cd: '', group: '', tarikh: '' };
    this.searchResults = [];
    this.hasSearched = false;
    this.saveToStorage();
  }

  editPegawai(pegawai: any) {
    console.log('Edit pegawai:', pegawai);
  }

  toggleLulus(result: SearchResult, event: any) {
    if (result.originalStatus !== '0') return;
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      result.isLulus = true;
      result.isGagal = false;
      result.kelulusan = 'Lulus';
    } else {
      result.isLulus = false;
      result.isGagal = false;
      result.kelulusan = 'Tiada Status';
    }

    if (isChecked) {
      this.selectedRows.add(result.schedule_id);
    } else {
      this.selectedRows.delete(result.schedule_id);
    }
    // this.saveToStorage();
  }

  toggleGagal(result: SearchResult, event: any) {
    if (result.originalStatus !== '0') return;
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      result.isGagal = true;
      result.isLulus = false;
      result.kelulusan = 'Gagal';
    } else {
      result.isGagal = false;
      result.isLulus = false;
      result.kelulusan = 'Tiada Status';
    }

    if (isChecked) {
      this.selectedRows.add(result.schedule_id);
    } else {
      this.selectedRows.delete(result.schedule_id);
    }
    // this.saveToStorage();
  }

  viewDetails(result: any) {
    console.log('View details for:', result);
  }

  showModalSimpan = false;
  showModalHantar = false;

  onSimpan() {
    const schedulesToUpdate = this.searchResults.filter(
      (result) =>
        result.originalStatus === '0' &&
        (result.kelulusan === 'Lulus' || result.kelulusan === 'Gagal')
    );

    if (schedulesToUpdate.length === 0) {
      console.log('Tiada perubahan untuk disimpan');
      return;
    }

    // Hantar update untuk setiap schedule menggunakan service YANG SUDAH ADA
    const updateRequests = schedulesToUpdate.map((schedule) =>
      this.putKelulusanJadualTugasService.updateKelulusanJadual({
        schedule_id: schedule.schedule_id,
        Approval_Status: schedule.kelulusan,
        remarks: schedule.remarks,
      })
    );

    // Gunakan forkJoin untuk hantar semua request
    forkJoin(updateRequests).subscribe({
      next: (responses) => {
        this.showModalSimpan = true;
        console.log('Semua simpan berjaya', responses);
        this.showModalSimpan = true;

        // Update UI - tukar status asal
        schedulesToUpdate.forEach((schedule) => {
          schedule.originalStatus = schedule.kelulusan === 'Lulus' ? '1' : '2';
        });

        this.refreshSearchData();
      },
      error: (error) => {
        console.error('Simpan gagal', error);
      },
    });
  }

  refreshSearchData() {
    this.isLoading = true;
    this.errorMessage = '';

    // Panggil API dengan filter yang SAMA
    this.service.getMaklumatCarian(this.filters).subscribe({
      next: (response: RespKelulusanJadualTugas[]) => {
        this.isLoading = false;

        // Update searchResults dengan data TERBARU dari server
        this.searchResults = response.map((item) => ({
          LokKaunter: item.Kaunter,
          nama: item.Name,
          noPerkhidmatan: item.NOSERV,
          gred: item.Gred,
          kelulusan:
            item.approvRoster === '1'
              ? 'Lulus'
              : item.approvRoster === '2'
              ? 'Gagal'
              : 'Tiada Status',
          isLulus: item.approvRoster === '1',
          isGagal: item.approvRoster === '2',
          startTime: item.N001_START_TIME,
          endTime: item.N001_END_TIME,
          originalStatus: item.approvRoster || '0',
          remarks: item.remarks,
          schedule_id: item.schedule_id,
        }));

        // Clear selection setelah refresh
        this.selectedRows.clear();

        // Update session storage
        this.saveToStorage();

        console.log('Data refreshed successfully');
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        console.error('Refresh error:', err);
        this.errorMessage =
          'Gagal refresh data: ' + (err.error?.message || 'Unknown error');
      },
    });
  }

  onHantar() {
    this.isLoading = true;
    this.errorMessage = '';
    // Dapatkan schedule_ids yang eligible (status 0)
     const schedulesToActivate = Array.from(this.selectedRows)
    .filter(scheduleId => {
      const result = this.searchResults.find(r => r.schedule_id === scheduleId);
      return result && result.originalStatus === '0';
    });

    if (schedulesToActivate.length === 0) {
      console.log('Tiada schedule untuk dihantar');
      return;
    }

    const activateRequests = schedulesToActivate.map((scheduleId) =>
      this.putKelulusanJadualTugasService.activateSchedule(scheduleId)
    );

    // Gunakan forkJoin untuk hantar semua request
    forkJoin(activateRequests).subscribe({
      next: (responses) => {
        console.log('Semua hantar berjaya', responses);
        this.showModalHantar = true;

        // ✅ AUTO REFRESH - Panggil balik API carian
        this.refreshSearchData();
      },
      error: (error) => {
        console.error('Hantar failed', error);
      },
    });
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
    console.log('Modal Hantar closed');
  }

  getSelectedCount(): number {
    return this.selectedRows.size;
  }

  isAllSelected(): boolean {
    const selectableRows = this.searchResults.filter(
      (r) => r.originalStatus === '0'
    ).length;
    return selectableRows > 0 && this.selectedRows.size === selectableRows;
  }

  isSomeSelected(): boolean {
    return this.selectedRows.size > 0 && !this.isAllSelected();
  }

  getDropdownTitle(): string {
    if (this.isAllSelected()) {
      return 'Semua dipilih';
    } else if (this.isSomeSelected()) {
      const selectableCount = this.searchResults.filter(
        (r) => r.originalStatus === '0'
      ).length;
      return `${this.selectedRows.size} daripada ${selectableCount} dipilih`;
    }
    return 'Pilih baris';
  }

  toggleDropdown(event?: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    console.log('Document click detected, target:', event.target);
    const dropdown = (event.target as HTMLElement).closest(
      '.gmail-select-dropdown'
    );
    if (!dropdown && this.dropdownOpen) {
      console.log('Closing dropdown');
      this.dropdownOpen = false;
    }
  }

  // ADDED: Method to get selection icon text
  getSelectionIcon(): string {
    if (this.isAllSelected()) {
      return '☑'; // All selected
    } else if (this.isSomeSelected()) {
      return '▬'; // Partial selection
    }
    return '☐'; // None selected
  }

  handleSelectAll() {
    if (this.isAllSelected()) {
      this.selectedRows.clear();
    } else {
      this.selectedRows.clear();
      this.searchResults.forEach((result) => {
        if (result.originalStatus === '0') {
          this.selectedRows.add(result.schedule_id);
        }
      });
    }
    // this.saveToStorage();
  }

  handleSelectNone() {
    this.searchResults.forEach((result) => {
      if (result.originalStatus === '0') {
        result.isLulus = false;
        result.isGagal = false;
        result.kelulusan = 'Tiada Status';
      }
    });

    this.selectedRows.clear();
    this.dropdownOpen = false;
    // this.saveToStorage();
  }

  handleSelectByStatus(status: string) {
    this.selectedRows.clear();
    this.searchResults.forEach((result) => {
      if (result.originalStatus === '0' && result.kelulusan === status) {
        this.selectedRows.add(result.schedule_id);
      }
    });
    // this.saveToStorage();
    this.dropdownOpen = false;
  }

  toggleRowSelection(schedule_id: string) {
    if (this.selectedRows.has(schedule_id)) {
      this.selectedRows.delete(schedule_id);
    } else {
      const result = this.searchResults.find(
        (r) => r.schedule_id === schedule_id
      );
      if (result && result.originalStatus === '0') {
        this.selectedRows.add(schedule_id);
      }
    }
    // this.saveToStorage();
  }

  applyDirectToAll(action: 'lulus' | 'gagal') {
    // Apply action kepada SEMUA eligible rows TANPA reset selection
    this.searchResults.forEach((result) => {
      if (result.originalStatus === '0') {
        if (action === 'lulus') {
          result.isLulus = true;
          result.isGagal = false;
          result.kelulusan = 'Lulus';
        } else if (action === 'gagal') {
          result.isGagal = true;
          result.isLulus = false;
          result.kelulusan = 'Gagal';
        }
        this.selectedRows.add(result.schedule_id);
      }
    });

    // Pastikan SEMUA eligible rows selected untuk visual consistency
    this.selectedRows.clear();
    this.searchResults.forEach((result) => {
      if (result.originalStatus === '0') {
        this.selectedRows.add(result.schedule_id);
      }
    });

    // this.saveToStorage();
    this.dropdownOpen = false;
  }

  applyToSelected(action: 'lulus' | 'gagal', clearSelection: boolean = true) {
    if (this.selectedRows.size === 0) return;

    this.searchResults.forEach((result) => {
      if (
        this.selectedRows.has(result.schedule_id) &&
        result.originalStatus === '0'
      ) {
        if (action === 'lulus') {
          result.isLulus = true;
          result.isGagal = false;
          result.kelulusan = 'Lulus';
        } else if (action === 'gagal') {
          result.isGagal = true;
          result.isLulus = false;
          result.kelulusan = 'Gagal';
        }
      }
    });

    if (clearSelection) {
      this.selectedRows.clear();
    }

    // this.saveToStorage();
    this.dropdownOpen = false;
    this.dropdownOpen = false;
  }
}

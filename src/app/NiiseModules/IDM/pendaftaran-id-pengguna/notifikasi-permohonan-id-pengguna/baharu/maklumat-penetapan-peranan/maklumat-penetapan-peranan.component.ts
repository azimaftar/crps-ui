import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from './../../../../shared/reusable-tab/reusable-tab.component';
import { DeptDTO, PermohonanDetailService, RoleDTO, UnitDTO, } from '../../../services/permohonan-detail-api.service';

interface PerananItem {
  id: number; // frontend-only identifier
  bahagian: string;
  unit: string;
  peranan: string;
  selected: boolean;
}

interface ModalForm {
  bahagian: string;
  unit: string;
  peranan: string;
  urusniaga: {
    tambahPeranan: boolean;
    kemaskiniMaklumat: boolean;
  };
}

@Component({
  selector: 'maklumat-penetapan-peranan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReusableTabComponent
  ],
  templateUrl: './maklumat-penetapan-peranan.component.html',
  styleUrls: ['./maklumat-penetapan-peranan.component.scss']
})
export class MaklumatPenetapanPerananComponent implements OnInit {
  perananList: PerananItem[] = []; // only 1 allowed for now

  currentPage = 1;
  itemsPerPage = 10;
  goToPageNumber = 1;
  selectedPeranan: PerananItem | null = null;

  currentStep = 2;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  isModalOpen = false;
  modalForm: ModalForm = {
    bahagian: '',
    unit: '',
    peranan: '',
    urusniaga: {
      tambahPeranan: false,
      kemaskiniMaklumat: false
    }
  };

  constructor(
    private router: Router,
    private permohonanDetailService: PermohonanDetailService
  ) { }

  deptList: DeptDTO[] = [];
  unitList: UnitDTO[] = [];
  roleList: RoleDTO[] = [];

  ngOnInit(): void {
    this.goToPageNumber = this.currentPage;

    const draft = this.permohonanDetailService.getDraft();
    console.log('Existing draft from P1:', draft);

    this.perananList = [];

    this.permohonanDetailService.getMaklumatPerananRef().subscribe((res) => {
      this.deptList = res.data.r327DeptDTO;
      this.unitList = res.data.r334UnitDTO;
      this.roleList = res.data.r332RoleDTO;
    });

  }

  get totalItems(): number {
    return this.perananList.length;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage));
  }

  get paginatedPeranan(): PerananItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.perananList.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first': this.currentPage = 1; break;
      case 'prev': if (this.currentPage > 1) this.currentPage--; break;
      case 'next': if (this.currentPage < this.totalPages) this.currentPage++; break;
      case 'last': this.currentPage = this.totalPages; break;
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

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.perananList.forEach(peranan => (peranan.selected = isChecked));
  }

  getSelectedCount(): number {
    return this.perananList.filter(item => item.selected).length;
  }

  deleteSelected(): void {
    if (this.getSelectedCount() === 0) {
      alert('Sila pilih item untuk dipadam.');
      return;
    }
    if (confirm('Adakah anda pasti untuk memadam item yang dipilih?')) {
      this.perananList = [];
      const draft = this.permohonanDetailService.getDraft();
      draft.j010UsrRlTmPDTO = undefined as any;
      this.permohonanDetailService.setDraft(draft);
    }
  }

  tambahPeranan(): void {
    // if (!this.modalForm.bahagian || !this.modalForm.unit || !this.modalForm.peranan) {
    //   alert('Sila lengkapkan semua maklumat yang diperlukan.');
    //   return;
    // }

    if (!this.modalForm.bahagian || !this.modalForm.unit) {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
      return;
    }

    const newPeranan: PerananItem = {
      id: Date.now(),
      bahagian: this.modalForm.bahagian,
      unit: this.modalForm.unit,
      peranan: this.modalForm.peranan,
      selected: false
    };

    this.perananList = [newPeranan];

    const draft = this.permohonanDetailService.getDraft();
    draft.j010UsrRlTmPDTO = {
      rlCd: this.modalForm.peranan,
      bizCd: this.modalForm.bahagian,
      unCd: this.modalForm.unit,
      authInd: 'Y',
      exctxnInd: 'N'
    };
    this.permohonanDetailService.setDraft(draft);

    alert('Peranan baru telah berjaya ditambah.');
    this.closePenetapanPerananModal();
  }

  getBahagianName(code: string): string {
    const found = this.deptList.find(dept => dept.deptCd === code);
    return found ? found.deptBmDesc : code;
  }

  getUnitName(code: string): string {
    const found = this.unitList.find(unit => unit.unitCd === code);
    return found ? found.unitBmDesc : code;
  }

  getPerananName(code: string): string {
    const found = this.roleList.find(role => role.roleCd === code);
    return found ? found.roleBmDesc : code;
  }

  buildPayload(): any {
    const draft = this.permohonanDetailService.getDraft() || {};

    return {
      ...draft,
      j010UsrRlTmPDTO: this.perananList.map(row => ({
        peranan: row.peranan,
        unit: row.unit,
        bahagian: row.bahagian
      }))
    };
  }

  removePeranan(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam rekod ini?')) {
      this.perananList = [];
      const draft = this.permohonanDetailService.getDraft();
      draft.j010UsrRlTmPDTO = undefined as any;
      this.permohonanDetailService.setDraft(draft);
    }
  }

  goToPrevious(): void {
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-profil-pegawai']);
  }

  goToNext(): void {
    this.permohonanDetailService.setDraft(this.buildPayload());
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-ptj']);
  }

  // Modal Methods
  goToPermohonanTambahPeranan(): void {
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closePenetapanPerananModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
    this.resetModalForm();
  }

  resetModalForm(): void {
    this.modalForm = {
      bahagian: '',
      unit: '',
      peranan: '',
      urusniaga: {
        tambahPeranan: false,
        kemaskiniMaklumat: false
      }
    };
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from '../../shared/reusable-tab/reusable-tab.component';
import {  EventEmitter, Output } from '@angular/core';
import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
} from '@coreui/angular';

interface SearchFilters {
  negeri: string;
  cawangan: string;
  bahagian: string;
  unit: string;
  namaPegawai: string;
  noDokumen: string;
  status: string;
  tindakan: string;
}

interface UploadedDocument {
  id: number;
  namaDokumen: string;
  format: string;
}

interface PembatalanID {
  sebabPembatalan: string;
  noPermohonan: string;
  lainSebab: string;
  tarikhTamatPembatalan: string;
  catatan: string;
}

interface FingerprintData {
  capJari1: string;
  capJari2: string;
}

interface FormData {
  kategoriPegawai: string;
  jenisDokumen: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tarikhLahir: string;
  jantina: string;
  noPengenalan: string;
  noTelefon: string;
  email: string;
  lokasi: string;
  tempatBertugas: string;
  bahagian: string;
  unit: string;
  jawatan: string;
  gred: string;
  gradMelebihiAda: string;
  keperluanBiometrik: string;
  jenisBiometrik: {
    capJari: boolean;
    wajah: boolean;
  };
  kaedahLog: {
    capJari: boolean;
    wajah: boolean;
    otp: boolean;
  };
}

interface PermohonanKelulusanItem {
  nama: string;
  negeri: string;
  cawangan: string;
  bahagian: string;
  unit: string;
  noDokumen: string;
  status: string;
  tindakan: 'baharu' | 'dalam_proses' | 'lulus' | 'tolak' | 'pending';
}

@Component({
  selector: 'senarai-kelulusan-permohonan',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormModule,
    HeaderModule,
    AvatarModule,
    FormsModule,
    RouterModule,
    BadgeModule,
    GridModule,
    ReusableTabComponent
  ],
  templateUrl: './senarai-pengguna.component.html',
  styleUrls: ['./senarai-pengguna.component.scss']
})
export class SenaraiPenggunaComponent implements OnInit {

maklumatKeptusan = false;

  openMaklumatKeputusan() {
    this.maklumatKeptusan = true;
  }
  closeMaklumatKeputusan() {
    this.maklumatKeptusan = false;
  }
  negeriList: string[] = ['Selangor', 'Johor', 'Kedah'];
  cawanganList: string[] = ['Cawangan A', 'Cawangan B', 'Cawangan C'];
  bahagianList: string[] = ['Bahagian 1', 'Bahagian 2'];
  unitList: string[] = ['Unit X', 'Unit Y'];
  pegawaiList: string[] = ['Ali Ahmad', 'Siti Aminah', 'Rahman Karim'];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectedUploadDokumen: UploadedDocument | null = null;

  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      namaDokumen: 'Surat Permohonan',
      format: '.pdf'
    }
  ];

  get totalUploadDokumenItems(): number {
    return this.uploadedDocuments.length;
  }

  get paginatedUploadDokumen(): UploadedDocument[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.uploadedDocuments.slice(startIndex, endIndex);
  }

  getUploadDokumenDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalUploadDokumenItems);
    return `${startIndex}-${endIndex}`;
  }
  
  applicationsList: PermohonanKelulusanItem[] = [
    {
      nama: 'Ali Ahmad',
      negeri: 'Selangor',
      cawangan: 'Cawangan A',
      bahagian: 'Bahagian 1',
      unit: 'Unit X',
      noDokumen: '901201-10-2233',
      status: 'Aktif',
      tindakan: 'baharu',
    },
    {
      nama: 'Siti Aminah',
      negeri: 'Johor',
      cawangan: 'Cawangan B',
      bahagian: 'Bahagian 2',
      unit: 'Unit Y',
      noDokumen: '880102-05-1122',
      status: 'Tidak Aktif',
      tindakan: 'lulus',
    }
  ];


  filteredApplications: PermohonanKelulusanItem[] = [...this.applicationsList];

  searchFilters: SearchFilters = {
    negeri: '',
    cawangan: '',
    bahagian: '',
    unit: '',
    namaPegawai: '',
    noDokumen: '',
    status: '',
    tindakan: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Maklumat Profil Pegawai component initialized');
    // this.validateForm();
    this.newPembatalanID = {
      sebabPembatalan: '',
      noPermohonan: 'PRM-2025-001',
      lainSebab: 'Kesilapan teknikal semasa pendaftaran',
      tarikhTamatPembatalan: '2025-08-31',
      catatan: 'Dibatalkan atas permintaan pengguna'
    };
  }

  get paginatedApplications(): PermohonanKelulusanItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredApplications.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalItems(): number {
    return this.filteredApplications.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  searchApplications(): void {
    this.filteredApplications = this.applicationsList.filter(app => {
      const matchesNegeri = !this.searchFilters.negeri || app.negeri === this.searchFilters.negeri;
      const matchesCawangan = !this.searchFilters.cawangan || app.cawangan === this.searchFilters.cawangan;
      const matchesBahagian = !this.searchFilters.bahagian || app.bahagian === this.searchFilters.bahagian;
      const matchesUnit = !this.searchFilters.unit || app.unit === this.searchFilters.unit;
      const matchesPegawai = !this.searchFilters.namaPegawai || app.nama.toLowerCase().includes(this.searchFilters.namaPegawai.toLowerCase());
      const matchesNoDokumen = !this.searchFilters.noDokumen || app.noDokumen.includes(this.searchFilters.noDokumen);
      const matchesStatus = !this.searchFilters.status || app.status.toLowerCase().includes(this.searchFilters.status.toLowerCase());
      const matchesTindakan = !this.searchFilters.tindakan || app.tindakan === this.searchFilters.tindakan;

      return matchesNegeri && matchesCawangan && matchesBahagian &&
        matchesUnit && matchesPegawai && matchesNoDokumen &&
        matchesStatus && matchesTindakan;
    });

    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  resetFilters(): void {
    this.searchFilters = {
      negeri: '',
      cawangan: '',
      bahagian: '',
      unit: '',
      namaPegawai: '',
      noDokumen: '',
      status: '',
      tindakan: ''
    };
    this.searchApplications();
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

  getTindakanColor(tindakan: string): string {
    switch (tindakan) {
      case 'baharu': return 'primary';
      case 'dalam_proses': return 'warning';
      case 'lulus': return 'success';
      case 'tolak': return 'danger';
      case 'pending': return 'secondary';
      default: return 'primary';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'aktif': return 'success';
      case 'tidak aktif': return 'secondary';
      case 'pending': return 'warning';
      case 'tolak': return 'danger';
      default: return 'info';
    }
  }

  // Form data model
    formData: FormData = {
      kategoriPegawai: 'Pegawai JIM',
      jenisDokumen: 'MyKad',
      noDokumen: '930330025489',
      warganegara: 'Warganegara',
      nama: 'Mohd Russaini Bin Idrus',
      tarikhLahir: '30 Januari 1993',
      jantina: 'Lelaki',
      noPengenalan: 'AB123456',
      noTelefon: '0112345678',
      email: 'poh.lim@gov.my',
      lokasi: 'Putrajaya',
      tempatBertugas: 'Putrajaya',
      bahagian: 'Visa, Pas dan Permit',
      unit: 'VPP',
      jawatan: 'Pembantu Tadbir',
      gred: 'KP19',
      gradMelebihiAda: 'Sila Pilih-',
      keperluanBiometrik: 'Ya',
      jenisBiometrik: {
        capJari: true,
        wajah: false
      },
      kaedahLog: {
        capJari: true,
        wajah: true,
        otp: true
      }
    };

    newPembatalanID: PembatalanID = {
    sebabPembatalan: '',
    noPermohonan: '',
    lainSebab: '',
    tarikhTamatPembatalan: '',
    catatan: ''
  };
  
    // Fingerprint data
    fingerprintData: FingerprintData = {
      capJari1: '',
      capJari2: ''
    };
  
    // Modal control
    isFingerprintModalOpen: boolean = false;
  
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 1;
  
    steps = [
      'Maklumat Profil Pegawai',
      'Maklumat Penetapan Peranan',
      'Dokumen Sokongan',
      'Sejarah ID'
    ];
  
    /**
     * Open fingerprint modal
     */
    openFingerprintModal(): void {
      this.isFingerprintModalOpen = true;
    }
  
    /**
     * Close fingerprint modal
     */
    closeFingerprintModal(): void {
      this.isFingerprintModalOpen = false;
    }
  
    /**
     * Scan fingerprint
     */
    scanFingerprint(type: string): void {
      if (type === 'capJari1') {
        this.fingerprintData.capJari1 = 'Fingerprint 1 scanned';
      } else if (type === 'capJari2') {
        this.fingerprintData.capJari2 = 'Fingerprint 2 scanned';
      }
    }
  
    /**
     * Complete fingerprint scan
     */
    completeFingerprintScan(): void {
      this.closeFingerprintModal();
    }
  
    /**
     * Navigate to previous step
     */
    goToPrevious(): void {
      console.log('Navigating to previous step');
      // Add your navigation logic here
      // Example: this.router.navigate(['/previous-step']);
      this.router.navigate(['/IDM/shared/senarai-permohonan-id']);
    }
  
    /**
     * Navigate to next step
     */  goToNext(): void {
      console.log('Navigating to next step');
      console.log('Form data:', this.formData);
      // Process completion
      if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
        // Implement completion logic here
        // Example: this.submitApplication();
        alert('Permohonan ID pengguna telah berjaya diselesaikan!');
      }
      // Add your navigation logic here
      this.router.navigate(['/IDM/pendaftaran-id-pentadbir-utama/daftar-id-pengguna-kata-laluan/maklumat-penetapan-peranan']);
    }
  
    /**
     * Show Wujud ID functionality
     */
    showWujudID(): void {
      console.log('Show Wujud ID clicked');
      // Implement your Wujud ID logic here
    }
  
    /**
     * Determine if user can proceed to next step
     */
    canProceedToNext(): boolean {
      this.validateForm();
      return this.isFormValid;
    }
  
    /**
     * Validate form data
     */
    validateForm(): void {
      const requiredFields = [
        this.formData.kategoriPegawai,
        this.formData.jenisDokumen,
        this.formData.noDokumen,
        this.formData.nama,
        this.formData.tarikhLahir,
        this.formData.jantina,
        this.formData.noPengenalan,
        this.formData.noTelefon,
        this.formData.email,
        this.formData.lokasi,
        this.formData.tempatBertugas,
        this.formData.bahagian,
        this.formData.unit,
        this.formData.jawatan,
        this.formData.gred,
        this.formData.keperluanBiometrik,
        this.formData.kaedahLog
      ];
    }
}

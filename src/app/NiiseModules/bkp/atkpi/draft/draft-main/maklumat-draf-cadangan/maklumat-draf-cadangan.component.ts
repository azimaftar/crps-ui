import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HorizontalStepperComponent } from '../horizontal-stepper/horizontal-stepper.component';
import { IconModule } from '@coreui/icons-angular';
import { FormDataService } from '../services/pegawai-data.service';
import { ModalModule } from '@coreui/angular';
import { HantarSimpanDrafService } from './maklumat-draf-cadangan.service';
import { DropdownService, Department, Unit, State, Agency, ImmRank } from '../services/dropdown.service';

@Component({
  selector: 'app-maklumat-draf-cadangan',
  imports: [
    FormsModule,
    CommonModule,
    HorizontalStepperComponent,
    IconModule,
    ModalModule
  ],
  templateUrl: './maklumat-draf-cadangan.component.html',
  styleUrls: ['../../../../bkp.scss']
})
export class MaklumatDrafCadanganComponent implements OnInit {
  // ========== STATE ==========
  @ViewChild(HorizontalStepperComponent) stepIndicator!: HorizontalStepperComponent;

  pegawai: any = {};
  draf: any = {};
  savedDraftId: string | null = null;
  uploadDocumentId: string | null = null;

  currentStep = 2;
  showUploadPopup = false;
  showSubmitPopup = false;
  showSavePopup = false;
  submitted = false;
  draftIsSaved = false;
  isLoading = false;

  // TEMP CODE
  prosesKerjaOptions = [
    { code: "01", label: "Syarat-syarat Permohonan"},
    { code: "02", label: "Proses Pendaftaran"},
    { code: "03", label: "Tanggungjawab"},
    { code: "04", label: "Tindakan Di Pintu Masuk"},
    { code: "05", label: "Flow Chart"}
  ];

  edaranDalamanJawatanOptions = [
    { code: "01", label: "Pegawai Imigresen" },
    { code: "02", label: "Pegawai Kanan Imigresen" },
    { code: "03", label: "Pegawai Teknologi Maklumat" },
    { code: "04", label: "Pegawai Kerani" },
    { code: "05", label: "Vendor" }
  ];

  jawatanOptions: ImmRank[] = [];
  unitOptions: Unit[] = [];
  bahagianOptions: Department[] = [];
  negeriOptions: State[] = [];
  agensiOptions: Agency[] = [];

  rujukanOptions = [
    "Pekeliling Dibaca Bersama",
    "Pekeliling Digugurkan"
  ];

  jenisDrafOptions = [
    { code: "01", label: "Surat/memo daripada Bahagian/Negeri" },
    { code: "02", label: "Pekeliling Imigresen Malaysia (PIM)" },
    { code: "03", label: "Pekeliling Imigresen Malaysia Terhad (PIMT)" },
    { code: "04", label: "Arahan Tetap Ketua Pengarah Imigresen (ATKPI)" },
    { code: "05", label: "Arahan Pentadbiran" },
    { code: "06", label: "Arahan Imigresen" }
  ];

  // ========== GETTERS ==========
  get maxStep(): number {
    return this.stepIndicator?.steps.length ?? 0;
  }

  // ========== CONSTRUCTOR ==========
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private dataService: FormDataService,
    private hantarSimpanDrafService: HantarSimpanDrafService,
    private dropdownService: DropdownService
  ) {}

  // ========== LIFECYCLE ==========
  ngOnInit(): void {
    // ✅ Retrieve data from service
    this.pegawai = this.dataService.getData('pegawai') || {};
    this.draf = this.dataService.getData('draf') || this.dataService.getDevDraf();   // 🚧 during dev, use dev defaults
    this.dropdownService.getUnits().subscribe(data => this.unitOptions = data);
    this.dropdownService.getDepartments().subscribe(data => this.bahagianOptions = data);
    this.dropdownService.getStates().subscribe(data => this.negeriOptions = data);
    this.dropdownService.getAgencies().subscribe(data => this.agensiOptions = data);
    this.dropdownService.getImmRanks().subscribe(data => this.jawatanOptions = data);
  }

  // ========== NAVIGATION ==========
  goNextStep() {
    if (this.currentStep < this.maxStep) {
      this.currentStep++;
      console.log('Current step is ', this.currentStep);
    }
  }

  goPrevStep() {
    // ✅ Save into service before going back
    this.dataService.setData('pegawai', this.pegawai);
    this.dataService.setData('draf', this.draf);

    if (this.currentStep > 1) {
      this.currentStep--;
      console.log('Current step is ', this.currentStep)
      this.router.navigate(['../maklumat-pegawai-mendaftar'], { relativeTo: this.route })
    }
  }

  // ========== SAVE / SUBMIT ==========
  onHantar(form: any) {
    this.submitted = true;

    if (form.invalid) return; // stop if invalid

    if (!this.savedDraftId) {
      console.error("No draftId found! Save the draft first.");
      return;
    }

    this.isLoading = true;
    const dto = this.mapDrafToDto(this.draf);
    this.hantarSimpanDrafService.putMaklumatDraf(this.savedDraftId, dto).subscribe({
      next: (res) => {
        console.log('Draf updated successfully:', res);
        this.showSubmitPopup = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error updating draf:', err);
        this.isLoading = false;
      }
    });
  }

  onSimpan(form: any) {
    this.submitted = true;

    if (form.invalid) return; // stop if invalid

    this.isLoading = true;
    const dto = this.mapDrafToDto(this.draf);
    this.hantarSimpanDrafService.postMaklumatDraf(dto).subscribe({
      next: (res) => {
        console.log('Draf saved successfully:', res);
        this.savedDraftId = res.receivedrecord.draftId;
        this.draftIsSaved = true;
        this.showSavePopup = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error saving draf:', err);
        this.isLoading = false;
      }
    });
  }

  closePopup() {
    this.showSubmitPopup = false;
    this.showSavePopup = false;
  }
  
  resetDraf() {
    this.draf = this.dataService.getEmptyDraf(); // 🟦 true reset
  }

  // ========== MAPPERS ==========
  mapDrafToDto(draf: any) {
    return {
      s001Uid: "S0010001",  //Get from user Carian
      draftProposed: draf.drafCadangan,
      processOwner: draf.processOwner,
      docRefNo: "DRAF-A-025", // Add 1 after each run

      title: draf.tajuk,
      generalField: draf.bidangUmum,
      specField: draf.bidangKhusus,
      objective: draf.tujuan,
      legalBasis: draf.puncaKuasa,
      interpretation: draf.tafsiran,
      background: draf.latarBelakang,
      practice: draf.praktis,
      newInstruction: draf.arahanBaharu,
      enforcementDate: draf.tarikhKuatKuasa,
      workProcess: draf.prosesKerja.join(','),  //Just change the type later
      scopeSabah: draf.termasuk.sabah,
      scopeSarawak: draf.termasuk.sarawak,
      compliance: draf.pematuhan,
      revokedDocument: draf.pembatalan,

      positionCode: draf.edaranDalaman.jawatan,
      unitCode: draf.edaranDalaman.unit,
      departmentCode: draf.edaranDalaman.bahagian,
      stateCode: draf.edaranDalaman.negeri,
      //ministryDept: draf.edaranLuaran.kementerianJabatan,
      agencyId: draf.edaranLuaran.agensi,

      // Rujuakan would refer to the perkeliling in N026
      referencesType: "2025091514395871811600010", //draf.rujukan, // backend = referencesType, frontend = rujukan[] (type mismatch)

      draftType: draf.jenisDraf,
      // fileName: ??? // Entity has no filename, dto has fileName, frontend has lampiranFiles[] — mismatch
      remarks: draf.catatan,
      urgencyLVL: draf.darurat, // ⚠ backend urgencyLVL vs frontend darurat (not same meaning?)
      createId: "SYSTEM", // Get from logged-in user
      updateId: "SYSTEM", // Get from logged-in user
      upldDrftUId: this.uploadDocumentId
    };
  }

  // ========== UI HELPERS ==========
  onBahagianChange(event: any) {
    const selectedCode = event.target.value;
    const selectedOption = this.bahagianOptions.find(opt => opt.deptCode === selectedCode);

    if (selectedOption) {
      this.draf.processOwner = selectedOption.deptBMDesc;
    }
  }

  onCheckboxChange(event: Event, value: string, field: keyof typeof this.draf) {
    const isChecked = (event.target as HTMLInputElement).checked;

    // Ensure the field exists and is an array
    if (!Array.isArray(this.draf[field])) this.draf[field] = [];

    if (isChecked) {
      if (!this.draf[field].includes(value)) {
        (this.draf[field] as string[]).push(value);
      }
    } else {
      this.draf[field] = (this.draf[field] as string[]).filter((v: string) => v !== value);
    }
  }

  onSingleCheckboxChange(event: any, code: string) {
    this.draf.jenisDraf = event.target.checked ? code : '';
  }

  onCheckboxYNChange(event: Event, field: 'sabah' | 'sarawak') {
    const input = event.target as HTMLInputElement;
    this.draf.termasuk[field] = input.checked ? 'Y' : 'N';
  }

  // Append files, dedupe by name+size, and reset the input to allow re-adding same file
  onLampiranChange(input: HTMLInputElement) {
    const files = input.files;
    if (!files || files.length === 0) {
      input.value = '';
      return;
    }

    const newFiles = Array.from(files);
    const existing = new Set(
      this.draf.lampiranFiles.map((f: File) => `${f.name}|${f.size}|${f.lastModified}`)
    );

    const toAdd = newFiles.filter((f: File) => {
      const key = `${f.name}|${f.size}|${f.lastModified}`;
      return !existing.has(key);
    });

    // 1. Update local preview
    this.draf.lampiranFiles = [...this.draf.lampiranFiles, ...toAdd];

    // 2. Immediately save metadata for each new file
    toAdd.forEach((file: File) => {
      const payload = {
        n018UId: this.savedDraftId,
        fileName: file.name,
        filePath: `/uploads/draf/${file.name}` // temporary placeholder path
      };

      this.hantarSimpanDrafService.postUploadDokumen(payload).subscribe({
        next: (res) => {
          console.log('Lampiran metadata saved:', res),
          this.uploadDocumentId = res.receivedrecord.upldDrftUId;
          this.showUploadPopup = true;
        },
        error: (err) => console.error('Error saving lampiran metadata:', err)
      });
    });

    // Reset so user can re-add same file again
    input.value = '';
  }

  // Remove file by index
  removeLampiran(index: number) {
    if (index >= 0 && index < this.draf.lampiranFiles.length) {
      this.draf.lampiranFiles.splice(index, 1);
    }
  }

  // Utility: format file size nicely
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + units[i];
  }
}

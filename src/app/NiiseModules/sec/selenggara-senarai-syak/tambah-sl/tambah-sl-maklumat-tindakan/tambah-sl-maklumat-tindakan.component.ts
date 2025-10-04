import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { FormDataService } from '../../../../../services/form-data.service';
import { environment } from '../../../../../../environments/environment';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  Tabs2Module,
} from '@coreui/angular';

@Component({
  selector: 'app-tambah-sl-maklumat-tindakan',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    Tabs2Module,
    IconDirective,
  ],
  templateUrl: './tambah-sl-maklumat-tindakan.component.html',
  styleUrl: './tambah-sl-maklumat-tindakan.component.scss'
})
export class TambahSlMaklumatTindakanComponent {
  currentStep: number = 2;

  kategoriPermohonan: string = '0'; //0:Individu , 1:Kastam , 2:LHDN

  steps = [
    { number: 1, title: 'Maklumat Peribadi Subjek', route: '/sec/sl/tambah-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/tambah-sl/maklumat-tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/tambah-sl/dokumen-sokonganSL' },
  ];

  // Form fields
  kodNapNas: string = '';
  nomborNapNas: string = '';
  kodTindakan: string = '';
  tarikhNapNas: string = '';
  tarikhKuatkuasa: string = '';
  tempatKesalahan: string = '';
  pilihTempoh: number = 0;
  tarikhTamatKes: string = '';
  nomborFailImigresen: string = '';
  nomborAgensi: string = '';
  nomborRujukanAgensi: string = '';
  agensiPelapor: string = '';
  arahanKhusus: string = '';
  namaPegawai: string = '';
  nomborTelefonPegawai: string = '';
  maklumatAgensi: string = '';
  emelAgensi: string = '';
  keteranganKes: string = '';
  cawangan: string = '';
  confirmation: boolean = false;

  // Dropdown values
  kodNapNasList = ['AP001', 'AP002', 'AP003'];
  kodTindakanList = ['AAA', 'BBB', 'CCC'];
  pilihTempohList = ['1 Bulan', '2 Bulan', '3 Bulan'];

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  formData: any = null;

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();

    if (!this.formData) {
      console.warn('Form data not found. Redirecting...');
      this.router.navigate(['/sec/selenggara-senarai-syak/tambah-sl']);
      return;
    }

    console.log('Received form data:', this.formData);
    const branchMap: Record<string, string> = {
      'Individu': '0',
      'Kastam': '1',
      'LHDN': '2'
    };

    if (environment.mockBranch && branchMap[environment.mockBranch]) {
      this.kategoriPermohonan = environment.mockBranch; // keep label like 'Individu'
      this.cawangan = this.kategoriPermohonan;          // autofill input
      console.log('kategoriPermohonan set from environment:', this.kategoriPermohonan);
    }
  }

  resetForm(): void {
    // Clear form fields
    this.kodNapNas = '';
    this.nomborNapNas = '';
    this.kodTindakan = '';
    this.tarikhNapNas = '';
    this.tarikhKuatkuasa = '';
    this.tempatKesalahan = '';
    this.pilihTempoh = 0;
    this.tarikhTamatKes = '';
    this.nomborFailImigresen = '';
    this.nomborAgensi = '';
    this.nomborRujukanAgensi = '';
    this.agensiPelapor = '';
    this.arahanKhusus = '';
    this.namaPegawai = '';
    this.nomborTelefonPegawai = '';
    this.maklumatAgensi = '';
    this.emelAgensi = '';
    this.keteranganKes = '';
    this.cawangan = '';
  }

  submitForm(): void {
    const currentForm = {
      kodNapNas: this.kodNapNas,
      nomborNapNas: this.nomborNapNas,
      kodTindakan: this.kodTindakan,
      tarikhNapNas: this.tarikhNapNas,
      tarikhKuatkuasa: this.tarikhKuatkuasa,
      tempatKesalahan: this.tempatKesalahan,
      pilihTempoh: this.pilihTempoh,
      tarikhTamatKes: this.tarikhTamatKes,
      nomborFailImigresen: this.nomborFailImigresen,
      nomborAgensi: this.nomborAgensi,
      nomborRujukanAgensi: this.nomborRujukanAgensi,
      agensiPelapor: this.agensiPelapor,
      arahanKhusus: this.arahanKhusus,
      namaPegawai: this.namaPegawai,
      nomborTelefonPegawai: this.nomborTelefonPegawai,
      maklumatAgensi: this.maklumatAgensi,
      emelAgensi: this.emelAgensi,
      keteranganKes: this.keteranganKes,
    };

    console.log('Current Form Data:', currentForm);

    // Example of navigation to next step with combined data
    this.router.navigate(['/sec/sl/tambah-sl/dokumen-sokonganSL'], {
      state: {
        ...this.formData,
        tindakan: currentForm,
      },
    });
  }

  // Stepper logic
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  nextStep(): void {
    // 1. Get existing data from service
    const existingData = this.formDataService.getFormData();

    // 2. Merge tindakan fields flat into existingData
    const updatedData = {
      ...existingData,
      kodNapNas: this.kodNapNas,
      nomborNapNas: this.nomborNapNas,
      kodTindakan: this.kodTindakan,
      tarikhNapNas: this.tarikhNapNas,
      tarikhKuatkuasa: this.tarikhKuatkuasa,
      tempatKesalahan: this.tempatKesalahan,
      pilihTempoh: this.pilihTempoh,
      tarikhTamatKes: this.tarikhTamatKes,
      nomborFailImigresen: this.nomborFailImigresen,
      nomborAgensi: this.nomborAgensi,
      nomborRujukanAgensi: this.nomborRujukanAgensi,
      agensiPelapor: this.agensiPelapor,
      arahanKhusus: this.arahanKhusus,
      namaPegawai: this.namaPegawai,
      nomborTelefonPegawai: this.nomborTelefonPegawai,
      maklumatAgensi: this.maklumatAgensi,
      emelAgensi: this.emelAgensi,
      keteranganKes: this.keteranganKes,
      cawangan: this.cawangan,
    };

    // 3. Save to service and proceed
    this.formDataService.setFormData(updatedData);
    this.router.navigate(['tambah-sl-dokumen-sokongan'], {
      relativeTo: this.route
    });
  }

  previousStep(): void {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }
}


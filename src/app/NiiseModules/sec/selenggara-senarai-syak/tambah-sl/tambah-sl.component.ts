import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IconDirective } from '@coreui/icons-angular';
import { FormDataService } from '../../../../services/form-data.service';
import { environment } from '../../../../../environments/environment';
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
import {apiConfig} from "../../../../api.config";

@Component({
  selector: 'app-tambah-sl',
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
    IconDirective,
    Tabs2Module,
  ],
  templateUrl: './tambah-sl.component.html',
  styleUrl: './tambah-sl.component.scss'
})
export class TambahSlComponent implements OnInit {
  kategoriPermohonan: string = '0'; //0:Individu , 1:Kastam , 2:LHDN

  step = 1;
  currentStep: number = 1;
  steps = [
    { number: 1, title: 'Maklumat Peribadi Subjek', route: '/sec/sl/tambah-sl' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/sl/tambah-sl/maklumat-tindakan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/sl/tambah-sl/dokumen-sokonganSL' },
  ];


  private apiUrl = apiConfig.apiUrlSec; // backend endpoint

  // Form fields
  nama: string = '';
  nomborKadPengenalan: string = '';
  jenisPengenalan: string = '';
  nomborDokumen: string = '';
  jenisDokumen: string = '';
  warganegara: string = '';
  bangsa: string = '';
  tarikhLahir: string = '';
  jantina: string = '';
  negaraLahir: string = '';
  tempatLahir: string = '';
  fid: string = '';
  dataBiometrik: string = '';
  catatanFizikal: string = '';
  catatanTambahan: string = '';

  nomborSyarikat: string = '';
  namaSyarikat: string = '';
  tarikhSuratAgensi: string = '';
  tarikhSijilAgensi: string = '';

  sahkan: boolean = false;

  warganegaraList = [
    { name: 'Malaysia', code: 'MYS' },
    { name: 'Singapura', code: 'SGP' },
    { name: 'Indonesia', code: 'IND' },
    { name: 'Thailand', code: 'THA' },
    { name: 'Brunei', code: 'BRN' },
    { name: 'Vietnam', code: 'VNM' },
  ];
  bangsaList = ['Melayu', 'Cina', 'India', 'Iban', 'Kadazan'];
  dokumenList = [
    'Pasport Malaysia - Semenanjung',
    'Pasport Malaysia - Sabah',
    'Pasport Malaysia - Sarawak',
  ];

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const branchMap: Record<string, string> = {
      'Individu': '0',
      'Kastam': '1',
      'LHDN': '2'
    };

    if (environment.mockBranch && branchMap[environment.mockBranch]) {
      this.kategoriPermohonan = branchMap[environment.mockBranch];
      console.log('kategoriPermohonan set from environment:', this.kategoriPermohonan);
    }
  }

  private mapApiToForm(data: any) {
    return {
      nama: data.icdName || '',
      nomborKadPengenalan: data.icdKpno || '',
      warganegara: data.icdCitizenship || '',
      bangsa: data.icdRace || '',
      tarikhLahir: data.icdDateOfBirth || '',
      jantina: data.icdGender || '',
      negaraLahir: data.icdCountryOfBirth || '',
      tempatLahir: data.icdPlaceOfBirth || '',
      fid: data.icdFid || '',
      dataBiometrik: data.icdBio || '',
      nomborSyarikat: data.icdCompanyNo || '',
      namaSyarikat: data.icdCompanyName || '',
      tarikhSuratAgensi: data.icdLetterDate || '',
      tarikhSijilAgensi: data.icdCertificateDate || '',
    };
  }

  private getKpCategory(kp: string): 'ic' | 'police' | 'military' {
    if (kp.length === 12) {
      const categoryCode = kp.substring(6, 8); // 7th & 8th digit
      if (categoryCode === '88') {
        return 'police';
      } else if (categoryCode === '99') {
        return 'military';
      }
    }
    return 'ic';
  }

  fetchIdentityData() {
    console.log('NoKp:', this.nomborKadPengenalan);

    if (/^\d{12}$/.test(this.nomborKadPengenalan)) {
      const category = this.getKpCategory(this.nomborKadPengenalan);
      if (category === 'police') {
        this.jenisPengenalan = 'police_id';
      }
      if (category === 'military') {
        this.jenisPengenalan = 'military_id';
      }
      else {
        this.jenisPengenalan = 'ic';
      }
      console.log('Category detected:', category);

      this.http
        .get<any>(this.apiUrl+'/getsemakMyIdentity', {
          params: { kpno: this.nomborKadPengenalan },
        })
        .subscribe({
          next: (data) => {
            console.log('API response:', data);
            Object.assign(this, this.mapApiToForm(data));
          },
          error: (err) => {
            console.error('API error:', err);
          },
        });
    }
  }

  handleChange(newTab: string | number | undefined): void {
    this.kategoriPermohonan = String(newTab || '0');
    this.resetForm();
    console.log('Tab changed to:', this.kategoriPermohonan);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  getFormData(): any {
    return {
      kategoriPermohonan: this.kategoriPermohonan,
      nama: this.nama,
      nomborKadPengenalan: this.nomborKadPengenalan,
      jenisPengenalan: this.jenisPengenalan,
      nomborDokumen: this.nomborDokumen,
      jenisDokumen: this.jenisDokumen,
      warganegara: this.warganegara,
      bangsa: this.bangsa,
      tarikhLahir: this.tarikhLahir,
      jantina: this.jantina,
      negaraLahir: this.negaraLahir,
      tempatLahir: this.tempatLahir,
      fid: this.fid,
      dataBiometrik: this.dataBiometrik,
      catatanFizikal: this.catatanFizikal,
      catatanTambahan: this.catatanTambahan,
      nomborSyarikat: this.nomborSyarikat,
      namaSyarikat: this.namaSyarikat,
      tarikhSuratAgensi: this.tarikhSuratAgensi,
      tarikhSijilAgensi: this.tarikhSijilAgensi,
      sahkan: this.sahkan,
    };
  }

  nextStep(): void {
    const formData = this.getFormData();
    this.formDataService.setFormData(formData);
    this.router.navigate(['./tambah-sl-maklumat-tindakan'], {
      relativeTo: this.route
    });
  }

  resetForm(): void {
    this.nama = '';
    this.nomborKadPengenalan = '';
    this.jenisPengenalan = '';
    this.nomborDokumen = '';
    this.jenisDokumen = '';
    this.warganegara = '';
    this.bangsa = '';
    this.tarikhLahir = '';
    this.jantina = '';
    this.negaraLahir = '';
    this.tempatLahir = '';
    this.fid = '';
    this.dataBiometrik = '';
    this.catatanFizikal = '';
    this.catatanTambahan = '';
    this.nomborSyarikat = '';
    this.namaSyarikat = '';
    this.tarikhSuratAgensi = '';
    this.tarikhSijilAgensi = '';
    this.sahkan = false;
  }
}

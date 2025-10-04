import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { BadgeModule, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../../shared/reusable-tab/reusable-tab.component';
import { ButtonModule, CardModule, FormModule, HeaderModule, AvatarModule } from '@coreui/angular';
import { PermohonanDetailService, PermohonanDetail, HantarWujudIDPayload } from '../../../services/permohonan-detail-api.service';

@Component({
  selector: 'maklumat-profil-pegawai',
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
  templateUrl: './maklumat-profil-pegawai.component.html',
  styleUrls: ['./maklumat-profil-pegawai.component.scss']
})
export class MaklumatProfilPegawaiComponent implements OnInit {

  formData: PermohonanDetail | null = null;

  currentStep = 1;
  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private permohonanDetailService: PermohonanDetailService
  ) { }

  ngOnInit(): void {
    this.loadPermohonanDetail();
  }

  loadPermohonanDetail(): void {
    const mfid = this.route.snapshot.paramMap.get('mfid') || '900101138232';

    this.permohonanDetailService.getPermohonanDetail(mfid).subscribe({
      next: (res) => {
        this.formData = {
          staffType: res.data.staffType,
          noServ: res.data.noServ,
          currKpNo: res.data.currKpNo,
          citizenship: res.data.citizenship,
          name: res.data.name,
          dob: res.data.dob,
          gender: res.data.gender,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          post: res.data.post,
          gred: res.data.gred,
          stt: res.data.stt,
          asgn: res.data.asgn,
          div: res.data.div,
          unit: res.data.unit,
          gredXtra: '',
          keperluanBiometrik: 'Y',
          jenisBiometrik: { capJari: false, wajah: false },
          kaedahLog: { capJari: false, wajah: false, otp: false }
        };
        console.log('Loaded PermohonanDetail:', this.formData);
      },
      error: (err) => console.error('Failed to load PermohonanDetail', err)
    });
  }

  goToPrevious(): void {
    this.router.navigate(['/IDM/shared/senarai-permohonan-id']);
  }

  goToNext(): void {
    this.permohonanDetailService.setDraft(this.buildPayload());
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-penetapan-peranan']);
  }

  getJenisBiometrikString(jenis: { capJari: boolean; wajah: boolean }): string {
    const types: string[] = [];
    if (jenis.capJari) types.push('1');
    if (jenis.wajah) types.push('2');
    return types.join(',');
  }

  getKaedahLogString(kaedah: { capJari: boolean; wajah: boolean; otp: boolean }): string {
    const methods: string[] = [];
    if (kaedah.capJari) methods.push('1');
    if (kaedah.wajah) methods.push('2');
    if (kaedah.otp) methods.push('3');
    return methods.join(',');
  }

  private buildPayload(): HantarWujudIDPayload {
    if (!this.formData) {
      throw new Error('Form data is not loaded.');
    }

    return {
      j007UsrProTmpDTO: {
        mfid: this.formData.currKpNo,
        brnZone: this.formData.stt,
        gredXtra: this.formData.gredXtra,
        bioApprvInd: this.formData.keperluanBiometrik,
        bioType: this.getJenisBiometrikString(this.formData.jenisBiometrik),
        typeLogin: this.getKaedahLogString(this.formData.kaedahLog),
        ptjCd: 'PTJ99'
      },
      j008UsrBrnTmpDTO: { brnCd: 'NIISE' },
      j009UsrPtjTmpDTO: undefined as any,
      j010UsrRlTmPDTO: undefined as any,
      j012UsrExctxnTmpDTO:{
        txnCd:'000001'
      },
      j026SupDocDTO: undefined as any
    };
  }


  wujudID(): void {
    if (!this.formData) {
      alert('Data belum dimuatkan');
      return;
    }
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      this.permohonanDetailService.hantarPermohonan(this.buildPayload()).subscribe({
        next: (res) => {
          alert('Permohonan ID pengguna telah berjaya dihantar!');
          console.log('Success response:', res);
        },
        error: (err) => {
          console.error('Error hantarPermohonan:', err);
          alert('Ralat semasa menghantar permohonan ID.');
        }
      });
    }
  }

  tolakPermohonan(): void {
    if (!this.formData) {
      alert('Data belum dimuatkan');
      return;
    }
    if (confirm('Adakah anda pasti untuk menolak permohonan ID pengguna ini?')) {
      this.permohonanDetailService.tolakPermohonan(this.buildPayload()).subscribe({
        next: (res) => {
          alert('Permohonan ID pengguna telah berjaya ditolak!');
          console.log('Success response:', res);
        },
        error: (err) => {
          console.error('Error tolakPermohonan:', err);
          alert('Ralat semasa menolak permohonan ID.');
        }
      });
    }
  }
}

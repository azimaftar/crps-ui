import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { Router } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-papar-sl',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    IconDirective
  ],
  templateUrl: './papar-sl.component.html',
  styleUrls: [
    '../sl.component.scss'
  ]
})
export class PaparSlComponent implements OnInit {
  pageTitle = 'Maklumat Subjek';

  // Hold the whole object
  item: any;

  // Individual fields
  nama = '';
  kpno = '';
  noDokumen = '';
  tarikhLahir = '';
  jantina = '';
  warganegara = '';
  statusPerkahwinan = '';
  alamat1 = '';
  alamat2 = '';
  alamat3 = '';
  poskod = '';
  bandar = '';
  negeri = '';
  phoneno = '';
  email = '';
  statusPermohonan = '';

  // Stepper props
  currentStep = 2;
  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '/sec/sl/carian-sl' },
    { number: 2, title: 'Maklumat Subjek', route: '' },
    { number: 3, title: 'Maklumat Tindakan', route: '' },
    { number: 4, title: 'Maklumat Terperinci', route: '' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.item = history.state.data;
    this.currentStep = history.state.currentStep;
    this.pageTitle = history.state.pageTitle;

    if (this.item) {
      this.nama = this.item.t002Name;
      this.kpno = this.item.t002KpNo;
      this.noDokumen = this.item.t005DocNumber;
      this.tarikhLahir = this.item.t002Dob;

      // Map gender value
      if (this.item.t002Gender === 'L') {
        this.jantina = 'Lelaki';
      } else if (this.item.t002Gender === 'P') {
        this.jantina = 'Perempuan';
      } else {
        this.jantina = '-';
      }

      // Map citizenship value
      if (this.item.t002Citizenship === 'MYS') {
        this.warganegara = 'Malaysia';
      } else if (this.item.t002Citizenship === 'IND') {
        this.warganegara = 'Indonesia';
      } else {
        this.warganegara = '-';
      }
      this.statusPerkahwinan = this.item.t002MaritalStatus;
      this.alamat1 = this.item.t005Address1;
      this.alamat2 = this.item.t005Address2;
      this.alamat3 = this.item.t005Address3;
      this.poskod = this.item.t005Postcode;
      this.bandar = this.item.t005City;
      this.negeri = this.item.t005State;
      this.phoneno = this.item.t002PhoneNumber;
      this.email = this.item.t002Email;

      // Map status permohonana value
      if (this.item.t011ApplicationType === '0') {
        this.statusPermohonan = 'Baru';
      } else if (this.item.t011ApplicationType === '1') {
        this.statusPermohonan = 'Aktif';
      } else {
        this.statusPermohonan = '-';
      }
    }

    console.log('Item received:', this.item);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  nextPage(): void {
    this.router.navigate(['/sec/sl/papar-sl/papar-sl-maklumat-tindakan'], {
      state: {
        data: this.item,
        currentStep: this.currentStep + 1,
        pageTitle: 'Maklumat Tindakan'
      }
    });
  }

  prevPage(): void {
    this.router.navigate(['/sec/sl/carian-sl'], {
      state: {
        data: this.item,
        currentStep: this.currentStep - 1,
        pageTitle: 'Carian & Senarai Subjek'
      }
    });
  }
}

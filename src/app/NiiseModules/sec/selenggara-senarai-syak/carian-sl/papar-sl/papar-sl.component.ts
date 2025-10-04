import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
@Component({
  selector: 'app-papar-sl',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ButtonModule,
    IconDirective
  ],
  templateUrl: './papar-sl.component.html',
  styleUrl: './papar-sl.component.scss'
})
export class PaparSlComponent {
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
    { number: 1, title: 'Carian & Senarai Subjek', route: '/sec/selenggara-senarai-syak/carian-sl' },
    { number: 2, title: 'Maklumat Subjek', route: '/sec/selenggara-senarai-syak/carian-sl/papar-sl' },
    { number: 3, title: 'Maklumat Tindakan', route: '/sec/selenggara-senarai-syak/carian-sl/papar-sl/papar-sl-maklumat-tindakan' },
    { number: 4, title: 'Maklumat Terperinci', route: '/sec/selenggara-senarai-syak/carian-sl/papar-sl/papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.item = history.state.data;

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
    this.router.navigate(['./papar-sl-maklumat-tindakan'], {
      relativeTo: this.route,
      state: {
        data: this.item,
        currentStep: this.currentStep + 1,
        pageTitle: 'Maklumat Tindakan'
      }
    });
  }

  prevPage(): void {
    this.router.navigate(['..'], {
      relativeTo: this.route,
      state: {
        data: this.item,
        currentStep: this.currentStep - 1,
        pageTitle: 'Carian & Senarai Subjek'
      }
    });
  }

  navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route], {
        state: {
          data: this.item,
        },
        relativeTo: this.route
      });
    }
  }
}

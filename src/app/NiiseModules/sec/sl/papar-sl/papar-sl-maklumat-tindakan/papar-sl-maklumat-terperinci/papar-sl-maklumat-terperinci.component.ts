import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { Router } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-papar-sl-maklumat-terperinci',
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
  templateUrl: './papar-sl-maklumat-terperinci.component.html',
  styleUrls: ['../../../../keputusan-permohonan-JKRIM/keputusan-permohonan-jkrim.component.scss']
})
export class PaparSlMaklumatTerperinciComponent {

  item: any;
  pageTitle = 'Maklumat Terperinci';

  tarikhMasuk = '';
  masaMasuk = '';
  pintuMasuk = '';
  jenisPas = '';
  tarikhTamatPas = '';
  tarikhTamatDokumen = '';

  currentStep = 4;

  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '/sec/sl/carian-sl' },
    { number: 2, title: 'Maklumat Subjek', route: '' },
    { number: 3, title: 'Maklumat Tindakan', route: '' },
    { number: 4, title: 'Maklumat Terperinci', route: '' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.item = history.state.data;
    this.pageTitle = history.state.pageTitle;
    this.currentStep = history.state.currentStep;

    if (this.item) {
      this.tarikhMasuk = this.item.t021FlStartDate;
      this.masaMasuk = this.item.t021ApplicationTime;
      this.pintuMasuk = "IBC";
      this.jenisPas = "IBC";
      this.tarikhTamatPas = this.item.t021FlEndDate;
      this.tarikhTamatDokumen = this.item.t011DocumentEndDate;
    }

    console.log('Item received in Maklumat Terperinci:', this.item);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  prevPage(): void {
    this.router.navigate(['/sec/sl/papar-sl/papar-sl-maklumat-tindakan'], {
      state: {
        data: this.item,
        currentStep: this.currentStep - 1,
        pageTitle: 'Maklumat Tindakan'
      }
    });
  }

}

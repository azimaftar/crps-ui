import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
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
  styleUrl: '../../papar-sl.component.scss'
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
    this.router.navigate(['/sec/selenggara-senarai-syak/carian-sl/papar-sl/papar-sl-maklumat-tindakan'], {
      state: {
        data: this.item,
        currentStep: this.currentStep - 1,
        pageTitle: 'Maklumat Tindakan'
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

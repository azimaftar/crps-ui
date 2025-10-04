import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-papar-sl-maklumat-tindakan',
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
  templateUrl: './papar-sl-maklumat-tindakan.component.html',
  styleUrls: ['../papar-sl.component.scss']
})
export class PaparSlMaklumatTindakanComponent implements OnInit {

  item: any;
  pageTitle = 'Maklumat Tindakan';

  napNasKod = '';
  napNasNo = '';
  tindakanKod = '';
  tarikhNapNas = '';
  tarikhKuatKuasa = '';
  tempatKesalahan = '';
  tempohPermohonan = '';
  tarikhTamatKes = '';
  failImigresenNo = '';
  failAgensiNo = '';
  rujukanAgensiNo = '';
  agensiKod = '';
  arahanKhusus = '';
  namaPegawai = '';
  phoneNoPegawai = '';
  maklumatAgensi = '';
  emailAgensi = '';
  keteranganKes = '';

  currentStep = 3;

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
      this.napNasKod = this.item.t011NapNasCode;
      this.napNasNo = this.item.t011NapNasNumber;
      this.tindakanKod = this.item.t011ActionCode;
      this.tarikhNapNas = this.item.t011NapNasDate;
      this.tarikhKuatKuasa = this.item.t011SlStartDate;
      this.tempatKesalahan = this.item.t011OffenceLocation;
      this.tempohPermohonan = this.item.t011AppDuration;
      this.tarikhTamatKes = this.item.t011SlEndDate;
      this.failImigresenNo = this.item.t014ImmigrationFileNumber;
      this.failAgensiNo = this.item.t014AgencyFileNumber;
      this.rujukanAgensiNo = this.item.t014AgencyRefNumber;
      this.agensiKod = this.item.t014AgencyCode;
      this.arahanKhusus = this.item.t014SpecialNote;
      this.namaPegawai = this.item.t014OffName;
      this.phoneNoPegawai = this.item.t014OffContactNo;
      this.maklumatAgensi = this.item.t014AgencyInfo;
      this.emailAgensi = this.item.t014AgencyEmail;
      this.keteranganKes = this.item.t014ActionDesc;
    }

    console.log('Item received in Maklumat Tindakan:', this.item);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  nextPage(): void {
    this.router.navigate(['/sec/selenggara-senarai-syak/carian-sl/papar-sl/papar-sl-maklumat-tindakan/papar-sl-maklumat-terperinci'], {
      state: {
        data: this.item,
        currentStep: this.currentStep + 1,
        pageTitle: 'Maklumat Terperinci'
      }
    });
  }

  prevPage(): void {
    this.router.navigate(['/sec/selenggara-senarai-syak/carian-sl/papar-sl'], {
      state: {
        data: this.item,
        currentStep: this.currentStep - 1,
        pageTitle: 'Maklumat Subjek'
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

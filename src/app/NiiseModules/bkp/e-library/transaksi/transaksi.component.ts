import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-transaksi',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    BorderDirective,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ContainerComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    CommonModule,
    ProgressFlowComponent,
    QRCodeComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './transaksi.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class TransaksiComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // // Stepper props
  // currentStep = 3;
  // steps = [
  //   { number: 1, title: 'Maklumat Carian Dokumen', route: 'bkp/e-library/maklumat-carian' },
  //   { number: 2, title: 'Kemas kini', route: 'bkp/e-library/maklumat-carian/kemaskini' },
  //   { number: 3, title: 'Transaksi', route: 'bkp/e-library/transaksi' },
  // ];

  // New props
  agreed = false;
  action: string | null = null;
  actionLabel: string = 'meneruskan';
  fileLink: string | null = null;
  fileName: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.action = params['action'] || null;
      this.fileLink = params['fileLink'] || null;
      this.fileName = params['fileName'] || null;

      if (this.action === 'cetak') {
        this.actionLabel = 'cetak';
      } else if (this.action === 'muat-turun') {
        this.actionLabel = 'muat turun';
      }
    });
  }

  teruskan() {
    if (!this.fileLink) return;

    if (this.action === 'cetak') {
      const printWindow = window.open(this.fileLink, "_blank");
      printWindow?.addEventListener("load", () => {
        printWindow.print();
      });
    } else if (this.action === 'muat-turun') {
      const a = document.createElement("a");
      a.href = this.fileLink;
      a.download = this.fileName || 'dokumen';
      a.click();
    }
  }

  // // Stepper logic
  // isStepActive(stepNumber: number): boolean {
  //   return this.currentStep === stepNumber;
  // }
  // navigateTo(step: any) {
  //   this.currentStep = step.number;
  //   if (step.route) {
  //     this.router.navigate([step.route]);
  //   }
  // }
}

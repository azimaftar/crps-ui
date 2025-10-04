import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { cilPlus } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

interface TableItem {
  namaDokumen: string;
  format: string;
}

@Component({
  selector: 'app-kemas-kini-status-pemulangan-perampasan-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    StepperComponent,
    TableDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    IconModule,
    MatIconModule,
    ModalComponentComponent,
    MatIcon
  ],
  templateUrl: './kemas-kini-status-pemulangan-perampasan-kad-kuasa.component.html',
  styleUrl: './kemas-kini-status-pemulangan-perampasan-kad-kuasa.component.scss'
})
export class KemasKiniStatusPemulanganPerampasanKadKuasaComponent {
  icons = { cilPlus };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilPlus };
  }

  currentMainStep = 5;
  currentPage = 1;
  hantarRekodModal: boolean = false;
  muatNaikModal: boolean = false;
  rowsPerPage = 5;
  sortAsc = true;
  sortColumn: keyof TableItem | '' = '';

  data: TableItem[] = [
    {
      namaDokumen: 'Laporan Polis - Rampasan Kad Kuasa',
      format: '.pdf'
    },
  ];

  sort(column: keyof TableItem) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }

  closeHantarRekodModal() {
    this.hantarRekodModal = false;
  }

  closeMuatNaikModal() {
    this.muatNaikModal = false;
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa']);
  }

  // navigateNextPage() {
  //   this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-status-pemulangan-perampasan-kad-kuasa/kemas-kini-status-pemulangan-perampasan-kad-kuasa']);
  // }

  HantarRekodModal() {
    this.hantarRekodModal = true;
  }

  openMuatNaikModal() {
    this.muatNaikModal = true;
  }


}

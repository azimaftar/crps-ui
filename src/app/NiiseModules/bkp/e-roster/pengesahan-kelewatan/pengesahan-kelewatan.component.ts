import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
@Component({
  selector: 'app-pengesahan-kelewatan',
  templateUrl: './pengesahan-kelewatan.component.html',
  styleUrls: ['../../bkp.scss'],
   standalone: true,
    imports: [
      CommonModule,
      CardModule,
      GridModule,
      NavModule,
      ModalModule,
      FormsModule,
    ],
})
export class PengesahanKelewatanComponent {
  constructor(private router: Router) {}

   openDetailPK(): void {
     this.router.navigate(['/bkp/e-roster/pengesahan-kelewatan/maklumat-pegawai']);
  }
   openList(): void {
     this.router.navigate(['/bkp/e-roster/pengesahan-kelewatan/pengesahan-kelewatan-list']);
  }

}


import { Component, inject } from '@angular/core';
import {
  RowComponent,
  CardComponent,
  ColComponent,
  CardBodyComponent,
  ContainerComponent,
} from '@coreui/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-penjanaan-surat-pertukaran',
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
  ],
  templateUrl: './penjanaan-surat-pertukaran.component.html',
  styleUrls: ['../../bkp.scss']
})
export class PenjanaanSuratPertukaranComponent {
  private router = inject(Router);

  constructor() {}

  onDaftarSuratPertukaran(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/penjanaan-surat-pertukaran/maklumat-surat-pertukaran',
    ]);
  }

  onCarian(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/penjanaan-surat-pertukaran/maklumat-carian',
    ]);
  }
}

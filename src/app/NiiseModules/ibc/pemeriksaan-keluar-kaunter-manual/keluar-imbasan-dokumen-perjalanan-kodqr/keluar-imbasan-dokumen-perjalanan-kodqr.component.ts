import { Component, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-keluar-imbasan-dokumen-perjalanan-kodqr',
  imports: [],
  templateUrl: './keluar-imbasan-dokumen-perjalanan-kodqr.component.html',
  styleUrl: './keluar-imbasan-dokumen-perjalanan-kodqr.component.scss'
})
export class KeluarImbasanDokumenPerjalananKodqrComponent {

constructor(private router: Router, private route: ActivatedRoute) {}

  openPage(): void {
    this.router.navigate(['../maklumat-profil-pengembara-semak'], { relativeTo: this.route });
  }
}

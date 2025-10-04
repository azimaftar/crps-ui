import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, ColComponent, RowComponent, GridModule } from '@coreui/angular';
import {
  ButtonModule,
  CardModule,
  FormModule,
} from '@coreui/angular';

@Component({
  selector: 'reusable-tab',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    BadgeModule
  ],
  templateUrl: './reusable-tab.component.html',
  styleUrls: [
    // '../../../bkp.scss'
    './reusable-tab.component.scss'
  ]
})
export class ReusableTabComponent {
  @Input() currentStep: number = 1;  //  Accept current step from outside

  @Input() steps: string[] = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Maklumat Akademik',
    'Maklumat Penguasaan Bahasa',
    'Maklumat Passport',
    'Maklumat Anugerah',
    'Maklumat Akaua Bank',
    'Maklumat Kegiatan Luar',
    'Maklumat Harta',
    'Maklumat Keluarga',
    'Maklumat Haji'
  ];
}

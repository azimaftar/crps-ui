import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-pilih-jenis-selenggara',
  templateUrl: './pilih-jenis-selenggara.component.html',
  styleUrl: './pilih-jenis-selenggara.component.scss',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule],
})
export class PilihJenisSelenggaraComponent {
  static title: string = 'Pilih Jenis Selenggara';
} 

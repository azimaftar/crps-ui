import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-laman-utama-pengurusan-perkapalan',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective],
  templateUrl: './laman-utama-pengurusan-perkapalan.component.html',
  styleUrl: './laman-utama-pengurusan-perkapalan.component.scss'
})
export class LamanUtamaPengurusanPerkapalanComponent {

}

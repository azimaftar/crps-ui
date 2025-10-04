import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-laman-utama-pas-menaiki-kapal',
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
  templateUrl: './laman-utama-pas-menaiki-kapal.component.html',
  styleUrl: './laman-utama-pas-menaiki-kapal.component.scss'
})
export class LamanUtamaPasMenaikiKapalComponent {

}

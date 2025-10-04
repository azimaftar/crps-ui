import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ContainerComponent, ProgressComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-imbasan-cap-jari-kanan',
  imports: [ContainerComponent,
    CardComponent,           // <c-card>
    CardHeaderComponent,     // <c-card-header>
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ProgressComponent],   // <c-card-body>
  templateUrl: './imbasan-cap-jari-kanan.component.html',
  styleUrl: './imbasan-cap-jari-kanan.component.scss'
})
export class ImbasanCapJariKananComponent {

}

import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ContainerComponent, ProgressComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-imbasan-cap-jari-kiri',
  imports: [ContainerComponent,
    CardComponent,           // <c-card>
    CardHeaderComponent,     // <c-card-header>
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ProgressComponent],
  templateUrl: './imbasan-cap-jari-kiri.component.html',
  styleUrl: './imbasan-cap-jari-kiri.component.scss'
})
export class ImbasanCapJariKiriComponent {

}
import { Component } from '@angular/core';
import {ButtonDirective, CardBodyComponent} from "@coreui/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-feed',
    imports: [
        ButtonDirective,
        CardBodyComponent,
        RouterLink
    ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}

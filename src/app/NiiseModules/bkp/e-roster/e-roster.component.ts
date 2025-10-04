import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-roster',
  imports: [],
  templateUrl: './e-roster.component.html',
  styleUrls: ['../bkp.scss']
})
export class ERosterComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToRekodMasa() {
    this.router.navigate(['clock-in'], { relativeTo: this.route });
  }

  goToCuti() {
    //pergi page cuti
    // this.router.navigate(['clock-in'], { relativeTo: this.route });
  }

}

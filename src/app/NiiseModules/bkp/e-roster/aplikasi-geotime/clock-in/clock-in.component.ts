import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clock-in',
  imports: [FormsModule],
  templateUrl: './clock-in.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ]
})
export class ClockInComponent {

  now = new Date();
  data = {
    nama: 'Siti Nur Afiqah Binti Ramlan',
    tarikh: this.now.toLocaleDateString('en-GB'), // e.g., 03/06/2025
    masa: this.now.toLocaleTimeString('en-US', {               // e.g., 07:52 AM
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToClockIn() {
    //pergi page maklumat clock in
    // this.router.navigate(['clock-in'], { relativeTo: this.route });
  }

}

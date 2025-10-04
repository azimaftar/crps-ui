import { Component, OnInit, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  dateRange = '1 JANUARI SEHINGGA 30 JUN 2025';
  currentTime = signal('');

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.updateTime();
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => this.updateTime()); 
      }, 60_000); 
    });
  }

  updateTime(): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kuala_Lumpur',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    this.currentTime.set(
      new Intl.DateTimeFormat('ms-MY', options).format(now)
    );
  }
}

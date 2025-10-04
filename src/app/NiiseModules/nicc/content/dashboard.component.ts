import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SafeUrlPipe } from './safe-url.pipe';

interface Frame {
  title: string;
  url: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [NgForOf, NgIf, MatCardModule, SafeUrlPipe]
})
export class DashboardComponent {
  frames: Frame[] = [
    { title: 'Google', url: 'https://www.google.com' },
    { title: 'Angular', url: 'https://angular.io' },
    { title: 'Material UI', url: 'https://mui.com' },
    { title: 'Wikipedia', url: 'https://www.wikipedia.org' },
    { title: 'YouTube', url: 'https://www.youtube.com' },
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'StackOverflow', url: 'https://stackoverflow.com' },
    { title: 'Reddit', url: 'https://reddit.com' },
    { title: 'Reddit', url: 'https://reddit.com' },
  ];

  pairedFrames: { row1: Frame | null; row2: Frame | null }[] = [];

  constructor() {
    for (let i = 0; i < this.frames.length; i += 2) {
      this.pairedFrames.push({
        row1: this.frames[i] ?? null,
        row2: this.frames[i + 1] ?? null,
      });
    }
  }
}

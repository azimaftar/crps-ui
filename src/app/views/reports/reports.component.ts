import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, ProgressModule } from '@coreui/angular';

@Component({
  selector: 'app-reports',
  imports: [CardModule, ProgressModule, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  cards = [
    { title: 'Total Users', value: 1200, description: 'Active this month' },
    { title: 'New Signups', value: 350, description: 'Compared to last month' },
    { title: 'Revenue', value: '$24K', description: 'Generated this quarter' },
    { title: 'Feedback', value: '89%', description: 'Positive ratings' },
  ];
}

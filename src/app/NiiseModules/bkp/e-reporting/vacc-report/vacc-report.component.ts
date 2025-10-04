import { Component, OnInit } from '@angular/core';
//import { ReportService } from '../services/report.service';
import { ReportService, VaccineReportModel } from '../../../../services/e-reporting/report.service';
//import { VaccReport } from '../models/vacc-report.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacc-report',
  templateUrl: './vacc-report.component.html',
  styleUrls: ['./vacc-report.component.scss'],
   imports: [CommonModule]
})

export class VaccReportComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadSummaryReports();
  }

  loadSummaryReports(): void {
    this.reportService.getVaccinationSummary().subscribe(data => {
  this.reports = data;
});

  }
}
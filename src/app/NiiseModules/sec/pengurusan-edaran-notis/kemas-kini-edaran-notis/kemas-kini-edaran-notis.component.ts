import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';


@Component({
  selector: 'app-kemas-kini-edaran-notis',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    TableDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    IconDirective,
  ],
  templateUrl: './kemas-kini-edaran-notis.component.html',
  styleUrls: [
  '../pengurusan-edaran-notis.component.scss'
]

})
export class KemasKiniEdaranNotisComponent {
  noResultsFound = false;
  currentStep = 1;
  totalSteps = 3;
  pageTitle = 'Senarai Permohonan Notis Amaran';
  searchTerm = '';
  searchResults: any[] = [];

  steps = [
    { number: 1, title: 'Senarai Notis', route: '' },
    { number: 2, title: 'Maklumat Permohonan', route: '' },
    { number: 3, title: 'Kelulusan', route: ''},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
      this.currentStep = stepNumber;
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find((step) => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
    }
  }

  onSearchInput(): void {
    const input = this.searchTerm.trim();

    if (!input) {
      this.searchResults = [];
      this.noResultsFound = false;
      return;
    }

    const isDate = /^\d{2}-\d{2}-\d{4}$/.test(input);
    const search$ = isDate
      ? this.subjectService.searchByDate(input)
      : this.subjectService.searchByIdNotis(input);

    search$.subscribe((results) => {
      this.searchResults = results;
      this.noResultsFound = results.length === 0;
    });
  }

  onRowAction(item: any): void {
    console.log('Selected item:', item); // ✅ check if it's correct
    this.currentStep += 1;
    this.router.navigate(['./maklumat-pemohon'], {
      relativeTo: this.route,
      state: {
        data: item,
        currentStep: this.currentStep,
        pageTitle: this.pageTitle,
      },
    });
  }
}

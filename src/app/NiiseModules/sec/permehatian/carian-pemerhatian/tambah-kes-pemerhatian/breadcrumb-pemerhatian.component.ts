import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb-pemerhatian',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="step-bar d-flex justify-content-start mb-4 flex-wrap">
      <div
        class="step-item me-3 mb-2"
        *ngFor="let step of steps; let i = index"
        [ngClass]="{
          'active': i + 1 === activeStep,
          'completed': i + 1 < activeStep
        }"
      >
        <span class="step-number">{{ i + 1 }}</span>
        <span class="step-label">{{ step }}</span>
      </div>
    </div>
  `,
  styles: [`
    .step-bar {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 10px;
    }
    .step-item {
      display: inline-flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 6px;
      background: #e9ecef;
      font-size: 14px;
      cursor: default;
    }
    .step-number {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 50%;
      background: #adb5bd;
      color: #fff;
      text-align: center;
      line-height: 24px;
      font-weight: bold;
    }
    .step-item.active {
      background: #eaf1ff;
      font-weight: 600;
      color: #0d6efd;
    }
    .step-item.active .step-number {
      background: #0d6efd;
    }
    .step-item.completed .step-number {
      background: #198754; /* green for completed */
    }
  `],
})
export class BreadcrumbpemerhatianComponent {
  @Input() activeStep: number = 1;
  @Input() steps: string[] = [
    'Carian & Senarai Subjek',
    'Maklumat Subjek',
    'Maklumat Tindakan',
    'Dokumen Sokongan'
  ];
}

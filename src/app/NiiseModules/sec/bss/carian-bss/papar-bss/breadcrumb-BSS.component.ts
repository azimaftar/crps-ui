import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb-BSS',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3 rounded h-100" style="overflow-y: auto; padding-top: 20px;">
      <div class="d-flex flex-column gap-3" style="position: relative;">
        <!-- Vertical Line -->
        <div
          style="
            position: absolute;
            left: 11px;
            top: 24px;
            bottom: 24px;
            width: 2px;
            background-color: #dee2e6;
            z-index: 0;
          "
        ></div>

        <!-- Steps -->
        <div
          class="d-flex align-items-start"
          *ngFor="let step of steps; let i = index"
          style="z-index: 1;"
        >
          <div style="position: relative;">
            <div
              [ngClass]="{
                'bg-dark': true,
                'fw-bold': i + 1 === activeStep
              }"
              class="text-white rounded-circle d-flex align-items-center justify-content-center mt-3"
              style="width: 24px; height: 24px; margin-right: 8px;"
            >
              {{ i + 1 }}
            </div>
          </div>
          <div class="d-flex flex-column">
            <small class="text-muted">Langkah {{ i + 1 }}</small>
            <span
              class="text-black"
              [class.fw-bold]="i + 1 === activeStep"
            >
              {{ step }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BreadcrumbBSSComponent {
  @Input() activeStep: number = 1;
  @Input() steps: string[] = [
    'Carian Permohonan',
    'Maklumat Peribadi Bukan Subjek Sebenar (BSS)',
    'Semakan Permohonan'
  ];
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { TakwimHoliday } from '../takwmin.service';
import { EditHolidayModalComponent } from '../kemaskini/kemaskini-takwim.component';
import { TakwimService } from '../takwmin.service';

@Component({
  selector: 'app-holiday-modal',
  templateUrl: './holiday-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    EditHolidayModalComponent,
  ],
})
export class HolidayModalComponent {
  @Input() holidayDetails: TakwimHoliday[] = [];
  @Input() newEvent: {
    startDate: string;
    endDate: string;
    eventName: string;
    title: string;
  } = {
    startDate: '',
    endDate: '',
    eventName: '',
    title: '',
  };

  @Output() save = new EventEmitter<typeof this.newEvent>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private takwimService: TakwimService) {}

  newHoliday: TakwimHoliday = {
    uuid: 0,
    state: '',
    ctry: '',
    date: '',
    holidayType: null,
    holidayDetail: null,
  };

  selectedHoliday: TakwimHoliday & { index?: number } | null = null;

  addHoliday(): void {
    if (
      this.newHoliday.holidayType?.trim() &&
      this.newHoliday.holidayDetail?.trim() &&
      this.newHoliday.state &&
      this.newHoliday.ctry &&
      this.newHoliday.date
    ) {
      const newUuid = Date.now(); // Mock UUID
      this.holidayDetails.push({ ...this.newHoliday, uuid: newUuid });

      this.newHoliday = {
        uuid: 0,
        state: '',
        ctry: '',
        date: '',
        holidayType: null,
        holidayDetail: null,
      };
    }
  }

  openEditModal(uuid: number): void {
    const index = this.holidayDetails.findIndex(h => h.uuid === uuid);
    if (index !== -1) {
      this.selectedHoliday = { ...this.holidayDetails[index] };
    }
  }

  onHolidayUpdated(updated: TakwimHoliday): void {
    const index = this.holidayDetails.findIndex(h => h.uuid === updated.uuid);
    if (index !== -1) {
      this.holidayDetails[index] = { ...updated };
    }

    // Refresh list from backend
    const { startDate } = this.newEvent;
    const { state, ctry } = updated;

    this.takwimService.getTakwimByTarikh(startDate, state, ctry).subscribe({
      next: (data) => {
        this.holidayDetails = data.data;
      },
      error: (err) => console.error('Failed to reload holidays:', err),
    });

    this.selectedHoliday = null;
  }

  removeHoliday(index: number): void {
    this.holidayDetails.splice(index, 1);
  }

  onSave(): void {
    this.save.emit(this.newEvent);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}


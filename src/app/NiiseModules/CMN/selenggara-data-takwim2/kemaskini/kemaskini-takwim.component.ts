import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule, ButtonModule } from '@coreui/angular';
import { TakwimHoliday } from '../takwmin.service';
import { TakwimService } from '../takwmin.service';

@Component({
  selector: 'edit-holiday-modal',
  templateUrl: './kemaskini-takwim.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalModule, ButtonModule],
})
export class EditHolidayModalComponent implements OnInit {
  @Input() holiday!: TakwimHoliday;
  @Output() updated = new EventEmitter<TakwimHoliday>();
  @Output() close = new EventEmitter<void>();

  edited: TakwimHoliday = {
    uuid: 0,
    state: '',
    ctry: '',
    date: '',
    holidayType: null,
    holidayDetail: null,
  };

  loading = false;
  errorMsg: string | null = null;

  constructor(private takwimService: TakwimService) {}

  ngOnInit(): void {
    if (this.holiday?.uuid) {
      this.loading = true;
      this.takwimService.getMaklumatTakwim(this.holiday.uuid).subscribe({
        next: (res) => {
          const data = Array.isArray(res.data) ? res.data[0] : res.data;
          this.edited = { ...data };
          this.loading = false;
        },
        error: (err) => {
          this.errorMsg = 'Tidak dapat memuatkan data.';
          this.loading = false;
        },
      });
    }
  }

  save(): void {
    this.updated.emit(this.edited);
    this.close.emit();
  }

  cancel(): void {
    this.close.emit();
  }
}



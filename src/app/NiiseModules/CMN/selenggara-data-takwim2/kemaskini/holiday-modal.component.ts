import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule, ButtonModule } from '@coreui/angular';

@Component({
  selector: 'app-holiday-modal',
  templateUrl: './holiday-modal.component.html',
  standalone: true,
  imports: [FormsModule, ModalModule, ButtonModule],
})
export class HolidayModalComponent {
  @Input() visible = false;

  @Input() eventData = {
    startDate: '',
    endDate: '',
    eventName: '',
  };

  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() save = new EventEmitter<typeof this.eventData>();

  @Output() cancel = new EventEmitter<void>();

  onSave() {
    if (
      this.eventData.eventName &&
      this.eventData.startDate &&
      this.eventData.endDate
    ) {
      this.save.emit(this.eventData);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onVisibleChange(value: boolean) {
    this.visibleChange.emit(value);
  }
}

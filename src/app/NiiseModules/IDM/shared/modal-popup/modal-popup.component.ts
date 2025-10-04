import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ModalButton {
  label: string;
  action: string; // e.g. 'close', 'submit', 'cancel', or custom
  class?: string; // Bootstrap button class
}

@Component({
    selector: 'modal-popup',
    imports: [
      CommonModule,
      FormsModule
    ],
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() buttons: ModalButton[] = [];
  @Input() show: boolean = false;
  @Input() icon: string = '';// define allowed icons

  @Output() buttonClick = new EventEmitter<string>();
  @Output() modalClose = new EventEmitter<void>();

  @Input() showComment: boolean = false; // control comment textarea
  commentText: string = ''; // Store textarea input
  @Input() commentPlaceholder: string = '';

    get iconPath(): string | null {
      if (!this.icon) return null;
        return `assets/icons/${this.icon}.png`; // keep your icons in assets/icons folder
    }

    onButtonClick(action: string) {
      const payload: any = { action };

      if (this.showComment) {
        payload.commentText = this.commentText;
      }

      this.buttonClick.emit(payload);

      if (action === 'close' || action === 'cancel') {
        this.close();
      }
    }

  close() {
    this.show = false;
    this.modalClose.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalBodyComponent,
  ModalFooterComponent,
  ButtonDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
  ],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.scss'
})
export class ModalComponentComponent {
  @Input() visible: boolean = false;
  @Input() title: string | null = null;
  @Input() message: string = '';
  @Input() mode: 'ok' | 'confirm' = 'ok';
  @Input() okText: string = 'OK';
  @Input() confirmText: string = 'Ya';
  @Input() cancelText: string = 'Tidak';
  @Input() alignment: 'top' | 'center' = 'top';
  @Input() backdrop: boolean | 'static' = true;
  @Input() keyboard: boolean = true;
  // Icon to show above message: 'danger' | 'tick-circle' | 'info-circle'
  @Input() icon: 'danger' | 'tick' | 'info' | null = null;
  @Input() iconSizePx: number = 96;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
    this.close.emit();
  }

  onCancel(): void {
    this.cancel.emit();
    this.close.emit();
  }

  onClose(): void {
    this.close.emit();
  }

  get iconSrc(): string | null {
    if (!this.icon) return null;
    const map: Record<'danger' | 'tick' | 'info', string> = {
      danger: 'assets/images/danger.svg',
      'tick': 'assets/images/tick-circle.svg',
      'info': 'assets/images/info-circle.svg',
    };
    return map[this.icon];
  }
}

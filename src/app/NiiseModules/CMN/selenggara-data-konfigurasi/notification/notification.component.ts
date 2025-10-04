import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ CommonModule, FormsModule, GridModule, ModalModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})

export class NotificationComponent {
  visible = false;
  messageType: 'success' | 'error' | 'warning' | 'info' = 'info';
  message: string = '';
  @Output() saved = new EventEmitter<any>();


  open(msg: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
        this.visible = true;
        this.message = msg;
        this.messageType = type;
    }

    close() {
        this.visible = false;

    }
    get iconClass(): string {
        return {
            success: 'noti-berjaya',
            error: 'noti-error',
            warning: 'noti-warning',
            info: 'noti-info'
        }[this.messageType] || 'noti-info';
    }
}

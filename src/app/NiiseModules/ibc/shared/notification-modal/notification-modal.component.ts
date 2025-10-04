import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, ModalModule } from '@coreui/angular';


@Component({
  selector: 'app-notification-modal',
  standalone:true,
  imports: [ CommonModule, FormsModule, GridModule, ModalModule],
  templateUrl: './notification-modal.component.html',
  styleUrl: './notification-modal.component.scss'
})
export class NotificationModalComponent {
  confirmed: any;
  show(type: string, title: string, message: string) {
    throw new Error('Method not implemented.');
  }
  

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


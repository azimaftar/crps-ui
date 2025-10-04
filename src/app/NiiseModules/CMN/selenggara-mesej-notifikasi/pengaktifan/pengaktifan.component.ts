import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, ModalModule } from '@coreui/angular';

@Component({
    selector: 'app-pengaktifan',
    standalone: true,
    imports: [CommonModule, FormsModule, GridModule, ModalModule],
    templateUrl: './pengaktifan.component.html',
    styleUrl: './../mesej-notifikasi.component.scss',
})
export class PengaktifanComponent {
    visible = false;
    messageType: 'success' | 'error' | 'warning' | 'info' = 'info';
    newMesej = { codeMsg: '', status: '' };

    @Output() saved = new EventEmitter<any>();

    open(data?: any) {
        this.visible = true;
        this.messageType = 'warning';
        this.newMesej = data
            ? { ...data } // clone for editing
            : { codeMsg: '', status: '' };


    }

    close() {
        this.visible = false;

    }

    submit() {
        if (this.newMesej.status === '0') {
            this.newMesej.status = '1'; // Nyahaktif
        } else {
            this.newMesej.status = '0'; // Aktif
        }

        this.saved.emit(this.newMesej);
        this.close();
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

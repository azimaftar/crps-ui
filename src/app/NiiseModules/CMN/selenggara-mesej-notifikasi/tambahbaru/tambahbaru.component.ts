import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, ModalModule } from '@coreui/angular';

export interface Mesej {
    codeMsg: string;
    typeMsg: string;
    dtlMsg: string;
    typError: string;
    status: string;
}

@Component({
    selector: 'app-tambah-baru',
    standalone: true,
    imports: [CommonModule, FormsModule, GridModule, ModalModule],
    templateUrl: './tambahbaru.component.html',
})
export class TambahBaruComponent {
    visible = false;
    isEditMode = false;
    newMesej: Mesej = {
        codeMsg: '',
        typeMsg: '',
        dtlMsg: '',
        typError: '',
        status: ''
    };

     @Input() messageTypes: any[] = [];
        @Input() messageError: any[] = [];
    @Output() saved = new EventEmitter<{ data: Mesej; isEditMode: boolean }>();

    open(data?: Mesej) {
        this.visible = true;
        this.isEditMode = !!data; // true if data exists (i.e. update mode)
        this.newMesej = data
            ? { ...data } // clone for editing
            : { codeMsg: '', typeMsg: '', dtlMsg: '', typError: '', status: '' };
    }

    close() {
        this.visible = false;
        this.isEditMode = false;
    }

    submit() {
        const { codeMsg, typeMsg, dtlMsg, typError, status } = this.newMesej;
        if (!codeMsg || codeMsg.trim() === '') {
            alert('Sila masukkan Kod Mesej.');
            return;
        }

        if (typeMsg === null || typeMsg === undefined) {
            alert('Sila pilih Jenis Mesej.');
            return;
        }

        if (!dtlMsg || dtlMsg.trim() === '') {
            alert('Sila masukkan Keterangan Mesej.');
            return;
        }

        if (typError === null || typError === undefined) {
            alert('Sila pilih Jenis Ralat.');
            return;
        }

        if (status === null || status === undefined) {
            alert('Sila pilih Status.');
            return;
        }

        this.saved.emit({
            data: this.newMesej,
            isEditMode: this.isEditMode
        });
        this.close();
    }
}

import { Injectable } from '@angular/core';

export interface ValidationError {
  field: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

    private errorsStorage: ValidationError[] = [];
    private errorsStorageWithRefNo: ValidationError[] = [];
    private errorsDocumentStorage: ValidationError[] = [];
    private pengesahanIsConfirmed !: boolean;
    private refNo !: string;

    setErrors(errors: ValidationError[]): void {this.errorsStorage = errors || [];}

    getErrors(): ValidationError[] {return [...this.errorsStorage];}

    setErrorsWithRefNo(errors: ValidationError[]): void {this.errorsStorageWithRefNo = errors || [];}

    getErrorsWithRefNo(): ValidationError[] {return [...this.errorsStorageWithRefNo];}

    setErrorsDocuments(errors: ValidationError[]) : void {this.errorsDocumentStorage = errors || [];}
     
    getErrorsDocuments(): ValidationError[] {return [...this.errorsDocumentStorage];}

    setPengesahanCheckBox(isConfirmed: boolean) {this.pengesahanIsConfirmed = isConfirmed;}   

    getPengesahanCheckBox(): boolean {return this.pengesahanIsConfirmed ?? false;}   

    setCurrentRefNo(refNo: string) {this.refNo = refNo;}

    refNoIsNotNull() {return (!this.refNo);}

    getCurrentRefNo() {return this.refNo;}

    hasErrors(): boolean {return this.errorsStorage.length > 0;}

    hasErrorsWithRefNo(): boolean {return this.errorsStorageWithRefNo.length > 0;}


    // PERMOHONAN BARU - SEC 3.1
    validatePermohonanForm(formData: any): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!formData) {
            errors.push({ field: 'form', message: 'Form data' });
            return errors;
        }

        this.validateCommonFields(formData, errors);

        switch (formData.applCat) {
        case 'Pengesahan Pergerakan':
            this.validatePengesahanPergerakan(formData, errors);
            break;
        case 'Pengesahan Cap Keselamatan':
            this.validatePengesahanCapKeselamatan(formData, errors);
            break;
        case 'Pengesahan Pas':
            this.validatePengesahanPas(formData, errors);
            break;
        case 'Pengesahan Senarai Syak':
            this.validatePengesahanSenaraiSyak(formData, errors);
            break;
        default:
            errors.push({ field: 'applCat', message: 'Sila masukkan Kategori Permohonan' });
        }

        return errors;
    }

    private validateCommonFields(formData: any, errors: ValidationError[]): void {
        if (!formData.applCat || formData.applCat.trim() === '') {
            errors.push({ field: 'applCat', message: 'Sila masukkan Kategori Permohonan' });
        }

        if (!formData.officeState || formData.officeState.trim() === '') {
            errors.push({ field: 'officeState', message: 'Sila masukkan Pejabat Negeri' });
        }

        if (formData.applCat) {
            if (!formData.refNo || formData.refNo.trim() === '') {
                errors.push({ field: 'refNo', message: 'Sila masukkan No. Rujukan' });
            }

            if (!formData.letterDate) {
                errors.push({ field: 'letterDate', message: 'Sila masukkan Tarikh Surat' });
            }

            if (!formData.officerName || formData.officerName.trim() === '') {
                errors.push({ field: 'officerName', message: 'Sila masukkan Nama Pegawai Pemohon' });
            }

           if (!formData.address1 || formData.address1.trim() === '') {
                errors.push({ field: 'address1', message: 'Sila masukkan Alamat Baris Pertama' });
            }

            if (!formData.address2 || formData.address2.trim() === '') {
                errors.push({ field: 'address2', message: 'Sila masukkan Alamat Baris Kedua' });
            }

            if (!formData.poskod || formData.poskod.trim() === '') {
                errors.push({ field: 'poskod', message: 'Sila masukkan Poskod' });
            } else if (!/^\d{5}$/.test(formData.poskod)) {
                errors.push({ field: 'poskod', message: 'Poskod mestilah 5 digit' });
            }

            if (!formData.bandar || formData.bandar.trim() === '') {
                errors.push({ field: 'bandar', message: 'Sila masukkan Bandar' });
            }

            if (formData.emel && formData.emel.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.emel)) {
                    errors.push({ field: 'emel', message: 'Format email tidak sah' });
                }
            }
        }
    }

    private validatePengesahanPergerakan(formData: any, errors: ValidationError[]): void {
        if (!formData.tempohMaklumatPergerakan || formData.tempohMaklumatPergerakan.trim() === '') {
            errors.push({ field: 'tempohMaklumatPergerakan', message: 'Sila masukkan Tempoh Maklumat Pergerakan' });
        }

        if (!formData.moveStartDt) {
            errors.push({ field: 'moveStartDt', message: 'Sila masukkan Tarikh Mula Pergerakan' });
        }

        if (!formData.moveEndDt) {
            errors.push({ field: 'moveEndDt', message: 'Sila masukkan Tarikh Akhir Pergerakan' });
        }

        if (formData.moveStartDt && formData.moveEndDt) {
            const startDate = new Date(formData.moveStartDt);
            const endDate = new Date(formData.moveEndDt);
            if (startDate >= endDate) {
                errors.push({ field: 'moveEndDt', message: 'Tarikh Akhir must be after Tarikh Mula' });
            }
        }

        this.validatePersonInfo(formData, errors);
    }

    private validatePengesahanCapKeselamatan(formData: any, errors: ValidationError[]): void {
        if (formData.stampNo && formData.stampNo.trim() !== '') {
            // TBA - validation for stamp no if needed
        }

        if (formData.docNo && formData.docNo.trim() !== '') {
            // TBA - validation for doc no if needed
        }
    }

    private validatePengesahanPas(formData: any, errors: ValidationError[]): void {
        this.validatePersonInfo(formData, errors);

        if (!formData.docNo || formData.docNo.trim() === '') {
            errors.push({ field: 'docNo', message: 'Sila masukkan Nombor Dokumen' });
        }

        if (!formData.pasType || formData.pasType.trim() === '') {
            errors.push({ field: 'pasType', message: 'Sila masukkan Jenis Pas' });
        }
    }

    private validatePengesahanSenaraiSyak(formData: any, errors: ValidationError[]): void {
        this.validatePersonInfo(formData, errors);
    }

    private validatePersonInfo(formData: any, errors: ValidationError[]): void {
        if (!formData.name || formData.name.trim() === '') {
            errors.push({ field: 'name', message: 'Sila masukkan Nama' });
        }

        if (!formData.kpNo || formData.kpNo.trim() === '') {
            errors.push({ field: 'kpNo', message: 'Sila masukkan No. Kad Pengenalan' });
        } else {
            const icRegex = /^\d{6}-?\d{2}-?\d{4}$/;
            if (!icRegex.test(formData.kpNo.replace(/\s/g, ''))) {
                errors.push({ field: 'kpNo', message: 'Format No Kad Pengenalan tidak sah' });
            }
        }

        if (!formData.citizenship || formData.citizenship.trim() === '') {
            errors.push({ field: 'citizenship', message: 'Sila masukkan Warganegara' });
        }
    }

    validateOptionalDocuments(documents: any[]): string | null{
        const customDocs = documents.filter(doc => doc.isCustom);
        const invalidDoc = customDocs.find(doc => !doc.isUploaded || doc.keterangan.trim() === '');
        return invalidDoc ? invalidDoc.keterangan : null;
    }

    validateRequiredDocuments(documents: any[]): boolean{
        const mandatoryDocs = documents.filter(doc => !doc.isCustom);
        return mandatoryDocs.every(doc => doc.isUploaded);
    }

    // SEMAKAN & KELULUSAN - SEC 3.3 & SEC 3.5
    validateKeputusanForm(keputusanData: any): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!keputusanData) {
            errors.push({ field: 'form', message: 'Keputusan data' });
            return errors;
        }

        this.validateCommonFieldsKeputusan(keputusanData, errors);

        switch (keputusanData.applCat) {
        case 'Pengesahan Cap Keselamatan':
            this.validateStatusField(keputusanData, errors);
            break;
        case 'Pengesahan Senarai Syak':
            this.validateStatusField(keputusanData, errors);
            break;
        case 'Pengesahan Pergerakan':
            break;
        case 'Pengesahan Pas':
            break;
        default:
            errors.push({ field: 'applCat', message: 'Sila pastikan permohonan masih sah.' });
        }

        return errors;
    }

    validateCommonFieldsKeputusan(keputusanData: any, errors: ValidationError[]): void {
        if (!keputusanData.namaPengguna || keputusanData.namaPengguna.trim() === '') {
            errors.push({ field: 'namaPengguna', message: 'Sila masukkan Nama Pengguna' });
        }

        if (!keputusanData.idPengguna || keputusanData.idPengguna.trim() === '') {
            errors.push({ field: 'idPengguna', message: 'Sila masukkan ID Pengguna' });
        }

        if (!keputusanData.tarikhPenerimaanPermohonan) {
            errors.push({ field: 'tarikhPenerimaanPermohonan', message: 'Sila masukkan Tarikh Penerimaan Permohonan' });
        }
    }

    validateStatus(keputusanData: any, errors:ValidationError[]): void {
        if (!keputusanData.status || keputusanData.status.trim() === '') {
            errors.push({ field: 'status', message: 'Sila masukkan Status' });
        }
    }

    private validateStatusField(keputusanData: any, errors: ValidationError[]){
        this.validateCommonFieldsKeputusan(keputusanData, errors);
        this.validateStatus(keputusanData, errors);
    }

    // KEPUTUSAN PERMOHONAN - SEC 3.51N
    validateKeputusanPermohonan(keputusanPermohonan: any): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!keputusanPermohonan) {
            errors.push({ field: 'form', message: 'Keputusan permohonan' });
            return errors;
        }

        if (!keputusanPermohonan.namaPemohon || keputusanPermohonan.namaPemohon.trim() === '') {
            errors.push({ field: 'namaPemohon', message: 'Sila masukkan Nama Pemohon' });
        }

        if (!keputusanPermohonan.nomborKadPengenalan || keputusanPermohonan.nomborKadPengenalan.trim() === '') {
            errors.push({ field: 'nomborKadPengenalan', message: 'Sila masukkan Nombor Kad Pengenalan' });
        }

        if (!keputusanPermohonan.emelPemohon || keputusanPermohonan.emelPemohon.trim() === '') {
            errors.push({ field: 'emelPemohon', message: 'Sila masukkan E-Mel' });
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(keputusanPermohonan.emelPemohon)) {
                errors.push({ field: 'emelPemohon', message: 'Format email tidak sah' });
            }
        }
        
        if (!keputusanPermohonan.nomborTelefon || keputusanPermohonan.nomborTelefon.trim() === '') {
            errors.push({ field: 'nomborTelefon', message: 'Sila masukkan Nombor Telefon' });
        }

        if (!keputusanPermohonan.namaAgensi || keputusanPermohonan.namaAgensi.trim() === '') {
            errors.push({ field: 'namaAgensi', message: 'Sila masukkan Nama Agensi' });
        }

        return errors;
    }
}
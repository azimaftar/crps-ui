import { Injectable } from '@angular/core';

interface DocumentFile {
  id: number;
  keterangan: string;
  namaDocumen: string;
  fileName?: string;
  format?: string;
  file?: File;
  fileUrl?: string; 
  isUploaded: boolean;
  isCustom?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class PermohonanFormDataService {
  private formData: any = null;
  private keputusanData: any = null;
  private keputusanPermohonan: any = null;
  private documentsData: DocumentFile[] = []; 

  private defaultFormData = {
    applCat: '',
    officeState: '',
    refNo: '',
    letterDate: '',
    officerName: '',
    address1: '',
    address2: '',
    address3: '',
    poskod: '',
    bandar: '',
    emel: '',
    applPurpose: '',
    tempohMaklumatPergerakan: '',
    moveStartDt: '',
    moveEndDt: '',
    maklumatPergerakanTerakhir: '',
    name: '',
    kpNo: '',
    docNo: '',
    pasType: '',
    citizenship: '',
    bahagian: '',
    stampNo: '',
  }  

  private defaultKeputusanData = {
    applCat: '',
    officeState: '',
    refNo: '',
    letterDate: '',
    officerName: '',
    address1: '',
    address2: '',
    address3: '',
    poskod: '',
    bandar: '',
    emel: '',
    applPurpose: '',
    tempohMaklumatPergerakan: '',
    moveStartDt: '',
    moveEndDt: '',
    maklumatPergerakanTerakhir: '',
    name: '',
    kpNo: '',
    docNo: '',
    pasType: '',
    citizenship: '',
    bahagian: '',
    stampNo: '',
    status: '',
    catatan: '',
    namaPengguna: '',
    idPengguna: '',
    tarikhPenerimaanPermohonan: '',
  }

  private defaultKeputusanDataOnly = {
    status: '',
    catatan: '',
    namaPengguna: '',
    idPengguna: '',
    tarikhPenerimaanPermohonan: '',
  }

  private defaultKeputusanPermohonan = {
    applCat: '',
    officeState: '',
    refNo: '',
    letterDate: '',
    officerName: '',
    address1: '',
    address2: '',
    address3: '',
    poskod: '',
    bandar: '',
    emel: '',
    applPurpose: '',
    tempohMaklumatPergerakan: '',
    moveStartDt: '',
    moveEndDt: '',
    maklumatPergerakanTerakhir: '',
    name: '',
    kpNo: '',
    docNo: '',
    pasType: '',
    citizenship: '',
    bahagian: '',
    stampNo: '',
    namaPemohon: '',
    nomborKadPengenalan: '',
    emelPemohon: '',
    nomborTelefon: '',
    namaAgensi: '',
  }

  private defaultKeputusanPermohonanOnly = {
    namaPemohon: '',
    nomborKadPengenalan: '',
    emelPemohon: '',
    nomborTelefon: '',
    namaAgensi: '',
  }

  private defaultsDocumentsData = [
    { id: 1, keterangan: '', namaDocumen: '', isUploaded: false, isCustom: false },
  ]

  private warganegaraList = [
    { name: 'Malaysia', code: 'MYS' },
    { name: 'Singapura', code: 'SGP' },
    { name: 'Indonesia', code: 'IND' },
    { name: 'Thailand', code: 'THA' },
    { name: 'Brunei', code: 'BRN' },
    { name: 'Vietnam', code: 'VNM' },
    { name: 'Philippines', code: 'PHL' },
    { name: 'Cambodia', code: 'KHM' },
    { name: 'Laos', code: 'LAO' },
    { name: 'Myanmar', code: 'MMR' },
    { name: 'China', code: 'CHN' },
    { name: 'Japan', code: 'JPN' },
    { name: 'South Korea', code: 'KOR' },
    { name: 'India', code: 'IND' },
    { name: 'Pakistan', code: 'PAK' },
    { name: 'Bangladesh', code: 'BGD' },
    { name: 'Nepal', code: 'NPL' },
    { name: 'Sri Lanka', code: 'LKA' },
    { name: 'United Kingdom', code: 'GBR' },
    { name: 'United States', code: 'USA' },
    { name: 'Australia', code: 'AUS' },
    { name: 'New Zealand', code: 'NZL' },
  ];

  getDefaultFormData(): any {
    return this.defaultFormData;
  }

  setFormData(data: any): void {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData ?? { ...this.defaultFormData };
  }

  clearFormData(): void {
    this.formData = { ...this.defaultFormData }; 
    return this.formData;
  }

  setKeputusanData(data: any): void {
    this.keputusanData = data;
  }

  getKeputusanData(): any {
    return this.keputusanData ?? { ...this.defaultKeputusanData };
  }

  clearKeputusanData(): void {
    this.keputusanData = null;
  }

  getDefaultKeputusanData(): any {
    return this.defaultKeputusanData;
  }

  getDefaultKeputusanDataOnly(): any {
    return this.defaultKeputusanDataOnly;
  }

  setKeputusanPermohonan(data: any): void {
    this.keputusanPermohonan = data;
  }

  getKeputusanPermohonan(): any {
    return this.keputusanPermohonan ?? { ...this.defaultKeputusanPermohonan};
  }

  clearKeputusanPermohonan(): void {
    this.keputusanPermohonan = this.defaultKeputusanPermohonan;
  }

  getDefaultKeputusanPermohonan(): any {
    return this.defaultKeputusanPermohonan;
  }

  getDefaultKeputusanPermohonanOnly(): any {
    return this.defaultKeputusanPermohonanOnly;
  }

  getWarganegaraList(): any {
    return this.warganegaraList;
  }

  setDocumentsData(documents: DocumentFile[]): void {
    this.documentsData = documents.map(doc => ({ ...doc }));
  }

  getDocumentsData(): DocumentFile[] {
    return this.documentsData.length > 0
      ? this.documentsData.map(doc => ({ ...doc }))
      : this.defaultsDocumentsData.map(doc => ({ ...doc }));  
  }

  clearDocumentsData(): DocumentFile[] {
    return this.defaultsDocumentsData.map(doc => ({ ...doc }));
  }
}

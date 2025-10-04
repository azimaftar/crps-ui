import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SemakanPermohonanService {
  private formData: any = null;
  private dataPengesahanPergerakan = [
    {
      applCat: 'Pengesahan Pergerakan',
      officeState: '16 - Putrajaya',
      refNo: 'A123456',
      letterDate: '2025-08-17',
      officerName: 'Aishah Muhamad',
      address: ['Prima 10', 'Cyberjaya Street', ''],
      poskod: '71821',
      bandar: 'Mantin',
      emel: 'aishah@gmail.com',
      applPurpose: 'Testing purpose',
      tempohMaklumatPergerakan: '3 tahun 2 bulan',
      moveStartDt: '2025-08-17',
      moveEndDt: '2025-08-17',
      maklumatPergerakanTerakhir: 'Di Cyberjaya',
      name: 'Si Polan',
      kpNo: '001101001100',
      citizenship: 'Malaysia',
    },
  ];

  private dataPengesahanCapKeselamatan = [
    {
      applCat: 'Pengesahan Cap Keselamatan',
      officeState: '14 - Kuala Lumpur',
      refNo: 'B123456',
      letterDate: '2025-08-10',
      officerName: 'Ahmad Zulkifli',
      address: ['Menara 2', 'Jalan Ampang', ''],
      poskod: '50450',
      bandar: 'Kuala Lumpur',
      emel: 'ahmad.zul@example.com',
      docNo: 'DOC1234',
      stampNo: 'B5678',
    },
  ];

  private dataPengesahanPas = [ 
    {
      applCat: 'Pengesahan Pas',
      officeState: '02 - Pulau Pinang',
      refNo: 'C123456',
      letterDate: '2025-07-22',
      officerName: 'Siti Aminah',
      address: ['Jalan Gurney', 'Persiaran Seaview', ''],
      poskod: '10250',
      bandar: 'George Town',
      emel: 'siti.aminah@example.com',
      name: 'Fatimah Binti Ali',
      kpNo: '850505088888',
      docNo: 'DOC5678',
      pasType: 'Pas Pekerja Mahir',
      citizenship: 'Malaysia',
      bahagian: 'Bahagian 3',
    }
  ];

  private dataPengesahanSenaraiSyak= [
    {
      applCat: 'Pengesahan Senarai Syak',
      officeState: '08 - Perak',
      refNo: 'D123456',
      letterDate: '2025-05-03',
      officerName: 'Noraini Hussin',
      address: ['Jalan Sultan Azlan Shah', 'Ipoh Garden', ''],
      poskod: '31400',
      bandar: 'Ipoh',
      emel: 'noraini.hussin@example.com',
      name: 'Tan Ah Chong',
      kpNo: '780303033333',
      citizenship: 'Malaysia',
    }
  ];

   private getAllData(): any[] {
    return [
      ...this.dataPengesahanPergerakan,
      ...this.dataPengesahanCapKeselamatan,
      ...this.dataPengesahanPas,
      ...this.dataPengesahanSenaraiSyak,
    ];
  }

  searchByRefNo(refNo: string): any | null {
    const allData = this.getAllData();
    return allData.find(item => item.refNo === refNo) || null;
  }
}




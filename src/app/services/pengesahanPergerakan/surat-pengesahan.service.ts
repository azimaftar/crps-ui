import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.vfs;

pdfMake.fonts = {
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

interface KeputusanPermohonanData {
  refNo?: string;
  namaPemohon?: string;
  nomborKadPengenalan?: string;
  emelPemohon?: string;
  nomborTelefon?: string;
  namaAgensi?: string;
  applCat?: string;
}

interface LetterTemplate {
  title: string;
  department: string;
  organization: string;
  recipientPrefix: string;
  subjectPrefix: string;
  categoryAbbrev: string;
  contentTemplate: string;
  additionalNotes?: string[];
  isConfidential?: boolean;
}

interface OfficerInfo {
  name: string;
  phone?: string;
  email?: string;
}

interface ContactDetails {
  phoneNumber: string;
  emel: string;
}

interface LetterConfig {
  logo?: {
    path: string;
    width: number;
  };
  signature?: {
    path: string;
    width: number;
  };
  templates: { [key: string]: LetterTemplate };
  defaultOfficer: OfficerInfo;
  defaultContact: ContactDetails;
  motto?: string;
  confidentialMarking?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuratPengesahanService {
  private logoBase64: string = '';
  private signBase64: string = '';
  
  private config: LetterConfig = {
    logo: {
      path: 'icons/icon-72x72.png',
      width: 80
    },
    signature: {
      path: 'assets/images/sign.png',
      width: 100
    },
    defaultOfficer: {
      name: 'AHMAD ZAINUL BIN HASSAN',
      phone: '03-3456075',
      email: 'ahmad@imi.gov.my'
    },
    defaultContact: {
      phoneNumber: '03-3456075',
      emel: 'ahmad@imi.gov.my'
    },
    motto: '" INTEGRITI PROFESIONAL MESRA "',
    confidentialMarking: 'SULIT',
    templates: {
      'Pengesahan Pergerakan': {
        title: 'MEMO',
        department: 'BAHAGIAN KESELAMATAN DAN PASPORT',
        organization: 'JABATAN PENDAFTARAN NEGARA MALAYSIA',
        recipientPrefix: 'BAHAGIAN OPERASI, SIASATAN, DAN PENDAKWAAN',
        subjectPrefix: 'PENGESAHAN KETULENAN PERGERAKAN',
        categoryAbbrev: 'TPPI',
        contentTemplate: `Dengan segala hormatnya diarah merujuk kepada memo tuan/puan Ruj: {{refNo}} bertarikh {{currentDate}} berhubung perkara di atas.

2. Setelah dibuat semakan dan perbandingan dengan teliti cap-cap keselamatan Jabatan Pendraftaran Malaysia, keputusan siasatan adalah sebagaimana yang tercatat seperti di LAMPIRAN 'A' berpandukan kepada rekod/pendokumen di bahagian ini.

Sekian dimaklumkan, terima kasih.`
      },
      'Pengesahan Cap Keselamatan': {
        title: 'MEMO',
        department: 'BAHAGIAN KESELAMATAN DAN PASPORT',
        organization: 'JABATAN PENDAFTARAN NEGARA MALAYSIA',
        recipientPrefix: 'BAHAGIAN OPERASI, SIASATAN, DAN PENDAKWAAN',
        subjectPrefix: 'PENGESAHAN KETULENAN CAP KESELAMATAN',
        categoryAbbrev: 'TPCS',
        contentTemplate: `Dengan segala hormatnya diarah merujuk kepada memo tuan/puan Ruj: {{refNo}} bertarikh {{currentDate}} berhubung perkara di atas.

2. Setelah dibuat semakan dan perbandingan dengan teliti cap-cap keselamatan Jabatan Pendraftaran Malaysia, keputusan siasatan adalah sebagaimana yang tercatat seperti di LAMPIRAN 'A' berpandukan kepada rekod/pendokumen di bahagian ini.

Sekian dimaklumkan, terima kasih.`
      },
      'Pengesahan Pas': {
        title: 'MEMO',
        department: 'BAHAGIAN KESELAMATAN DAN PASPORT',
        organization: 'JABATAN PENDAFTARAN NEGARA MALAYSIA',
        recipientPrefix: 'BAHAGIAN OPERASI, SIASATAN, DAN PENDAKWAAN',
        subjectPrefix: 'PENGESAHAN KETULENAN PAS',
        categoryAbbrev: 'TPPA',
        contentTemplate: `Dengan segala hormatnya diarah merujuk kepada memo tuan/puan Ruj: {{refNo}} bertarikh {{currentDate}} berhubung perkara di atas.

2. Setelah dibuat semakan dan perbandingan dengan teliti cap-cap keselamatan Jabatan Pendraftaran Malaysia, keputusan siasatan adalah sebagaimana yang tercatat seperti di LAMPIRAN 'A' berpandukan kepada rekod/pendokumen di bahagian ini.

Sekian dimaklumkan, terima kasih.`
      },
      'Pengesahan Senarai Syak': {
        title: 'MEMO',
        department: 'BAHAGIAN KESELAMATAN DAN PASPORT',
        organization: 'JABATAN PENDRAFTARAN NEGARA MALAYSIA',
        recipientPrefix: 'BAHAGIAN OPERASI, SIASATAN, DAN PENDAKWAAN',
        subjectPrefix: 'PENGESAHAN KETULENAN SENARAI SYAK',
        categoryAbbrev: 'TPSS',
        contentTemplate: `Dengan segala hormatnya diarah merujuk kepada memo tuan/puan Ruj: {{refNo}} bertarikh {{currentDate}} berhubung perkara di atas.

2. Setelah dibuat semakan dan perbandingan dengan teliti cap-cap keselamatan Jabatan Pendraftaran Malaysia, keputusan siasatan adalah sebagaimana yang tercatat seperti di LAMPIRAN 'A' berpandukan kepada rekod/pendokumen di bahagian ini.

Sekian dimaklumkan, terima kasih.`,
        additionalNotes: [
          'PERINGATAN: Maklumat ini adalah SULIT dan tertakluk kepada Akta Rahsia Rasmi 1972.'
        ],
        isConfidential: true
      }
    }
  };

  constructor() {
    this.loadImages();
  }

  updateConfig(newConfig: Partial<LetterConfig>): void {
    this.config = { ...this.config, ...newConfig };
    if (newConfig.logo || newConfig.signature) {
      this.loadImages();
    }
  }

  addTemplate(key: string, template: LetterTemplate): void {
    this.config.templates[key] = template;
  }

  private async loadImages(): Promise<void> {
    try {
      if (this.config.logo) {
        this.logoBase64 = await this.getBase64ImageFromURL(this.config.logo.path);
      }
      if (this.config.signature) {
        this.signBase64 = await this.getBase64ImageFromURL(this.config.signature.path);
      }
    } catch (error) {
      console.warn('Failed to load images:', error);
    }
  }

  private getBase64ImageFromURL(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('Canvas not supported');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }

  private formatMalaysianDate(date: Date): string {
    const months = [
      'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
      'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
    ];
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }

  private getHijriDate(date: Date = new Date()): string {
    return '09 Ramadan 1442H';
  }

  private replaceTemplate(template: string, data: KeputusanPermohonanData): string {
    const currentDate = this.formatMalaysianDate(new Date());
    const replacements: { [key: string]: string } = {
      '{{refNo}}': data.refNo || 'N/A',
      '{{namaPemohon}}': data.namaPemohon || 'N/A',
      '{{currentDate}}': currentDate,
      '{{nomborKadPengenalan}}': data.nomborKadPengenalan || 'N/A',
      '{{emelPemohon}}': data.emelPemohon || 'N/A',
      '{{nomborTelefon}}': data.nomborTelefon || 'N/A',
      '{{namaAgensi}}': data.namaAgensi || 'N/A'
    };

    let result = template;
    Object.keys(replacements).forEach(key => {
      result = result.replace(new RegExp(key, 'g'), replacements[key]);
    });
    
    return result;
  }

  private getTemplate(applCat?: string): LetterTemplate {
    const template = this.config.templates[applCat || 'Pengesahan Pergerakan'];
    if (!template) {
      return this.config.templates['Pengesahan Pergerakan'];  
    }
    return template;
  }

  private getRecipientText(data: KeputusanPermohonanData, template: LetterTemplate): string {
    return `${template.recipientPrefix}\n( U.P. : ${data.namaPemohon?.toUpperCase() || 'N/A'} ) ${template.categoryAbbrev}`;
  }

  private getMemoSubject(template: LetterTemplate): string {
    return `${template.subjectPrefix}\n${template.organization}\n\nSEPERTI DI LAMPIRAN A`;
  }

  private getLetterContent(data: KeputusanPermohonanData, template: LetterTemplate): string {
    return this.replaceTemplate(template.contentTemplate, data);
  }

  private getAdditionalContent(template: LetterTemplate): any[] {
    if (template.additionalNotes && template.additionalNotes.length > 0) {
      return template.additionalNotes.map(note => ({
        text: note,
        style: 'bodyText',
        bold: true,
        color: 'red',
        margin: [0, 0, 0, 10]
      }));
    }
    return [];
  }

  async generateLetterDefinition(
    data: KeputusanPermohonanData,
    officerInfo?: OfficerInfo
  ): Promise<any> {
    const template = this.getTemplate(data.applCat);
    const officer = officerInfo || this.config.defaultOfficer;
    const currentDate = this.formatMalaysianDate(new Date());
    const hijriDate = this.getHijriDate();

    const memoTable = {
      table: {
        widths: ['15%', '70%', '15%'],
        body: [
          [
            { text: 'KEPADA', style: 'memoLabel', border: [true, true, true, true] },
            { text: this.getRecipientText(data, template), style: 'memoContent', border: [true, true, true, true] },
            { text: 'SALINAN:\n1) FAIL', style: 'memoLabel', border: [true, true, true, false] }
          ],
          [
            { text: 'DARIPADA', style: 'memoLabel', border: [true, true, true, true] },
            { text: officer.name.toUpperCase(), style: 'memoContent', border: [true, true, true, true] },
            { text: '', border: [true, false, true, false] }
          ],
          [
            { text: 'PERKARA', style: 'memoLabel', border: [true, true, true, true] },
            { text: this.getMemoSubject(template), style: 'memoContent', border: [true, true, true, true] },
            { text: '', border: [true, false, true, true] }
          ]
        ]
      },
      layout: {
        hLineWidth: function (i: number, node: any) { return 1; },
        vLineWidth: function (i: number, node: any) { return 1; },
        hLineColor: function (i: number, node: any) { return '#000'; },
        vLineColor: function (i: number, node: any) { return '#000'; }
      },
      margin: [0, 0, 0, 20]
    };

    const detailsTable = {
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            { text: 'Nama Pemohon:', style: 'detailLabel' },
            { text: data.namaPemohon || 'N/A', style: 'detailValue' }
          ],
          [
            { text: 'No. Kad Pengenalan:', style: 'detailLabel' },
            { text: data.nomborKadPengenalan || 'N/A', style: 'detailValue' }
          ],
          [
            { text: 'E-mel:', style: 'detailLabel' },
            { text: data.emelPemohon || 'N/A', style: 'detailValue' }
          ],
          [
            { text: 'No. Telefon:', style: 'detailLabel' },
            { text: data.nomborTelefon || 'N/A', style: 'detailValue' }
          ],
          [
            { text: 'Nama Agensi:', style: 'detailLabel' },
            { text: data.namaAgensi || 'N/A', style: 'detailValue' }
          ],
          [
            { text: 'No. Rujukan:', style: 'detailLabel' },
            { text: data.refNo || 'N/A', style: 'detailValue' }
          ]
        ]
      },
      layout: {
        hLineWidth: function (i: number, node: any) { return (i === 0 || i === 6) ? 1 : 0.5; },
        vLineWidth: function (i: number, node: any) { return (i === 0 || i === 2) ? 1 : 0.5; },
        hLineColor: function (i: number, node: any) { return '#666'; },
        vLineColor: function (i: number, node: any) { return '#666'; }
      },
      margin: [0, 12, 0, 15]
    };

    return {
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 20],
      content: [
        {
          stack: [
            {
              image: this.logoBase64,
              width: this.config.logo?.width || 80,
              alignment: 'center',
              margin: [0, 0, 0, 10]
            },
            { text: template.title, style: 'memoTitle', alignment: 'center' },
            { text: template.department, style: 'departmentTitle', alignment: 'center' },
            { text: template.organization, style: 'departmentTitle', alignment: 'center' }
          ],
          margin: [0, 0, 0, 15]
        },

        {
          columns: [
            { text: `Ruj. Kami: ${data.refNo || 'N/A'}`, style: 'referenceText', width: '50%' },
            { 
              stack: [
                { text: `Tarikh: ${currentDate}`, style: 'referenceText', alignment: 'right' },
                { text: hijriDate, style: 'hijriDate', alignment: 'right' }
              ], 
              width: '50%' 
            }
          ],
          margin: [0, 0, 0, 10]
        },

        memoTable,

        { text: 'Tuan/Puan,', style: 'salutation', margin: [0, 0, 0, 15] },

        {
          text: this.getLetterContent(data, template),
          style: 'bodyText',
          alignment: 'justify',
          margin: [0, 0, 0, 10]
        },

        ...this.getAdditionalContent(template),

        { text: this.config.motto, style: 'motto', alignment: 'left', margin: [0, 15, 0, 8] },

        {
          columns: [
            {
              stack: [
                { text: 'Saya yang menjalankan amanah,', style: 'bodyText', margin: [0, 0, 0, 0] },
                {
                  image: this.signBase64,
                  width: this.config.signature?.width || 100,
                  alignment: 'left',
                  margin: [0, 15, 0, 0]
                },
                { text: `( ${officer.name.toUpperCase()} )`, style: 'officerName' },
                { text: `No. Telefon: ${officer.phone || this.config.defaultContact.phoneNumber}`, style: 'contactInfo' },
                { text: `E-mel: ${officer.email || this.config.defaultContact.emel}`, style: 'contactInfo' },
              ],
              width: '70%'
            },
            { text: '', width: '30%' }
          ],
          margin: [0, 15, 0, 0]
        },

        ...(template.isConfidential ? [{ text: this.config.confidentialMarking, style: 'confidential', alignment: 'right', margin: [0, 20, 0, 0] }] : [])
      ],
      
      styles: {
        memoTitle: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 5]
        },
        departmentTitle: {
          fontSize: 11,
          bold: true,
          margin: [0, 0, 0, 2]
        },
        referenceText: {
          fontSize: 11,
          margin: [0, 0, 0, 2]
        },
        hijriDate: {
          fontSize: 10,
          margin: [0, 0, 0, 2]
        },
        memoLabel: {
          fontSize: 11,
          bold: true,
          margin: [3, 5, 3, 5]
        },
        memoContent: {
          fontSize: 11,
          margin: [3, 5, 3, 5]
        },
        salutation: {
          fontSize: 11,
          margin: [0, 0, 0, 5]
        },
        bodyText: {
          fontSize: 11,
          lineHeight: 1.3
        },
        sectionHeader: {
          fontSize: 12,
          bold: true
        },
        detailLabel: {
          fontSize: 10,
          bold: true,
          margin: [3, 3, 3, 3]
        },
        detailValue: {
          fontSize: 10,
          margin: [3, 3, 3, 3]
        },
        motto: {
          fontSize: 11,
          bold: true,
          italics: true
        },
        officerName: {
          fontSize: 11,
          bold: true
        },
        contactInfo: {
          fontSize: 10,
          margin: [0, 1, 0, 1]
        },
        stampText: {
          fontSize: 9,
          italics: true,
          color: '#666'
        },
        confidential: {
          fontSize: 12,
          bold: true
        }
      },
      
      defaultStyle: {
        fontSize: 11,
        lineHeight: 1.15
      },

      pageOrientation: 'portrait',
      compress: true,
      
      info: {
        title: 'Surat Pengesahan - Jabatan Pendaftaran Negara',
        author: 'Jabatan Pendaftaran Negara Malaysia',
        subject: 'Surat Pengesahan Permohonan',
        creator: 'PDF Generator'
      }
    };
  }

  async openPDF(data: KeputusanPermohonanData, officerInfo?: OfficerInfo): Promise<void> {
    try {
      const docDefinition = await this.generateLetterDefinition(data, officerInfo);
      pdfMake.createPdf(docDefinition).open();
    } catch (error) {
      console.error('Error opening PDF:', error);
      throw new Error('Ralat membuka PDF: ' + (error as Error).message);
    }
  }

  async printPDF(data: KeputusanPermohonanData, officerInfo?: OfficerInfo): Promise<void> {
    try {
      const docDefinition = await this.generateLetterDefinition(data, officerInfo);
      pdfMake.createPdf(docDefinition).print();
    } catch (error) {
      console.error('Error printing PDF:', error);
      throw new Error('Ralat mencetak PDF: ' + (error as Error).message);
    }
  }

  async downloadPDF(data: KeputusanPermohonanData, officerInfo?: OfficerInfo): Promise<void> {
    try {
      const docDefinition = await this.generateLetterDefinition(data, officerInfo);
      const fileName = `Surat_Pengesahan_${data.refNo?.replace(/\//g, '_') || 'Unknown'}.pdf`;
      pdfMake.createPdf(docDefinition).download(fileName);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      throw new Error('Ralat memuat turun PDF: ' + (error as Error).message);
    }
  }

  getAvailableTemplates(): string[] {
    return Object.keys(this.config.templates);
  }

  async testPDF(): Promise<void> {
    const testData: KeputusanPermohonanData = {
      refNo: 'IM.101/HQ-H(S)/907/21/1 ( 537 ) 2021',
      namaPemohon: 'AHMAD AZHAR BIN AHMAD ABDUL AZIZ',
      nomborKadPengenalan: '850123-08-5678',
      emelPemohon: 'ahmad.azhar@email.com',
      nomborTelefon: '012-3456789',
      namaAgensi: 'Unit Cap Keselamatan',
      applCat: 'Pengesahan Cap Keselamatan'
    };

    await this.openPDF(testData);
  }
}
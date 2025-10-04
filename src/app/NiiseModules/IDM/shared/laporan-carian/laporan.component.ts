import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '@coreui/angular';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';

interface TableHeader {
  label: string;
  field: string;
}

interface TableRow {
  [key: string]: any;
}

interface TableData {
  headers: TableHeader[];
  data: TableRow[];
}


@Component({
  selector: 'laporan',
  standalone: true,
    imports: [
        CommonModule,
        ContainerComponent
    ],
  templateUrl: './laporan.component.html',
  styleUrls: ['./laporan.component.scss']
})
export class LaporanComponent {
  @Input() selectedTable: string = '';
  @Input() searchFilters: any = {}; // e.g. { tarikhMula: '', tarikhHingga: '', kategori: '' }
  @Input() activeReportFilters: string[] = []; // e.g. { tarikhMula: '', tarikhHingga: '', kategori: '' }
  @Input() tableData: any = {}; // Dynamic rows for the selected table

    logoBase64: string = ''; // store base64 logo once loaded

  constructor() {
    this.getBase64ImageFromURL('assets/logo/login_logo.png').then(base64 => {
      this.logoBase64 = base64;
    });
  }

  // Optional: map to prettier labels
  labels: { [key: string]: string } = {
    negeri: 'Negeri',
    cawangan: 'Cawangan',
    bahagian: 'Bahagian',
    unit: 'Unit',
    tarikh: 'Tarikh', // combined label
    gred: 'Gred',
    status: 'Status'
  };

  @ViewChild('printContent') printContent!: ElementRef;

  getPrintContent() {
    return this.printContent.nativeElement.innerHTML;
  }

  @ViewChild('reportContent', { static: false }) reportContent!: ElementRef;

  // Expose method for parent
  getReportContent(): HTMLElement {
    return this.reportContent.nativeElement;
  }


  // helper for title
  get reportTitle(): string {
    return `NAMA LAPORAN : ${this.selectedTable}`.toUpperCase();
  }

  // helper: format tarikh
  get tarikhDisplay(): string {
    const mula = this.searchFilters['tarikhMula']?.trim() || '';
    const hingga = this.searchFilters['tarikhHingga']?.trim() || '';

    if (!mula && !hingga) {
      return '-'; // both empty
    }

    return `${mula || '-'} hingga ${hingga || '-'}`;
  }

  /** ✅ Utility: Convert image file from assets into base64 */
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

async getReportDefinition(): Promise<TDocumentDefinitions> {
  const logoBase64 = await this.getBase64ImageFromURL('assets/logo/login_logo.png');

  // 🖼️ Logo
  const logo: Content = {
    image: logoBase64,
    width: 180,
    alignment: 'center',
    margin: [0, 0, 0, 10]
  };

  // 📝 Title
  const title: Content = {
    text: this.reportTitle,
    style: 'title'
  };

  // 🔍 Filters
  const filters: Content[] = this.activeReportFilters
    .filter((field: string) => field !== 'tarikhHingga')
    .map((field: string) => {
      if (field === 'tarikhMula') {
        return {
          text: `${this.labels['tarikh']} : ${this.tarikhDisplay}`.toUpperCase(),
          margin: [10, 0, 10, 0]
        };
      }
      return {
        text: `${this.labels[field] || field} : ${this.searchFilters[field]?.trim() || '-'}`.toUpperCase(),
        margin: [10, 0, 10, 0],
      };
    });

// 📊 Table
const headers: string[] = this.tableData.headers.map((h: TableHeader) => h.label);
const body: any[] = [];

// ✅ Check if we need Bil. column
const includeBil = this.selectedTable !== 'Senarai ID Pengguna Semasa';

// ------------------ Table Header ------------------
if (includeBil) {
  body.push([
    { text: 'Bil.', style: 'tableHeader', alignment: 'center' },
    ...headers.map(h => ({
      text: h, style: 'tableHeader', alignment: 'center',
      noWrap: false // Allow header text to wrap
    }))
  ]);
} else {
  body.push(headers.map(h => ({
    text: h, style: 'tableHeader', alignment: 'center',
    noWrap: false
  })));
}

// ------------------ Table Rows ------------------
if (this.tableData.data.length > 0) {
  this.tableData.data.forEach((row: TableRow, i: number) => {
    const rowData: any[] = [];

    if (includeBil) {
      rowData.push({
        text: (i + 1).toString(),
        style: 'tableCell',
        alignment: 'center',
        noWrap: true
      });
    }

    this.tableData.headers.forEach((h: TableHeader) => {
      let cellAlignment = 'left';

      if (
        h.field.includes('tarikhPemohonan') ||
        h.field.includes('jenisPermohonan') ||
        h.field.includes('unit') ||
        h.field.includes('gred') ||
        h.field.includes('jumlah') ||
        h.field.includes('negeri') ||
        h.field.includes('cawangan') ||
        h.field.includes('status') ||
        h.field.includes('bahagian')
      ) {
        cellAlignment = 'center';
      }

      rowData.push({
        text: row[h.field] ?? '',
        style: 'tableCell',
        alignment: cellAlignment,
        noWrap: false,
        preserveLeadingSpaces: false,
        preserveTrailingSpaces: false
      });
    });

    body.push(rowData);
  });
} else {
  body.push([
    {
      text: 'Tiada rekod.',
      colSpan: includeBil ? headers.length + 1 : headers.length,
      alignment: 'center',
      italics: true,
      style: 'tableCell'
    },
    ...Array(includeBil ? headers.length : headers.length - 1).fill({})
  ]);
}

// 📐 A4 page calculations - strict limits for formal report
const pageWidth = 595; // A4 width in points
const pageMargins = 100; // Total horizontal margins (40 left + 40 right)
const availableWidth = pageWidth - pageMargins; // 495 points
const bilWidth = 25; // Fixed width for 'Bil.' column
const safetyBuffer = 10;

// Adjust available space depending on Bil.
const availableForColumns = includeBil
  ? availableWidth - bilWidth - safetyBuffer
  : availableWidth - safetyBuffer;

const columnCount = headers.length;

console.log(`Available width for columns: ${availableForColumns} points`);
console.log(`Number of columns: ${columnCount}`);

// ------------------ Column Width Calculation ------------------
const getOptimalColumnWidth = (headerIndex: number): number => {
  const header = this.tableData.headers[headerIndex];
  const fieldName = header.field.toLowerCase();

  // Base width per column
  const baseWidth = availableForColumns / columnCount;

  // Define width multipliers
  let widthMultiplier = 1.0;

  // Wide fields
  if (
    fieldName.includes('nopermohonan') ||
    fieldName.includes('jenispermohonan') ||
    fieldName.includes('pegawaimeluluskan') ||
    fieldName.includes('nama') ||
    fieldName.includes('pegawaimengesahkan')
  ) {
    widthMultiplier = 1.5;
  }
  // Narrow fields
  else if (
    fieldName.includes('bahagian') ||
    fieldName.includes('unit') ||
    fieldName.includes('tarikhpemohonan') ||
    fieldName.includes('negeri') ||
    fieldName.includes('cawangan') ||
    fieldName.includes('status') ||
    fieldName.includes('gred') ||
    fieldName.includes('jumlah')
  ) {
    widthMultiplier = 0.8;
  }

  return baseWidth * widthMultiplier;
};

// ------------------ Build Widths ------------------
let calculatedWidths: number[] = [];
let totalDataColumnsWidth = 0;

if (includeBil) {
  calculatedWidths.push(bilWidth); // First column fixed width
}

for (let i = 0; i < headers.length; i++) {
  const width = getOptimalColumnWidth(i);
  calculatedWidths.push(width);
  totalDataColumnsWidth += width;
}

console.log('Initial widths:', calculatedWidths);
console.log('Total data columns width:', totalDataColumnsWidth);

// Scale to use ALL available space
const targetDataColumnsWidth = availableForColumns;
const scaleFactor = targetDataColumnsWidth / totalDataColumnsWidth;

console.log('Scale factor to fill available space:', scaleFactor);

// Apply scaling (skip Bil. if included)
for (let i = includeBil ? 1 : 0; i < calculatedWidths.length; i++) {
  calculatedWidths[i] *= scaleFactor;
}

// ------------------ Enforce Minimums ------------------
const minColumnWidth = 40;
let needsRebalancing = false;

for (let i = includeBil ? 1 : 0; i < calculatedWidths.length; i++) {
  if (calculatedWidths[i] < minColumnWidth) {
    calculatedWidths[i] = minColumnWidth;
    needsRebalancing = true;
  }
}

if (needsRebalancing) {
  const totalMinWidth = calculatedWidths
    .slice(includeBil ? 1 : 0)
    .reduce((sum, width) => sum + Math.max(width, minColumnWidth), 0);

  if (totalMinWidth <= availableForColumns) {
    const remainingSpace = availableForColumns - totalMinWidth;
    const columnsAboveMin = calculatedWidths
      .slice(includeBil ? 1 : 0)
      .filter(w => w > minColumnWidth).length;

    if (columnsAboveMin > 0) {
      const extraPerColumn = remainingSpace / columnsAboveMin;
      for (let i = includeBil ? 1 : 0; i < calculatedWidths.length; i++) {
        if (calculatedWidths[i] > minColumnWidth) {
          calculatedWidths[i] += extraPerColumn;
        }
      }
    }
  }
}

// ------------------ Final Check ------------------
const finalTotalWidth = calculatedWidths.reduce((sum, width) => sum + width, 0);
console.log('Final column widths:', calculatedWidths);
console.log('Final total width:', finalTotalWidth, '/ Available:', availableWidth);


  const table: Content = {
    table: {
      headerRows: 1,
      // widths: ['auto', ...headers.map(() => '*')], // ✅ fit to A4 width
      widths: calculatedWidths, // ✅ fit to A4 width
      body,
      // Add these properties to prevent overflow
      // Important: don't let rows break to maintain readability
      dontBreakRows: false,
      keepWithHeaderRows: 1,
    },
    layout: {
      fillColor: (rowIndex: number) => (rowIndex === 0 ? '#f2f2f2' : null),
      hLineWidth: () => 0.5,
      vLineWidth: () => 0.5,
      hLineColor: () => '#cccccc',
      vLineColor: () => '#cccccc',
      // Add padding to prevent text overflow
      paddingLeft: () => 3,
      paddingRight: () => 3,
      paddingTop: () => 3,
      paddingBottom: () => 3,
      // This is important for text wrapping
      defaultBorder: true
    },
    // margin: [30, 10, 30, 0]
    margin: [0, 10, 0, 0],
    // Correct placement for page break control
    pageBreak: 'auto' as any,
    unbreakable: false
  };

  // 📄 Final definition
  return {
    pageSize: 'A4',
    // pageMargins: [30, 25, 30, 25],
    pageMargins: [40, 30, 40, 30],
    content: [
      logo,
      { text: 'JABATAN IMIGRESEN MALAYSIA', alignment: 'center', bold: true, margin: [0, 0, 0, 20], fontSize: 12, },
      title,
      { stack: filters, margin: [0, 0, 0, 10], },
      table
    ],
    styles: {
      title: {
        fontSize: 14,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 15]
      },
      tableHeader: {
        fontSize: 11,
        bold: true,
        fillColor: '#f2f2f2',
        // alignment: 'center',
        // margin: [2, 4, 2, 4],
        margin: [1, 3, 1, 3],
        // Add text wrapping for headers
        noWrap: false,
        lineHeight: 1.15 // Tighter line height
      },
      tableCell: {
        fontSize: 11,
        // margin: [2, 4, 2, 4],
        margin: [1, 3, 1, 3],
        // Enable text wrapping for cells
        // alignment: 'left',
        noWrap: false,
        lineHeight: 1.15, // Tighter line height
        // Add word breaking for long words
        preserveLeadingSpaces: false
      }
    },
    defaultStyle: {
      fontSize: 11,
      // Set default line height for better readability
      lineHeight: 1.15,
      // Global setting to allow word breaking
      columnGap: 15,
      // Better text handling
      // alignment: 'justify',
      // characterSpacing: 0
    },
    // Add global page settings for better overflow handling
    pageOrientation: 'portrait',
    // If you still have issues, consider landscape for wide tables
    // pageOrientation: 'landscape',
    compress: true,
    // Advanced overflow handling
    info: {
      title: this.reportTitle,
      author: 'Jabatan Imigresen Malaysia',
      subject: 'Report',
      creator: 'PDF Generator'
    }
  };
}

}

import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'laman-utama',
        loadComponent: () =>
          import('./laman-utama/laman-utama.component')
            .then((m) => m.LamanUtamaComponent)
      },
      {
        path: 'daftar-jangka-tiba-kapal',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/daftar-jangka-tiba-kapal/daftar-jangka-tiba-kapal.component')
            .then((m) => m.DaftarJangkaTibaKapalComponent)
      },
      {
        path: 'maklumat-jangka-tiba-kapal',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-jangka-tiba-kapal/maklumat-jangka-tiba-kapal.component')
            .then((m) => m.MaklumatJangkaTibaKapalComponent)
      },
      {
        path: 'maklumat-anak-kapal-dan-supernumerary',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-anak-kapal-dan-supernumerary/maklumat-anak-kapal-dan-supernumerary.component')
            .then((m) => m.MaklumatAnakKapalDanSupernumeraryComponent)
      },
      {
        path: 'maklumat-penumpang',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-penumpang/maklumat-penumpang.component')
            .then((m) => m.MaklumatPenumpangComponent)
      },
      {
        path: 'maklumat-orang-yang-diselamatkan',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-orang-yang-diselamatkan/maklumat-orang-yang-diselamatkan.component')
            .then((m) => m.MaklumatOrangYangDiselamatkanComponent)
      },
      {
        path: 'maklumat-penumpang-gelap',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-penumpang-gelap/maklumat-penumpang-gelap.component')
            .then((m) => m.MaklumatPenumpangGelapComponent)
      },
      {
        path: 'maklumat-anak-kapal-rawatan-hospital',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-anak-kapal-rawatan-hospital/maklumat-anak-kapal-rawatan-hospital.component')
            .then((m) => m.MaklumatAnakKapalRawatanHospitalComponent)
      },
      {
        path: 'maklumat-penumpang-rawatan-hospital',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-penumpang-rawatan-hospital/maklumat-penumpang-rawatan-hospital.component')
            .then((m) => m.MaklumatPenumpangRawatanHospitalComponent)
      },
      {
        path: 'maklumat-pergerakan-kapal',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-pergerakan-kapal/maklumat-pergerakan-kapal.component')
            .then((m) => m.MaklumatPergerakanKapalComponent)
      },
      {
        path: 'muat-naik-dokumen',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/muat-naik-dokumen/muat-naik-dokumen.component')
            .then((m) => m.MuatNaikDokumenComponent)
      },
      {
        path: 'maklumat-anak-kapal-dan-supernumerary-self',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-anak-kapal-dan-supernumerary-self/maklumat-anak-kapal-dan-supernumerary-self.component')
            .then((m) => m.MaklumatAnakKapalDanSupernumerarySelfComponent)
      },
      {
        path: 'maklumat-penumpang-gelap-self',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-penumpang-gelap-self/maklumat-penumpang-gelap-self.component')
            .then((m) => m.MaklumatPenumpangGelapSelfComponent)
      },
      {
        path: 'maklumat-kapal',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-kapal/maklumat-kapal.component')
            .then((m) => m.MaklumatKapalComponent)
      },
      {
        path: 'pengesahan-data-pengembara',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/pengesahan-data-pengembara/pengesahan-data-pengembara.component')
            .then((m) => m.PengesahanDataPengembaraComponent)
      },
      {
        path: 'maklumat-penumpang-self',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-penumpang-self/maklumat-penumpang-self.component')
            .then((m) => m.MaklumatPenumpangSelfComponent)
      },
      {
        path: 'maklumat-orang-yang-diselamatkan-self',
        loadComponent: () =>
          import('./daftar-jangka-tiba-kapal/maklumat-orang-yang-diselamatkan-self/maklumat-orang-yang-diselamatkan-self.component')
            .then((m) => m.MaklumatOrangYangDiselamatkanSelfComponent)
      },
      {
        path: 'jadual-pergerakan-kapal-laman-utama',
        loadComponent: () =>
          import('./jadual-pergerakan-kapal/laman-utama/laman-utama.component')
            .then((m) => m.LamanUtamaComponent)
      },
      {
        path: 'semakan-pemakluman-jangka-tiba-laman-utama-semakan',
        loadComponent: () =>
          import('./semakan-pemakluman-jangka-tiba/laman-utama-semakan/laman-utama-semakan.component')
            .then((m) => m.LamanUtamaSemakanComponent)
      },
      {
        path: 'semakan-pemakluman-jangka-tiba-maklumat-jangka-ketibaan-kapal',
        loadComponent: () =>
          import('./semakan-pemakluman-jangka-tiba/maklumat-jangka-ketibaan-kapal/maklumat-jangka-ketibaan-kapal.component')
            .then((m) => m.MaklumatJangkaKetibaanKapalComponent)
      },
      {
        path: 'semakan-pemakluman-jangka-tiba-maklumat-senarai',
        loadComponent: () =>
          import('./semakan-pemakluman-jangka-tiba/maklumat-senarai/maklumat-senarai.component')
            .then((m) => m.MaklumatSenaraiComponent)
      },
      {
        path: 'jadual-pergerakan-kapal/maklumat-pergerakan-kapal',
        loadComponent: () =>
          import('./jadual-pergerakan-kapal/maklumat-pergerakan-kapal/maklumat-pergerakan-kapal.component')
            .then((m) => m.MaklumatPergerakanKapalComponent)
      },
      {
        path: 'jadual-pergerakan-kapal/maklumat-muat-naik-dokumen',
        loadComponent: () =>
          import('./jadual-pergerakan-kapal/maklumat-muat-naik-dokumen/maklumat-muat-naik-dokumen.component')
            .then((m) => m.MaklumatMuatNaikDokumenComponent)
      },
      {
        path: 'laman-utama-pas-menaiki-kapal',
        loadComponent: () =>
          import('./jana-kad-pas-menaiki-kapal/laman-utama-pas-menaiki-kapal/laman-utama-pas-menaiki-kapal.component')
            .then((m) => m.LamanUtamaPasMenaikiKapalComponent)
      },
      {
        path: 'paparan-pas-menaiki-kapal-bahagian-hadapan',
        loadComponent: () =>
          import('./jana-kad-pas-menaiki-kapal/paparan-pas-menaiki-kapal-bahagian-hadapan/paparan-pas-menaiki-kapal-bahagian-hadapan.component')
            .then((m) => m.PaparanPasMenaikiKapalBahagianHadapanComponent)
      },
      {
        path: 'paparan-pas-menaiki-kapal-bahagian-belakang',
        loadComponent: () =>
          import('./jana-kad-pas-menaiki-kapal/paparan-pas-menaiki-kapal-bahagian-belakang/paparan-pas-menaiki-kapal-bahagian-belakang.component')
            .then((m) => m.PaparanPasMenaikiKapalBahagianBelakangComponent)
      },
      //semakan-maklumat-pegawai-agensi-perkapalan
      {
        path: 'laman-utama-semakan-maklumat-pegawai-agensi-perkapalan',
        loadComponent: () =>
          import('./semakan-maklumat-pegawai-agensi-perkapalan/laman-utama-semakan-maklumat-pegawai-agensi-perkapalan/laman-utama-semakan-maklumat-pegawai-agensi-perkapalan.component')
            .then((m) => m.LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent)
      },
      {
        path: 'maklumat-pegawai-agensi-perkapalan',
        loadComponent: () =>
          import('./semakan-maklumat-pegawai-agensi-perkapalan/maklumat-pegawai-agensi-perkapalan/maklumat-pegawai-agensi-perkapalan.component')
            .then((m) => m.MaklumatPegawaiAgensiPerkapalanComponent)
      },
      {
        path: 'maklumat-dokumen-sokongan',
        loadComponent: () =>
          import('./semakan-maklumat-pegawai-agensi-perkapalan/maklumat-dokumen-sokongan/maklumat-dokumen-sokongan.component')
            .then((m) => m.MaklumatDokumenSokonganComponent)
      },
      //Permohonan pendaftaran pegawai agensi perkapalan
      // {
      //   path: 'laman-utama-permohonan-pendaftaran-pegawai-agensi-perkapalan',
      //   loadComponent: () =>
      //     import('./permohonan-pendaftaran-pegawai-agensi-perkapalan/laman-utama-permohonan-pendaftaran-pegawai-agensi-perkapalan/laman-utama-permohonan-pendaftaran-pegawai-agensi-perkapalan.component')
      //       .then((m) => m.LamanUtamaPermohonanPendaftaranPegawaiAgensiPerkapalanComponent)
      // },
      {
        path: 'maklumat-dokumen-sokongan',
        loadComponent: () =>
          import('./permohonan-pendaftaran-pegawai-agensi-perkapalan/maklumat-dokumen-sokongan/maklumat-dokumen-sokongan.component')
            .then((m) => m.MaklumatDokumenSokonganComponent)
      },
      {
        path: 'maklumat-pemohon',
        loadComponent: () =>
          import('./permohonan-pendaftaran-pegawai-agensi-perkapalan/maklumat-pemohon/maklumat-pemohon.component')
            .then((m) => m.MaklumatPemohonComponent)
      },
      {
        path: 'maklumat-profil-pegawai-agensi-perkapalan',
        loadComponent: () =>
          import('./permohonan-pendaftaran-pegawai-agensi-perkapalan/maklumat-profil-pegawai-agensi-perkapalan/maklumat-profil-pegawai-agensi-perkapalan.component')
            .then((m) => m.MaklumatProfilPegawaiAgensiPerkapalanComponent)
      },
      //Permohonan pendaftaran ejen perkapalan
      {
        path: 'laman-utama-pengurusan-perkapalan',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/laman-utama-pengurusan-perkapalan/laman-utama-pengurusan-perkapalan.component')
            .then((m) => m.LamanUtamaPengurusanPerkapalanComponent)
      },
      {
        path: 'laman-utama-permohonan-pendaftaran-ejen',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/laman-utama-permohonan-pendaftaran-ejen/laman-utama-permohonan-pendaftaran-ejen.component')
            .then((m) => m.LamanUtamaPermohonanPendaftaranEjenComponent)
      },
      {
        path: 'maklumat-bank-guarantee-security-bon',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/maklumat-bank-guarantee-security-bon/maklumat-bank-guarantee-security-bon.component')
            .then((m) => m.MaklumatBankGuaranteeSecurityBonComponent)
      },
      {
        path: 'maklumat-cawangan-dan-kapal-semak',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/maklumat-cawangan-dan-kapal-semak/maklumat-cawangan-dan-kapal-semak.component')
            .then((m) => m.MaklumatCawanganDanKapalSemakComponent)
      },
      {
        path: 'maklumat-dokumen-sokongan',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/maklumat-dokumen-sokongan/maklumat-dokumen-sokongan.component')
            .then((m) => m.MaklumatDokumenSokonganComponent)
      },
      {
        path: 'maklumat-profil-pengembara',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/maklumat-profil-pengembara/maklumat-profil-pengembara.component')
            .then((m) => m.MaklumatProfilPengembaraComponent)
      },
      {
        path: 'maklumat-syarikat-perkapalan',
        loadComponent: () =>
          import('./permohonan-pendaftaran-ejen-perkapalan/maklumat-syarikat-perkapalan/maklumat-syarikat-perkapalan.component')
            .then((m) => m.MaklumatSyarikatPerkapalanComponent)
      },
      //Jana Surat Keputusan
      {
        path: 'paparan-surat-keputusan',
        loadComponent: () =>
          import('./jana-surat-keputusan/paparan-surat-keputusan/paparan-surat-keputusan.component')
            .then((m) => m.PaparanSuratKeputusanComponent)
      },
      {
        path: 'senarai-permohonan-ejen-perkapalan',
        loadComponent: () =>
          import('./jana-surat-keputusan/senarai-permohonan-ejen-perkapalan/senarai-permohonan-ejen-perkapalan.component')
            .then((m) => m.SenaraiPermohonanEjenPerkapalanComponent)
      },
      //Semakan Kelulusan Permohonan
      {
        path: 'laman-utama-semakan-permohonan-ejen-perkapalan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/laman-utama-semakan-permohonan-ejen-perkapalan/laman-utama-semakan-permohonan-ejen-perkapalan.component')
            .then((m) => m.LamanUtamaSemakanPermohonanEjenPerkapalanComponent)
      },
      {
        path: 'maklumat-bank-guarantee-security-bon',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/maklumat-bank-guarantee-security-bon/maklumat-bank-guarantee-security-bon.component')
            .then((m) => m.MaklumatBankGuaranteeSecurityBonComponent)
      },
      {
        path: 'maklumat-cawangan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/maklumat-cawangan/maklumat-cawangan.component')
            .then((m) => m.MaklumatCawanganComponent)
      },
      {
        path: 'maklumat-dokumen-sokongan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/maklumat-dokumen-sokongan/maklumat-dokumen-sokongan.component')
            .then((m) => m.MaklumatDokumenSokonganComponent)
      },
      {
        path: 'maklumat-syarikat-perkapalan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/maklumat-syarikat-perkapalan/maklumat-syarikat-perkapalan.component')
            .then((m) => m.MaklumatSyarikatPerkapalanComponent)
      },
      {
        path: 'paparan-surat-keputusan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/paparan-surat-keputusan/paparan-surat-keputusan.component')
            .then((m) => m.PaparanSuratKeputusanComponent)
      },
      {
        path: 'senarai-permohonan-ejen-perkapalan',
        loadComponent: () =>
          import('./semakan-kelulusan-permohonan/senarai-permohonan-ejen-perkapalan/senarai-permohonan-ejen-perkapalan.component')
            .then((m) => m.SenaraiPermohonanEjenPerkapalanComponent)
      }
    ]
  }
];

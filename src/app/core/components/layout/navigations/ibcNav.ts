import { INavData } from '@coreui/angular';

export const ibcNav: INavData = {
    name: 'Kawalan Sempadan Imigresen',
    url: '/ibc',
    iconComponent: { name: 'cil-folder' },
    children: [
        {
            name: 'Pengurusan Pemeriksaan Masuk',
            // url: '/ibc/pemeriksaan-masuk',
            iconComponent: { name: 'cil-folder-open' },
            children: [
                {
                    name: 'Laman Utama',
                    url: '',
                },
                {
                    name: 'Dashboard',
                    url: '',
                },
                {
                    name: 'Pengurusan Pendaftaran Kawalan',
                    url: '',
                },
                {
                    name: 'Pengurusan Pemeriksaan Masuk',
                    url: '/ibc/pemeriksaan-masuk/pemeriksaan-masuk',
                },
                {
                    name: 'Semakan & Tindakan Penyelia',
                    url: '/ibc/semakan-dan-tindakan-penyelia/carian-profil-pengembara',
                },
                {
                    name: 'Pengurusan Notis Penolakan Masuk',
                    url: '',
                },
                {
                    name: 'Pengurusan Pemeriksaan Keluar',
                    url: '',
                },
                {
                    name: 'Pengendalian Pengembara Tinggal Lebih Masa (TLM)',
                    url: '',
                },
                {
                    name: 'Pembatalan Pemeriksaan Keluar',
                    url: '',
                },
                {
                    name: 'Pengeluaran Memo Periksa Keluar (Check Out Memo - COM)',
                    url: '',
                },
                {
                    name: 'Pengurusan Perkapalan',
                    url: '',
                },
                {
                    name: 'Pengurusan Laporan',
                    url: '',
                },
                {
                    name: 'Notifikasi',
                    url: '',
                },
                {
                    name: 'Bantuan',
                    url: '',
                },
            ]
        },
        {
            name: 'Development',
            // url: '/ibc/pemeriksaan-masuk',
            iconComponent: { name: 'cil-cursor' },
            children: [
                {
                    name: 'Pengurusan Pemeriksaan Masuk',
                    url: '/ibc/pemeriksaan-masuk',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Pemeriksaan Masuk (Kaunter Manual)',
                            url: '/ibc/pemeriksaan-masuk/pemeriksaan-masuk',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Pemeriksaan Masuk (Kaunter Manual Kenderaan)',
                            url: '/ibc/kaunter-manual-kenderaan/pemeriksaan-masuk-dokumen',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Pemeriksaan Masuk Sabah Sarawak (Kaunter Manual Kenderaan)',
                            url: '/ibc/pemeriksaan-masuk-sabah-sarawak-kaunter-manual/sabah-sarawak-manual-profil',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Semakan Dan Tindakan Penyelia',
                            url: '/',
                            iconComponent: { name: 'cil-description' },
                            children: [
                                {
                                    name: 'Senarai Semakan Dan Tindakan Penyelia',
                                    url: '/ibc/semakan-dan-tindakan-penyelia/carian-profil-pengembara',
                                    iconComponent: { name: 'cil-description' },
                                },
                                {
                                    name: 'Semakan Maklumat Pas',
                                    url: '/ibc/semakan-dan-tindakan-penyelia/semakan-maklumat-pas',
                                    iconComponent: { name: 'cil-description' },
                                },
                                {
                                    name: 'Padanan Pergerakan Data',
                                    url: '/ibc/semakan-dan-tindakan-penyelia/padanan-pergerakan-data',
                                    iconComponent: { name: 'cil-description' },
                                }
                            ]
                        },
                        {
                            name: 'Gate Monitoring System',
                            url: 'ibc/pemeriksaan-masuk-motosikal/semakan-status-e-gate-motosikal',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Pemeriksaan Masuk eGate',
                            url: '/',
                            iconComponent: { name: 'cil-description' },
                            children: [
                                {
                                    name: 'Pemeriksaan Masuk eGate',
                                    url: 'ibc/pemeriksaan-masuk-egate/pemeriksaan-masuk-egate',
                                    iconComponent: { name: 'cil-description' },
                                },
                                {
                                    name: 'Semakan Status eGate',
                                    url: 'ibc/pemeriksaan-masuk-egate/semakan-status-egate',
                                    iconComponent: { name: 'cil-description' },
                                },

                                {
                                    name: 'Pemeriksaan Masuk eGate Seamless',
                                    url: 'ibc/pemeriksaan-masuk-egate-seamless/bahagian-data-biometrik-wajah',
                                    iconComponent: { name: 'cil-description' },
                                },
                            ]
                        },
                    ],
                },
                {
                    name: 'Pemeriksaan Keluar',
                    url: '/ibc/pemeriksaan-keluar-kaunter-manual',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Pemeriksaan Keluar (Kaunter Manual)',
                            url: '/ibc/pemeriksaan-keluar-kaunter-manual/pemeriksaan-keluar-kaunter-manual-pilih-dokumen',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Arahan Pengeluaran COM',
                            url: '/ibc/pemeriksaan-keluar-arahan-pengeluaran-com/pengurusan-pemeriksaan-arahan',
                            iconComponent: { name: 'cil-description' },
                        },
                    ],
                },
                {
                    name: 'Pengurusan NTL',
                    url: '/ibc/pengurusan-ntl',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Melaksanakan Proses NTL',
                            url: '/ibc/pengurusan-ntl/imbasan-ntl',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Rayuan NTL',
                            url: '/ibc/pengurusan-ntl/rayuan-ntl',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Semakan dan Keputusan Rayuan NTL',
                            url: '/ibc/pengurusan-ntl/semakan-keputusan-ntl',
                            iconComponent: { name: 'cil-description' },
                        },
                    ],
                },
                {

                    name: 'Pemeriksaan Keluar Dari Kompleks Bebas Cukai (KBC) dan Free Flow (Kaunter Manual)',
                    url: '/ibc/pemeriksaan-keluar-dari-kompleks-bebas-cukai',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Pemeriksaan Keluar Dari Kompleks Bebas Cukai (Kaunter Manual)',
                            url: '/ibc/pemeriksaan-keluar-dari-kompleks-bebas-cukai/pemeriksaan-keluar-dari-kompleks-ibc',
                            iconComponent: { name: 'cil-description' },
                        },],
                },
                {
                    name: 'Pengurusan Perkapalan',
                    url: '/ibc/pengurusan-perkapalan',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Permohonan Pendaftaran Ejen',
                            url: '/ibc/pengurusan-perkapalan/maklumat-profil-pengembara',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Permohonan Pendaftaran Pegawai Agensi Perkapalan',
                            url: '/ibc/pengurusan-perkapalan/maklumat-pemohon',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Semakan Permohonan Ejen Perkapalan',
                            url: '/ibc/pengurusan-perkapalan/senarai-permohonan-ejen-perkapalan',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Semakan Maklumat Pegawai Agensi Perkapalan',
                            url: '/ibc/pengurusan-perkapalan/maklumat-pegawai-agensi-perkapalan',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Daftar Jangka Tiba Kapal',
                            url: '/ibc/pengurusan-perkapalan/maklumat-jangka-tiba-kapal',
                            iconComponent: { name: 'cil-description' },
                        },
                        {
                            name: 'Pas Menaiki Kapal',
                            url: '/ibc/pengurusan-perkapalan/paparan-pas-menaiki-kapal-bahagian-hadapan',
                            iconComponent: { name: 'cil-description' },
                        },
                    ],
                },
                {
                    name: 'Pengurusan Pendaftaran Kawalan',
                    url: '/ibc/Pengurusan-pendaftaran-kawalan',
                    iconComponent: { name: 'cil-cursor' },
                    children: [
                        {
                            name: 'Pengurusan Pendaftaran Kawalan',
                            url: '/',
                            iconComponent: { name: 'cil-description' },
                            children: [
                                {
                                    name: 'Pengurusan Pendaftaran Kawalan',
                                    url: '/ibc/semakan-dan-pengesahan/pengurusan-pendaftaran-kawalan',
                                    iconComponent: { name: 'cil-description' },
                                },
                                {
                                    name: 'Senarai semakan',
                                    url: '/ibc//semakan-dan-pengesahan/senarai-semakan',
                                    iconComponent: { name: 'cil-description' },
                                },
                            ]
                        },
                        {
                            name: 'Isi Maklumat Pengembara',
                            url: '',
                            iconComponent: { name: 'cil-description' },
                            children: [
                                {
                                    name: 'Pengisian maklumat pengembara',
                                    url: 'ibc/isi-maklumat-pengembara/pengisian-kemasukan-kelompok',
                                    iconComponent: { name: 'cil-description' },
                                },
                                {
                                    name: 'maklumat perjalanan dan ketua pemohon',
                                    url: 'ibc/isi-maklumat-pengembara/maklumat-perjalanan-dan-ketua-pemohon',
                                    iconComponent: { name: 'cil-description' },
                                },
                            ]
                        },
                    ],
                }
            ]
        }
    ],
};

import { INavData } from '@coreui/angular';

export const secNav: INavData = {
  name: 'Modul Pengurusan Keselamatan',
  url: '/sec',
  iconComponent: { name: 'cil-speedometer' },
  children: [
    
    // {
    //   name: 'Pengurusan Senarai Syak',
    //   iconComponent: { name: 'cil-cursor' },
    //   children: [
       
    //         {
    //           name: 'Permohonan Baru',
    //           url: '/sec/permohonan-JKRIM/kategori-permohonan',
    //           iconComponent: { name: 'cil-speedometer' },
    //         },
    //         {
    //           name: 'Semakan Permohonan',
    //           url: '/sec/permohonan-JKRIM/semakan-permohonan',
    //           iconComponent: { name: 'cil-speedometer' },
    //         }
    //   ],
    // },
   
    // {
    //   name: 'Pengurusan Senarai Syak',
    //   url: '/sec/permohonan-JKRIM',
    //   iconComponent: { name: 'cil-cursor' },
    //   children: [
    //     {
    //       name: 'Pengendalian Kes Rayuan Senarai Syak Dan Pasport Malaysia Antarabangsa ke JKRIM',
    //       url: '/sec/permohonan-JKRIM',
    //       iconComponent: { name: 'cil-speedometer' },
    //     },
    //     {
    //       name: 'Permohonan Baru',
    //       url: '/sec/kategori-permohonan',
    //       iconComponent: { name: 'cil-speedometer' },
    //     },
    //   ],
    // },
    
    {
      name: 'Pengurusan Senarai Syak',
      url: '/sec/pengurusan-senarai-syak/selenggara-senarai-syak',
      iconComponent: {
        name: 'cil-cursor'
      },
      children: [
        {
          name: 'Carian Subjek',
          url: '/sec/pengurusan-senarai-syak/selenggara-senarai-syak/carian-subjek',
          iconComponent: { name: 'cil-description' },
        },
        {
          name: 'Tambah Subjek',
          url: '/sec/pengurusan-senarai-syak/selenggara-senarai-syak/tambah-subjek',
          iconComponent: { name: 'cil-description' },
        },
      ],
    },
    {
      name: 'Pengendalian Pengesahan Senarai Syak Bagi Kes BSS',
      url: '/sec/bss',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Permohonan Baharu',
          url: '/sec/bss/pendaftaran-permohonan-bss',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Semakan Permohonan',
          url: '/sec/bss/carian-bss',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Pengesyoran Permohonan',
          url: '/sec/bss/pengesyoran-permohonan-bss',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Kelulusan Permohonan',
          url: '/sec/bss/Kelulusan-Permohonan-bss',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Keputusan Permohonan JKRIM',
          url: '/sec/bss/keputusan-permohonan-bss-jkrim',
          iconComponent: { name: 'cil-speedometer' },
        },
      ],
    },
    {
      name: 'Pengurusan Pengendalian Pengesahan',
      url: '/sec/pengurusan-pengendalian-pengesahan',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Pengesahan Pergerakan, Cap Keselamatan, Pasport Malaysia, Pas, dan Senarai Syak',
          url: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan',
          iconComponent: { name: 'cil-cursor' },
          children: [
            {
              name: 'Permohonan Baru',
              url: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/permohonan-baru',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Semakan Permohonan',
              url: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/semakan-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Kelulusan Permohonan',
              url: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/kelulusan-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Keputusan Permohonan',
              url: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            },
          ],
        },
      ],
    },
    {
      name: 'Tetapan e-Digital Stamping',
      url: '/sec/tetapan-e-digital-stamping',
      iconComponent: { name: 'cil-cursor' },
    },
    {
      name: 'Permohonan Surat Kemudahan',
      url: '/sec/permohonan-surat-kemudahan',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Permohonan Baru',
          url: '/sec/permohonan-surat-kemudahan/permohonan-baru',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
        {
          name: 'Pengesyoran Permohonan',
          url: '/sec/permohonan-surat-kemudahan/pengesyoran-permohonan',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
        {
          name: 'Kelulusan Permohonan',
          url: '/sec/permohonan-surat-kemudahan/kelulusan-permohonan',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
        {
          name: 'Keputusan Permohonan JKRIM',
          url: '/sec/permohonan-surat-kemudahan/keputusan-jkrim',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        }
      ]
    },
    {
      name: 'Menu Pertanyaan',
      url: '/sec/menu-pertanyaan',
      iconComponent: { name: 'cil-search' },
    },
    {
      name: 'Pengurusan Edaran Notis',
      url: '/sec/pengurusan-edaran-notis',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Permohonan Edaran Notis',
          url: '/sec/pengurusan-edaran-notis/permohonan-edaran-notis',
          iconComponent: { name: 'cil-cursor' },
        },
        {
          name: 'Kemas Kini Edaran Notis',
          url: '/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis',
          iconComponent: { name: 'cil-cursor' },
        }
      ]
    },
    {
      name: 'Pengurusan Surat',
      url: '/sec/pengurusan-surat',
      iconComponent: { name: 'cil-cursor' },
      children: [
            {
              name: 'Pengurusan Surat Kemudahan Berlepas',
              url: '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Permohonan Baru',
              url: '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas/permohonan-baru',
              iconComponent: { name: 'cil-speedometer' },
            },

            {
              name: 'Kebenaran ke Baitulmaqdis',
              url: '/sec/kebenaran-ke-baitulmaqdis',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Permohonan Baru',
                      url: '/sec/kebenaran-ke-baitulmaqdis/permohonan-baru',
                      iconComponent: { name: 'cil-speedometer' },
                      badge: {
                          color: 'warning',
                          text: 'NEW'
                      } 
                    },

                    {
                      name: 'Semakan Permohonan',
                      url: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                      badge: {
                          color: 'warning',
                          text: 'NEW'
                      } 
                    },

                    {
                      name: 'Pengesyoran Permohonan',
                      url: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                      badge: {
                          color: 'warning',
                          text: 'NEW'
                      } 
                    },
                    {
                      name: 'Kelulusan Permohonan',
                      url: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                      badge: {
                          color: 'warning',
                          text: 'NEW'
                      } 
                    },
                  ]
            },
            
            {
              name: 'Permohonan Surat Kemudahan Berlepas',
              url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Pengesyoran Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Kelulusan Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/kelulusan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    }
              ]
            },
        {
          name: 'Pengurusan Surat Kemudahan Berlepas',
          url: '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Permohonan Baru',
          url: '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas/permohonan-baru',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Permohonan Surat Kemudahan Berlepas',
          url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas',
          iconComponent: { name: 'cil-cursor' },
          children: [
            {
              name: 'Pengesyoran Permohonan',
              url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Kelulusan Permohonan',
              url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/kelulusan-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            }
          ]
        },

            {
              name: 'Permohonan Surat Kemudahan Berlepas',
              url: '/sec/pengurusan-/permohonan-surat-kemudahan-berlepas',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Pengesyoran Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Kelulusan Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/kelulusan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    }
              ]
            },
            {
              name: 'Permohonan Pas Bagi Tujuan Perkahwinan Warga Asing',
              url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Carian',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing',
                      iconComponent: { name: 'cil-speedometer' },
                    }
                    ,{
                      name: 'Pendaftaran Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Carian Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/carian-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Penerimaan Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/penerimaan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Pengesyoran Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
                    {
                      name: 'Kelulusan Permohonan',
                      url: '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/kelulusan-permohonan',
                      iconComponent: { name: 'cil-speedometer' },
                    },
              ]
            },
        {
          name: 'Permohonan Surat Kemudahan Berlepas',
          url: '/sec/pengurusan-/permohonan-surat-kemudahan-berlepas',
          iconComponent: { name: 'cil-cursor' },
          children: [
            {
              name: 'Pengesyoran Permohonan',
              url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            },
            {
              name: 'Kelulusan Permohonan',
              url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/kelulusan-permohonan',
              iconComponent: { name: 'cil-speedometer' },
            }
          ]
        }
      ]
    },
    {
      name: 'Pemerhatian',
      url: '/sec/permehatian',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Carian Kes Pemerhatian',
          url: '/sec/permehatian/carian-pemerhatian',
          iconComponent: { name: 'cil-search' },
        },
        {
          name: 'Kelulusan Kes Pemerhatian',
          url: '/sec/permehatian/carian-kelulusan-kes',
          iconComponent: { name: 'cil-description' },
        },
      ]
    },
    {
              name: 'Keputusan Permohonan',
              url: '/sec/pengurusan-senarai-syak',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Cari Subjek',
                      url: '/sec/pengurusan-senarai-syak/carian-subjek',
                      //url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-search' },
                    },
                    {
                      name: 'Tambah Subjek',
                      url: '/sec/pengurusan-senarai-syak/tambah-subjek',
                      iconComponent: { name: 'cil-plus' },
                    },
                    {
                      name: 'Kemasukan Dokumen Hilang',
                      url: '/sec/pengurusan-senarai-syak/kemasukan-dokumen-hilang',
                      iconComponent: { name: 'cil-description' },
                    }
              ]
            },
            {
              name: 'Keputusan Permohonan JKRIM',
              url: '/sec/pengurusan-senarai-syak',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Cari Subjek',
                      url: '/sec/keputusan-permohonan-JKRIM/carian-subjek',
                      //url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-search' },
                    },
                    {
                      name: 'Tambah Subjek',
                      url: '/sec/keputusan-permohonan-JKRIM/tambah-subjek',
                      iconComponent: { name: 'cil-plus' },
                    },
                    {
                      name: 'Kemasukan Dokumen Hilang',
                      url: '/sec/keputusan-permohonan-JKRIM/kemasukan-dokumen-hilang',
                      iconComponent: { name: 'cil-description' },
                    }
              ]
            },
            {
              name: 'Unik ID',
              url: '/sec/unik-id',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Carian Profil',
                      url: '/sec/unik-id/carian-profil',
                      iconComponent: { name: 'cil-search' },
                    },
                    {
                      name: 'Pendaftaran Profil',
                      url: '/sec/unik-id/pendaftaran-profil',
                      iconComponent: { name: 'cil-plus' },
                    },
                    {
                      name: 'Pengambilan Biometrik',
                      url: '/sec/unik-id/ambil-biometrik',
                      iconComponent: { name: 'cil-description' },
                    }
              ]
            },

            {
              name: 'Pengesahan Cap Jari/ Wajah/ Iris',
              url: '/sec/pengesahan-cap-jari',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Senarai Permohonan',
                      url: '/sec/pengesahan-cap-jari/senarai-permohonan',
                      //url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
                      iconComponent: { name: 'cil-search' },
                    },
                    {
                      name: 'Permohonan Baru',
                      url: '/sec/pengesahan-cap-jari/pendaftaran-permohonan/pendaftaran-permohonan',
                      iconComponent: { name: 'cil-plus' },
                    },
                    {
                      name: 'Semakan Permohonan',
                      url: '/sec/pengesahan-cap-jari/semakan-permohonan/semakan-permohonan',
                      iconComponent: { name: 'cil-description' },
                    },
                    {
                      name: 'Kelulusan ',
                      url: '/sec/pengesahan-cap-jari/kelulusan/kelulusan',
                      iconComponent: { name: 'cil-description' },
                    }
              ]
            },

            {
              name: 'Tolak/ Lucut Warganegara',
              url: '/sec/tolak-lucut-warganegara',
              iconComponent: { name: 'cil-cursor' },
              children: [
                    {
                      name: 'Permohonan Baru',
                      url: '/sec/tolak-lucut-warganegara/maklumat-sabjek',
                      iconComponent: { name: 'cil-plus' },
                    },

              ]
            },

            

{
      name: 'Keputusan Permohonan',
      url: '/sec/pengurusan-senarai-syak',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Cari Subjek',
          url: '/sec/pengurusan-senarai-syak/carian-subjek',
          //url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
          iconComponent: { name: 'cil-search' },
        },
        {
          name: 'Tambah Subjek',
          url: '/sec/pengurusan-senarai-syak/tambah-subjek',
          iconComponent: { name: 'cil-plus' },
        },
        {
          name: 'Kemasukan Dokumen Hilang',
          url: '/sec/pengurusan-senarai-syak/kemasukan-dokumen-hilang',
          iconComponent: { name: 'cil-description' },
        }
      ]
    },
    {
      name: ' Menu Selenggara Kod-Kod Keselamatan Dan Kod-Kod Agensi',
      url: '/sec/menu-selenggara',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Kod-Kod Keselamatan',
          url: '/sec/menu-selenggara/menu',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
      ]
    },
    {
      name: 'Permohonan Surat Kemudahan Masuk',
      url: '/sec/kebenaran-masuk-israel',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Permohonan Baru',
          url: '/sec/kebenaran-masuk-israel/permohonan-baru',
          iconComponent: { name: 'cil-speedometer' },
          badge: {
            color: 'warning',
            text: 'NEW'
          }
        },
      ]
    },
    {
      name: 'Keputusan Permohonan JKRIM',
      url: '/sec/pengurusan-senarai-syak',
      iconComponent: { name: 'cil-cursor' },
      children: [
        {
          name: 'Cari Subjek',
          url: '/sec/keputusan-permohonan-JKRIM/carian-subjek',
          //url: '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
          iconComponent: { name: 'cil-search' },
        },
        {
          name: 'Tambah Subjek',
          url: '/sec/keputusan-permohonan-JKRIM/tambah-subjek',
          iconComponent: { name: 'cil-plus' },
        },
        {
          name: 'Kemasukan Dokumen Hilang',
          url: '/sec/keputusan-permohonan-JKRIM/kemasukan-dokumen-hilang',
          iconComponent: { name: 'cil-description' },
        }
      ]
    }
  ]
};

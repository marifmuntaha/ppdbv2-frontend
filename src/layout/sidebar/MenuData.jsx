const RootMenu = [
    {
        icon: "monitor",
        text: "Dashboard",
        link: "/",
    },
    {
        icon: "archived",
        text: "Master Data",
        active: false,
        subMenu: [
            {
                text: "Jenjang",
                link: "/master-data/jenjang",
            },
            {
                text: "Tingkat",
                link: "/master-data/tingkat",
            },
            {
                text: "Jurusan",
                link: "/master-data/jurusan",
            },
            {
                text: "Tahun Pelajaran",
                link: "/master-data/tahun-pelajaran",
            },
        ],
    },
    {
        icon: "building",
        text: "Data Lembaga",
        active: false,
        subMenu: [
            {
                text: "Daftar Lembaga",
                link: "/data-lembaga/daftar",
            },
            {
                text: "Data Program",
                link: "/data-lembaga/program",
            },
            {
                text: "Rombongan Belajar",
                link: "/data-lembaga/rombongan-belajar",
            },
            {
                text: "Data Kamar",
                link: "/data-lembaga/kamar-santri",
            }
        ],
    },
    {
        icon: "user-list",
        text: "Data Siswa",
        active: false,
        subMenu: [
            {
                text: "Data Siswa",
                link: "/data-siswa",
            },
            {
                text: "Mutasi",
                active: false,
                subMenu: [
                    {
                        text: "Mutasi Keluar",
                        link: "/data-siswa/mutasi/keluar",
                    },
                    {
                        text: "Mutasi Masuk",
                        link: "/data-siswa/mutasi/masuk",
                    }
                ]
            },
            {
                text: "Akademik",
                active: false,
                subMenu: [
                    {
                        text: "Pindah Kelas",
                        link: "/data-siswa/akademik/pindah-kelas",
                    },
                    {
                        text: "Kenaikan Kelas",
                        link: "/data-siswa/akademik/kenaikan-kelas",
                    },
                    {
                        text: "Kelulusan",
                        link: "/data-siswa/akademik/kelulusan",
                    },
                    {
                        text: "Daftar Alumni",
                        link: "/data-siswa/akademik/daftar-alumni",
                    }
                ]
            }
        ],
    },
    {
        icon: "user-list",
        text: "Data Santri",
        link: "/data-santri",
    },
    {
        icon: "template",
        text: "Surat Menyurat",
        active: false,
        subMenu: [
            {
                text: "Surat Masuk",
                link: "/data-surat/masuk",
            },
            {
                text: "Surat Keluar",
                link: "/data-surat/Keluar",
            },
        ],
    },
    {
        icon: "cc-alt2",
        text: "Keuangan",
        active: false,
        subMenu: [
            {
                text: "Data Rekening",
                link: "/keuangan/data-rekening",
            },
            {
                text: "Item Pembayaran",
                link: "/keuangan/item-pembayaran",
            },
            {
                text: "Transaksi",
                link: "/keuangan/transaksi",
            },
            {
                text: "Tagihan",
                link: "/keuangan/tagihan",
            },
            {
                text: "Potongan",
                link: "/keuangan/potongan",
            },
            {
                text: 'Laporan',
                active: false,
                subMenu: [
                    {
                        text: 'Neraca',
                        link: "/keuangan/laporan/neraca",
                    },
                    {
                        text: 'Arus Kas',
                        link: "/keuangan/laporan/arus-kas",
                    },
                    {
                        text: 'Tagihan',
                        link: "/keuangan/laporan/tagihan",
                    }
                ]
            }
        ]
    },
    {
        icon: "list",
        text: "Data Guru",
        link: "/data-guru",
    },
    {
        icon: "users",
        text: "Data Pengguna",
        link: "/data-pengguna",
    },
];
const OperatorMenu = [
    {
        icon: "monitor",
        text: "Dashboard",
        link: "/",
    },
    {
        icon: "building",
        text: "Data Lembaga",
        active: false,
        subMenu: [
            {
                text: "Daftar Lembaga",
                link: "/data-lembaga/daftar",
            },
            {
                text: "Data Program",
                link: "/data-lembaga/program",
            },
            {
                text: "Rombongan Belajar",
                link: "/data-lembaga/rombongan-belajar",
            },
        ],
    },
    {
        icon: "user-list",
        text: "Data Siswa",
        active: false,
        subMenu: [
            {
                text: "Data Siswa",
                link: "/data-siswa",
            },
            {
                text: "Mutasi",
                active: false,
                subMenu: [
                    {
                        text: "Mutasi Keluar",
                        link: "/data-siswa/mutasi/keluar",
                    },
                    {
                        text: "Mutasi Masuk",
                        link: "/data-siswa/mutasi/masuk",
                    }
                ]
            },
            {
                text: "Akademik",
                active: false,
                subMenu: [
                    {
                        text: "Pindah Kelas",
                        link: "/data-siswa/akademik/pindah-kelas",
                    },
                    {
                        text: "Kenaikan Kelas",
                        link: "/data-siswa/akademik/kenaikan-kelas",
                    },
                    {
                        text: "Kelulusan",
                        link: "/data-siswa/akademik/kelulusan",
                    },
                    {
                        text: "Daftar Alumni",
                        link: "/data-siswa/akademik/daftar-alumni",
                    }
                ]
            }
        ],
    },
    {
        icon: "template",
        text: "Surat Menyurat",
        active: false,
        subMenu: [
            {
                text: "Surat Masuk",
                link: "/data-surat/masuk",
            },
            {
                text: "Surat Keluar",
                link: "/data-surat/Keluar",
            },
        ],
    },
    {
        icon: "cc-alt2",
        text: "Keuangan",
        active: false,
        subMenu: [
            {
                text: "Data Rekening",
                link: "/keuangan/data-rekening",
            },
            {
                text: "Item Pembayaran",
                link: "/keuangan/item-pembayaran",
            },
            {
                text: "Transaksi",
                link: "/keuangan/transaksi",
            },
            {
                text: "Tagihan",
                link: "/keuangan/tagihan",
            },
            {
                text: "Potongan",
                link: "/keuangan/potongan",
            },
            {
                text: 'Laporan',
                active: false,
                subMenu: [
                    {
                        text: 'Neraca',
                        link: "/keuangan/laporan/neraca",
                    },
                    {
                        text: 'Arus Kas',
                        link: "/keuangan/laporan/arus-kas",
                    },
                    {
                        text: 'Tagihan',
                        link: "/keuangan/laporan/tagihan",
                    }
                ]
            }
        ]
    },
    {
        icon: "list",
        text: "Data Guru",
        link: "/data-guru",
    },
    {
        icon: "users",
        text: "Data Pengguna",
        link: "/data-pengguna",
    },
];
const HeadMenu = [
    {
        icon: "monitor",
        text: "Dashboard",
        link: "/",
    },
    {
        icon: "building",
        text: "Data Lembaga",
        active: false,
        subMenu: [
            {
                text: "Daftar Lembaga",
                link: "/data-lembaga/daftar",
            },
            {
                text: "Data Program",
                link: "/data-lembaga/program",
            },
            {
                text: "Rombongan Belajar",
                link: "/data-lembaga/rombongan-belajar",
            },
        ],
    },
    {
        icon: "edit-alt",
        text: "Tanda Tangan",
        active: false,
        subMenu: [
            {
                text: "Buat Signature",
                link: "/tanda-tangan/buat",
            },
        ],
    },
];
const StudentMenu = [
    {
        icon: "monitor",
        text: "Dashboard",
        link: "/siswa",
    },
    {
        icon: "file",
        text: "Pendaftaran",
        active: false,
        subMenu: [
            {
                text: "Data Pribadi",
                link: "/siswa/pendaftaran/data-pribadi",
            },
            {
                text: "Program Pilihan",
                link: "/siswa/pendaftaran/program-pilihan",
            },
            {
                text: "Data Orangtua",
                link: "/siswa/pendaftaran/data-orangtua",
            },
            {
                text: "Data Alamat",
                link: "/siswa/pendaftaran/data-alamat",
            },
            {
                text: "Data Bantuan",
                link: "/siswa/pendaftaran/data-bantuan",
            },
            {
                text: "Sekolah Asal",
                link: "/siswa/pendaftaran/sekolah-asal",
            },
        ],
    },
    {
        icon: "upload",
        text: "Unggah Berkas",
        link: "/siswa/unggah-berkas",
    },
    {
        icon: "printer",
        text: "Cetak Formulir",
        link: "/siswa/cetak-formulir",
    },
    {
        icon: "cc",
        text: "Pembayaran",
        link: "/siswa/pembayaran",
    },
    {
        icon: "bell",
        text: "Pengumuman",
        link: "/siswa/pengumuman",
    },
];
const PublicMenu = [
    {
        icon: "monitor",
        text: "Beranda",
        link: "/",
    },
    {
        icon: "users",
        text: "Data Pendaftar",
        link: "/data-pendaftar",
    },
    {
        icon: "info",
        text: "Informasi",
        active: false,
        subMenu: [
            {
                text: "Jadwal Pelaksanaan",
                link: "/informasi/jadwal-pelaksanaan",
            },
            {
                text: "Lokasi Pendaftaran",
                link: "/informasi/lokasi-pendaftaran",
            },
            {
                text: "Alur Pelaksanaan",
                link: "/informasi/alur-pelaksanaan",
            },
            {
                text: "Daya Tampung",
                link: "/informasi/daya-tampung",
            },
        ],
    },
    {
        icon: "download",
        text: "Unduhan",
        link: "/unduhan",
    },
];
export {RootMenu, PublicMenu, OperatorMenu, HeadMenu, StudentMenu} ;

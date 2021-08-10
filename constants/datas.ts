const dataMenu = [
  {
    ikon: '/img/icon/catering.svg',
    judul: 'Butuh Catering',
    deskripsi: 'Kami memberikan makanan siap santap dengan sayur & buah',
  },
  {
    ikon: '/img/icon/obat.svg',
    judul: 'Butuh Obat',
    deskripsi: 'Kami distribusikan obat, vitamin, dan juga herbal',
  },
  {
    ikon: '/img/icon/oksigen.svg',
    judul: 'Butuh Oksigen',
    deskripsi: 'Kami pinjamkan tabung oksigen untuk yang saturasinya <90',
  },
  {
    ikon: '/img/icon/telemedis.svg',
    judul: 'Butuh Telemedis',
    deskripsi: 'Melayani konsultasi medis & rehabilitasi ',
  },
  {
    ikon: '/img/icon/mobil.svg',
    judul: 'Butuh Antar Jemput',
    deskripsi: 'Menyediakan untuk operasional jalan',
  },
]

const dataBantu = [
  {
    title: 'Bantu Informasi',
    icon: '/img/icon/light.svg',
    data: [
      {
        title: 'Info Pengisian Oxygen Ready Stock',
        desc: '',
        link: 'https://wa.me/+6281234562515?text=Assalamu%27alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20infoin%20tempat%20isi%20ulang%20tabung%20oksigen.%0A%0ANama%20vendor%20isi%20ulang%20%3A%0ANama%20pemilik%2Fpengelola%20%3A%0AHP%20(WhatsApp)%20pengelola%20%3A%0AAlamat%20vendor%20(jika%20ada%20shareloc%20Google%20Map%20lbh%20baik)%20%3A%0AHarga%20pengisian%20%3A%0AReady%20stock%20(hapus%20salah%20satu)%20%3A%20iya%20%2F%20tidak%20%0ABisa%20isi%20dan%20pick%20up%20di%20hari%20yg%20sama%3A%20iya%2Ftidak%20%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
      {
        title: 'Info Catering Halal dan Terjangkau',
        desc: '',
        link: 'https://wa.me/+6287878762629?text=Assalamu%27alaykum%20Pak%20Sulung%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20vendor%20catering%20untuk%20wilayah%20%3Cisikan%20nama%20kota%20dan%20kecamatan%20lokasi%20catering%3E.%0A%0ANama%20catering%3A%0ANama%20pemilik%2Fpengelola%20%3A%0AHP%20(WhatsApp)%20pengelola%20%3A%0AAlamat%20catering%20%3A%0AKisaran%20harga%20catering%20per%20hari%20%2F%20orang%20(opsional)%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
      {
        title: 'Akses Ruang Perawatan',
        desc: '',
        link: 'https://wa.me/+6281234562505?text=Assalamu%27alaykum%20Mba%20Ira%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20Rumah%20Sakit%20yang%20msh%20ada%20ruangan%20perawatan%20pasien%20COVID-19.%0A%0ANama%20RS%20%3A%0AAlamat%20RS%20%3A%0ATelp%20RS%20%3A%0ANama%20PiC%20yg%20bisa%20dihibungi%20%3A%0ANomor%20WA%20PiC%20%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.%0A',
      },
      {
        title: 'Akses Ambulance 24 Jam',
        desc: '',
        link: 'https://wa.me/+6281294436724?text=Assalamu%27alaykum%20Mas%20Dimas%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20ambulans%20melayani%20pasien%20COVID-19.%0A%0ANama%20jasa%20Ambulans%20%3A%0AAlamat%20%3A%0ATelp%20%3A%0ANama%20contact%20person%20yg%20bisa%20dihibungi%20%3A%0ANomor%20WA%20contact%20person%20%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
    ],
  },
  {
    title: 'Bantu Tenaga',
    icon: '/img/icon/arm.svg',
    data: [
      {
        title: 'Relawan dengan SIM A atau SIM C',
        desc: '',
        link: 'https://wa.me/+628811212099?text=Assalamu%E2%80%99alaykum%20Mas%20Adji%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20non%20tenaga%20kesehatan.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AKeahlian%20%3A%0AMemiliki%20SIM%20A%20aktif%20%3A%20ya%20%2F%20tidak%0AMemiliki%20SIM%20C%20aktif%20%3A%20ya%20%2F%20tidak%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Dokter Spesialis Rehab Medik',
        desc: '',
        link: 'https://wa.me/+628172399370?text=Assalamu%E2%80%99alaykum%20Mas%20Pria%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20Dokter%20Telereab.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AUmum%2Fspesialis%20%3A%0A%0AKira2%20data%20apa%20saja%20yg%20perlu%20saya%20lengkapi%3F%0A%0AJazakumullah%20khayran%20katsiro%20ya%2C%20Mas.',
      },
      {
        title: 'Psikolog untuk Telerehab Psikis',
        desc: '',
        link: 'https://wa.me/+628172399370?text=Assalamu%E2%80%99alaykum%20Mas%20Pria%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20Psikolog%20Telereab.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0A%0AKira2%20data%20apa%20saja%20yg%20perlu%20saya%20lengkapi%3F%0A%0AJazakumullah%20khayran%20katsiro%20ya%2C%20Mas.',
      },
    ],
  },
  {
    title: 'Bantu Barang',
    icon: '/img/icon/present.svg',
    data: [
      {
        title: 'Pinjaman Tabung Oksigen (min 1 bulan)',
        desc: '',
        link: 'https://wa.me/+628811212099?text=Assalamu%E2%80%99alaykum%20Mas%20Adji%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah.%20Kebetulan%20saya%20ada%20bbrp%20stock%20obat%2Fherbal%20yang%20bisa%20saya%20sedekahkan.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AObat%20yang%20mau%20disedekahkan%3A%0AJumlah%20obat%3A%20%0APengantaran%20obat%3A%20mandiri%2Fkurir%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Pinjaman Mobil Niaga (min 1/2 bulan)',
        desc: '',
        link: 'https://wa.me/+6281229999901?text=Assalamu%E2%80%99alaykum%20Mas%20Prima%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20tabung%20oksigen%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJumlah%20tabung%3A%0AVolume%20tabung%3A%20%0ADurasi%20pinjaman%20(min.%201%20bulan)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.%0A',
      },
      {
        title: 'Pinjaman Motor (min 1 bulan)',
        desc: '',
        link: 'https://wa.me/+6281234562515?text=Assalamu%E2%80%99alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20mobil%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJenis%20mobil%20%3A%0ASurat2%20%3A%20lengkap%2Ftidak%20lengkap%0AStatus%20pajak%20%3A%20aktif%2Ftidak%20aktif%0ADurasi%20pinjaman%20(min.%202%20minggu)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Sedekah (hibah) Obat Vitamin / Herbal',
        desc: '',
        link: 'https://wa.me/+6281234562515?text=Assalamu%E2%80%99alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20motor%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJenis%20motor%20%3A%0ASurat2%20%3A%20lengkap%2Ftidak%20lengkap%0AStatus%20pajak%20%3A%20aktif%2Ftidak%20aktif%0ADurasi%20pinjaman%20(min.%201%20bulan)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
    ],
  },
  {
    title: 'Bantu Dana',
    icon: '/img/icon/money.svg',
    data: [
      {
        title: 'Sedekah Seluruh Kegiatan Aksi',
        desc: '',
        link: '',
      },
      {
        title: 'Sedekah Oksigen Konsentrat',
        desc: '',
        link: '',
      },
    ],
  },
]

const domisiliList = [
  { value: 'Jakarta', label: 'Jakarta' },
  { value: 'Bogor', label: 'Bogor' },
  { value: 'Depok', label: 'Depok' },
  { value: 'Tangerang', label: 'Tangerang' },
  { value: 'Tangerang Selatan', label: 'Tangerang Selatan' },
  { value: 'Bekasi', label: 'Bekasi' },
]

export { dataMenu, dataBantu, domisiliList }

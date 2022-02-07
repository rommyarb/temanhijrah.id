const dataMenu = [
  {
    ikon: '/img/icon/catering.svg',
    judul: 'Butuh Catering',
    deskripsi: 'Paket makanan harian yang halal dan sehat',
  },
  {
    ikon: '/img/icon/obat.svg',
    judul: 'Butuh Obat',
    deskripsi: 'Paket vitamin, herbal dan obat sesuai resep dokter',
  },
  {
    ikon: '/img/icon/oksigen.svg',
    judul: 'Butuh Oksigen',
    deskripsi:
      'Program <i>refill</i> / peminjaman tabung O₂ dan O₂ <i>concentrator</i>',
  },
  {
    ikon: '/img/icon/telemedis.svg',
    judul: 'Butuh Telerehab',
    deskripsi:
      'Konsultasi kesehatan &amp; spiritual via online dengan pakarnya',
  },
  {
    ikon: '/img/icon/mobil.svg',
    judul: 'Butuh Ambulans',
    deskripsi: 'Layanan antar jemput khusus pasien COVID-19',
  },
]

const dataBantu = [
  {
    title: 'Bantu Informasi',
    icon: '/img/icon/light.svg',
    data: [
      {
        title: 'Info Jasa Refill O₂',
        desc: 'Hubungi kami kalau kamu tau tempat <i>refill</i> O₂ yang ready stock',
        link: 'https://wa.me/+6281234562515?text=Assalamu%27alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20infoin%20tempat%20isi%20ulang%20tabung%20oksigen.%0A%0ANama%20vendor%20isi%20ulang%20%3A%0ANama%20pemilik%2Fpengelola%20%3A%0AHP%20(WhatsApp)%20pengelola%20%3A%0AAlamat%20vendor%20(jika%20ada%20shareloc%20Google%20Map%20lbh%20baik)%20%3A%0AHarga%20pengisian%20%3A%0AReady%20stock%20(hapus%20salah%20satu)%20%3A%20iya%20%2F%20tidak%20%0ABisa%20isi%20dan%20pick%20up%20di%20hari%20yg%20sama%3A%20iya%2Ftidak%20%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
      {
        title: 'Info Jasa Catering',
        desc: 'Hubungi kami kalau kamu tau catering yg halal, <i>thoyib</i> &amp; hemat',
        link: 'https://wa.me/+6287878762629?text=Assalamu%27alaykum%20Pak%20Sulung%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20vendor%20catering%20untuk%20wilayah%20%3Cisikan%20nama%20kota%20dan%20kecamatan%20lokasi%20catering%3E.%0A%0ANama%20catering%3A%0ANama%20pemilik%2Fpengelola%20%3A%0AHP%20(WhatsApp)%20pengelola%20%3A%0AAlamat%20catering%20%3A%0AKisaran%20harga%20catering%20per%20hari%20%2F%20orang%20(opsional)%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
      // {
      //   title: 'Info Akses Ruang Perawatan RS',
      //   desc: 'Hubungi kami kalau kamu tahu ruang perawatan RS yg kosong',
      //   link: 'https://wa.me/+6281234562505?text=Assalamu%27alaykum%20Mba%20Ira%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20Rumah%20Sakit%20yang%20msh%20ada%20ruangan%20perawatan%20pasien%20COVID-19.%0A%0ANama%20RS%20%3A%0AAlamat%20RS%20%3A%0ATelp%20RS%20%3A%0ANama%20PiC%20yg%20bisa%20dihibungi%20%3A%0ANomor%20WA%20PiC%20%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.%0A',
      // },
      {
        title: 'Info Akses Ruang Perawatan RS',
        desc: 'Hubungi kami kalau kamu tahu ruang perawatan RS yg kosong',
        link: 'https://wa.me/+6281234562505?text=Assalamu%27alaykum%20Mba%20Rara%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20Rumah%20Sakit%20yang%20msh%20ada%20ruangan%20perawatan%20pasien%20COVID-19.%0A%0ANama%20RS%20%3A%0AAlamat%20RS%20%3A%0ATelp%20RS%20%3A%0ANama%20PiC%20yg%20bisa%20dihibungi%20%3A%0ANomor%20WA%20PiC%20%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.%0A',
      },
      {
        title: 'Info Akses Ambulans 24 Jam',
        desc: 'Hubungi kami kalau kamu tau ambulans yang siap bekerjasama',
        link: 'https://wa.me/+6281294436724?text=Assalamu%27alaykum%20Mas%20Dimas%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20dg%20share%20info%20ambulans%20melayani%20pasien%20COVID-19.%0A%0ANama%20jasa%20Ambulans%20%3A%0AAlamat%20%3A%0ATelp%20%3A%0ANama%20contact%20person%20yg%20bisa%20dihibungi%20%3A%0ANomor%20WA%20contact%20person%20%3A%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
      },
    ],
  },
  {
    title: 'Bantu Tenaga',
    icon: '/img/icon/arm.svg',
    data: [
      {
        title: 'Driver',
        desc: 'Khusus untuk kamu yang punya SIM A/C aktif',
        link: 'https://wa.me/+628811212099?text=Assalamu%E2%80%99alaykum%20Mas%20Adji%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20non%20tenaga%20kesehatan.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AKeahlian%20%3A%0AMemiliki%20SIM%20A%20aktif%20%3A%20ya%20%2F%20tidak%0AMemiliki%20SIM%20C%20aktif%20%3A%20ya%20%2F%20tidak%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Dokter Spesialis Rehab Medik',
        desc: 'Khusus untuk kamu yang punya keahlian untuk ngasih telerehab',
        link: 'https://wa.me/+628172399370?text=Assalamu%E2%80%99alaykum%20Mas%20Pria%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20Dokter%20Telereab.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AUmum%2Fspesialis%20%3A%0A%0AKira2%20data%20apa%20saja%20yg%20perlu%20saya%20lengkapi%3F%0A%0AJazakumullah%20khayran%20katsiro%20ya%2C%20Mas.',
      },
      {
        title: 'Psikolog',
        desc: 'Khusus untuk psikolog yang mau nguatin psikis pasien',
        link: 'https://wa.me/+628172399370?text=Assalamu%E2%80%99alaykum%20Mas%20Pria%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20bantu%20Aksi%20Peduli%20Teman%20Hijrah%20sebagai%20relawan%20Psikolog%20Telereab.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0A%0AKira2%20data%20apa%20saja%20yg%20perlu%20saya%20lengkapi%3F%0A%0AJazakumullah%20khayran%20katsiro%20ya%2C%20Mas.',
      },
    ],
  },
  {
    title: 'Bantu Barang',
    icon: '/img/icon/present.svg',
    data: [
      {
        title: 'Pinjaman Tabung O₂',
        desc: 'Dengan masa pinjam minimal 1 bulan.',
        link: 'https://wa.me/+6281229999901?text=Assalamu%E2%80%99alaykum%20Mas%20Prima%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20tabung%20oksigen%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJumlah%20tabung%3A%0AVolume%20tabung%3A%20%0ADurasi%20pinjaman%20(min.%201%20bulan)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.%0A',
      },
      {
        title: 'Pinjaman Mobil',
        desc: 'Untuk delivery tabung O₂ dengan masa pinjam minimal 2 minggu',
        link: 'https://wa.me/+6281234562515?text=Assalamu%E2%80%99alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20mobil%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJenis%20mobil%20%3A%0ASurat2%20%3A%20lengkap%2Ftidak%20lengkap%0AStatus%20pajak%20%3A%20aktif%2Ftidak%20aktif%0ADurasi%20pinjaman%20(min.%202%20minggu)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Pinjaman Motor',
        desc: '​​Untuk delivery tabung O₂ dengan masa pinjam minimal 1 bulan',
        link: 'https://wa.me/+6281234562515?text=Assalamu%E2%80%99alaykum%20Mas%20Aboe%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah%20dengan%20minjemin%20motor%20saya.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AJenis%20motor%20%3A%0ASurat2%20%3A%20lengkap%2Ftidak%20lengkap%0AStatus%20pajak%20%3A%20aktif%2Ftidak%20aktif%0ADurasi%20pinjaman%20(min.%201%20bulan)%3A%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
      {
        title: 'Sedekah (hibah) Obat Vitamin / Herbal',
        desc: 'Lebihan obatmu mungkin masih dibutuhkan banyak pasien lainnya',
        link: 'https://wa.me/+628811212099?text=Assalamu%E2%80%99alaykum%20Mas%20Adji%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20berkontribusi%20pada%20gerakan%20Aksi%20Peduli%20Teman%20Hijrah.%20Kebetulan%20saya%20ada%20bbrp%20stock%20obat%2Fherbal%20yang%20bisa%20saya%20sedekahkan.%20Berikut%20data%20saya%0A%0ANama%20%3A%0AAlamat%20%3A%0AObat%20yang%20mau%20disedekahkan%3A%0AJumlah%20obat%3A%20%0APengantaran%20obat%3A%20mandiri%2Fkurir%20%0A%0AJazakumullah%20khayran%20katsiro.',
      },
    ],
  },
  {
    title: 'Bantu Dana',
    icon: '/img/icon/money.svg',
    data: [
      {
        title: 'Sedekah Untuk Seluruh Kegiatan Aksi',
        desc: 'Sedekah untuk seluruh kegiatan penanganan COVID-19 yg kami upayakan',
        link: 'https://bit.ly/sedekahth',
      },
      {
        title: 'Sedekah Pembelian Oksigen Konsentrat',
        desc: 'Sedekah untuk pembelian O₂ <i>Concentrator</i> (minimal Rp 5.000.000)',
        link: 'https://bit.ly/sedekahth',
      },
    ],
  },
]

const domisiliList = [
  {
    value:
      'https://wa.me/+6282297663193?text=Assalaamu%27alaykum%20Mba%20Tita%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
    label: 'Jakarta',
  },
  {
    value:
      'https://wa.me/+6281288297374?text=Assalamu%27alaykum%20Mas%20Firman%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
    label: 'Bogor',
  },
  {
    value:
      'https://wa.me/+6282297663193?text=Assalamu%27alaykum%20Mba%20Tita%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
    label: 'Depok',
  },
  // {
  //   value:
  //     'https://wa.me/+6281234562505?text=Assalaamu%27alaykum%20Mba%20Ira%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
  //   label: 'Tangerang',
  // },
  {
    value:
      'https://wa.me/+6287888893960?text=Assalaamu%27alaykum+Mba+Rara%2C%0D%0A%0D%0AKenalkan%2C+saya+%3Cisikan+namamu%3E.+Saya+mau+lapor+pasien+COVID-19+yang+mungkin+bisa+dibantu+Aksi+Peduli+Teman+Hijrah.+%0D%0A%0D%0ANama+%3A%0D%0AJenis+kelamin+%3A%0D%0AHP+%28WhatsApp%29+%3A%0D%0AUsia+%3A%0D%0AAlamat+%3A%0D%0AGejala+%3A+ringan+%2F+sedang+%2F+berat+%2F+kritis%0D%0ATest+PCR%2Fantigen+%3A+sudah+%2F+belum%0D%0A%0D%0AKami+berharap+pasien+bisa+mendapatkan+bantuan+dari+Aksi+Peduli+%23Teman+Hijrah+melalui+program+%3Chapus+bantuan+yang+tidak+diperlukan%3E%3A%0D%0A-+catering+makanan+harian%0D%0A-+obat%2Fvitamin%2Fherbal%0D%0A-+isi+ulang+tabung+oksigen%0D%0A-+layanan+tele+konsultasi+rehabilitasi%0D%0A-+layanan+antar+jemput+pasien+%0D%0A%0D%0AJazakumullah+khayran+katsiro.%0D%0A%0D%0AWassalamu%27alaykum',
    label: 'Tangerang',
  },
  // {
  //   value:
  //     'https://wa.me/+6281234562505?text=Assalamu%27alaykum%20Mba%20Ira%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
  //   label: 'Bekasi',
  // },
  {
    value:
      'https://wa.me/+6287888893960?text=Assalaamu%27alaykum+Mba+Rara%2C%0D%0A%0D%0AKenalkan%2C+saya+%3Cisikan+namamu%3E.+Saya+mau+lapor+pasien+COVID-19+yang+mungkin+bisa+dibantu+Aksi+Peduli+Teman+Hijrah.+%0D%0A%0D%0ANama+%3A%0D%0AJenis+kelamin+%3A%0D%0AHP+%28WhatsApp%29+%3A%0D%0AUsia+%3A%0D%0AAlamat+%3A%0D%0AGejala+%3A+ringan+%2F+sedang+%2F+berat+%2F+kritis%0D%0ATest+PCR%2Fantigen+%3A+sudah+%2F+belum%0D%0A%0D%0AKami+berharap+pasien+bisa+mendapatkan+bantuan+dari+Aksi+Peduli+%23Teman+Hijrah+melalui+program+%3Chapus+bantuan+yang+tidak+diperlukan%3E%3A%0D%0A-+catering+makanan+harian%0D%0A-+obat%2Fvitamin%2Fherbal%0D%0A-+isi+ulang+tabung+oksigen%0D%0A-+layanan+tele+konsultasi+rehabilitasi%0D%0A-+layanan+antar+jemput+pasien+%0D%0A%0D%0AJazakumullah+khayran+katsiro.%0D%0A%0D%0AWassalamu%27alaykum',
    label: 'Bekasi',
  },
  {
    value:
      'https://wa.me/+6287888893960?text=Assalamu%27alaykum%20Mba%20Rara%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum',
    label: 'Palu',
  },
  {
    value:
      'https://wa.me/+6281381669966?text=Assalamu%27alaykum%20Mas%20Ade%2C%0A%0AKenalkan%2C%20saya%20%3Cisikan%20namamu%3E.%20Saya%20mau%20lapor%20pasien%20COVID-19%20yang%20mungkin%20bisa%20dibantu%20Aksi%20Peduli%20Teman%20Hijrah.%20%0A%0ANama%20%3A%0AJenis%20kelamin%20%3A%0AHP%20(WhatsApp)%20%3A%0AUsia%20%3A%0AAlamat%20%3A%0AGejala%20%3A%20ringan%20%2F%20sedang%20%2F%20berat%20%2F%20kritis%0ATest%20PCR%2Fantigen%20%3A%20sudah%20%2F%20belum%0A%0AKami%20berharap%20pasien%20bisa%20mendapatkan%20bantuan%20dari%20Aksi%20Peduli%20%23Teman%20Hijrah%20melalui%20program%20%3Chapus%20bantuan%20yang%20tidak%20diperlukan%3E%3A%0A-%20catering%20makanan%20harian%0A-%20obat%2Fvitamin%2Fherbal%0A-%20isi%20ulang%20tabung%20oksigen%0A-%20layanan%20tele%20konsultasi%20rehabilitasi%0A-%20layanan%20antar%20jemput%20pasien%20%0A%0AJazakumullah%20khayran%20katsiro.%0A%0AWassalamu%27alaykum.',
    label: 'Lainnya',
  },
]

const APP_TITLE = 'Aksi Peduli #TemanHijrah'
const APP_DESCRIPTION =
  'Gerakan Aksi Peduli Teman Hijrah yang sedang diuji dengan COVID-19.'

export { dataMenu, dataBantu, domisiliList, APP_TITLE, APP_DESCRIPTION }

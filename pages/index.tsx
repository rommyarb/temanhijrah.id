/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import appColors from '../constants/appColors'
import Image from 'next/image'
import Tombol from '../components/Tombol'
import CardMenu from '../components/CardMenu'
// import styles from '../styles/Home.module.css'

const TITLE = 'Aksi Peduli #TemanHijrah'
const DESCRIPTION =
  'Gerakan Aksi Peduli Teman Hijrah yang sedang diuji dengan COVID-19.'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <div id="section-1" className="mt-1 md:pt-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center">
            <div className="px-4">
              <div className="text-3xl md:text-5xl font-bold mb-5">
                Bersama Aksi Peduli
                <br />
                #TemanHijrah
              </div>
              <div
                style={{ color: appColors.gray3 }}
                className="text-sm mb-8 md:w-10/12 tracking-wide"
              >
                Karena senang susah kita sama-sama untuk teman yang ISOMAN, ada
                program catering, distribusi obat &amp; vitamin gerakan isi
                tabung oksigen, telekonsultasi
              </div>
              <div className="md:flex md:items-center">
                <Tombol
                  label="Butuh dibantu"
                  warna="merah"
                  ikon="/img/icon/hotel.svg"
                />
                <div className="w-5 h-3 md:h-0"></div>
                <Tombol label="Mau membantu" ikon="/img/icon/hospital.svg" />
              </div>
            </div>
            <div className="order-first md:order-last px-20 md:px-0">
              <Image
                src="/img/gambar1.png"
                alt="Hai"
                height="900"
                width="800"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 mx-auto flex flex-col items-center">
          <div className="md:flex mt-7 md:mt-0 items-center font-medium text-2xl md:text-3xl text-center tracking-wide">
            <div>Teman Hijrah yang</div>
            <span className="hidden md:inline-block">&nbsp;</span>
            <div style={{ color: appColors.redPrimary }}>butuh dibantu</div>
          </div>
          <div
            className="text-center max-w-2xl mt-5 tracking-wide text-sm px-4"
            style={{ color: appColors.gray2 }}
          >
            InsyaAllah kami akan siap membantu teman-teman yang lagi ISOMAN dan
            juga membutuhkan bantuan selama PPKM sekitaran{' '}
            <span className="font-medium">JABODETABEK</span>
          </div>
          <div className="grid grid-flow-col grid-cols-2 md:grid-cols-5 grid-rows-3 sm:grid-rows-2 md:grid-rows-1 gap-3 md:gap-6 mt-5">
            <CardMenu
              ikon="/img/icon/restaurant.svg"
              judul="Butuh Catering"
              deskripsi="Kami memberikan makanan siap sanap dengan sayur &amp; buah"
            />
            <CardMenu
              ikon="/img/icon/healing.svg"
              judul="Butuh Obat"
              deskripsi="Kami distribusikan obat, vitamin, dan juga herbal"
            />
            <CardMenu
              ikon="/img/icon/bubble_chart.svg"
              judul="Butuh Oksigen"
              deskripsi="Kami pinjamkan tabung oksigen untuk yang saturasinya <90"
            />
            <CardMenu
              ikon="/img/icon/textsms.svg"
              judul="Butuh Telemedis"
              deskripsi="Melayani konsultasi medis &amp; rehabilitasi"
            />
            <CardMenu
              ikon="/img/icon/airport_shuttle.svg"
              judul="Butuh Antar Jemput"
              deskripsi="Menyediakan untuk operasional jalan"
            />
          </div>
          <div
            style={{ borderRadius: 10, backgroundColor: appColors.redLight }}
            className="p-4 md:flex md:items-center mt-6"
          >
            <div style={{ color: appColors.gray2 }} className="tracking-wide">
              Pilih Domisili Kamu
            </div>
            <div
              className="flex items-center border bg-white p-2 mx-4 w-36 justify-between"
              style={{ borderRadius: 4 }}
            >
              <select className="text-xs font-bold tracking-wide appearance-none">
                <option>Jakarta</option>
              </select>
              <img
                src="/img/icon/chevron_down.svg"
                alt=""
                height="14"
                width="14"
              />
            </div>
            <Tombol label="Hubungi" warna="merah" size="sm" />
          </div>
        </div>
      </Container>
    </div>
  )
}

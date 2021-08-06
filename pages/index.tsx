import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import appColors from '../constants/appColors'
import Image from 'next/image'
import Tombol from '../components/Tombol'
import KartuMenu from '../components/KartuMenu';
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
      <main>
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
                  Karena senang susah kita sama-sama untuk teman yang ISOMAN,
                  ada program catering, distribusi obat &amp; vitamin gerakan
                  isi tabung oksigen, telekonsultasi
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
            <div className="font-medium md:text-3xl text-center tracking-wide">
              Teman Hijrah yang{' '}
              <span style={{ color: appColors.redPrimary }}>butuh dibantu</span>
            </div>
            <div
              className="text-center max-w-2xl mt-5 tracking-wide text-sm"
              style={{ color: appColors.gray2 }}
            >
              InsyaAllah kami akan siap membantu teman-teman yang lagi ISOMAN
              dan juga membutuhkan bantuan selama PPKM sekitaran{' '}
              <span className="font-medium">JABODETABEK</span>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

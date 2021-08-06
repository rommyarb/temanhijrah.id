import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import Tombol from '../components/Tombol'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IconHotel from '../public/img/hotel.svg'

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
          <div id="section-1">
            <div className="text-6xl font-bold">
              Bersama Aksi Peduli
              <br />
              #TemanHijrah

            </div>
          </div>
        </Container>
        <Tombol label="Butuh Dibantu" warna="merah" ikon="/img/hotel.svg"/>
      </main>
    </div>
  )
}

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import { useWindowWidth } from '@react-hook/window-size'
import Select from 'react-select'
import Image from 'next/image'
//
import Container from '../components/Container'
import Header from '../components/Header'
import appColors from '../constants/appColors'
import Tombol from '../components/Tombol'
import Accordion from '../components/Accordion'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import KartuMenu from '../components/KartuMenu'
// import styles from '../styles/Home.module.css'
import dataKartuMenu from '../constants/dataMenu'
import Footer from '../components/Footer'

const TITLE = 'Aksi Peduli #TemanHijrah'
const DESCRIPTION =
  'Gerakan Aksi Peduli Teman Hijrah yang sedang diuji dengan COVID-19.'

export default function Home() {
  const windowWidth = useWindowWidth()
  const isMobile = React.useMemo(() => windowWidth < 640, [windowWidth])
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <div id="section-1" className="mt-1 sm:pt-10">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center">
            <div className="px-4">
              <div className="text-3xl sm:text-5xl font-bold mb-5">
                Bersama Aksi Peduli
                <br />
                #TemanHijrah
              </div>
              <div
                style={{ color: appColors.gray3 }}
                className="text-sm mb-8 sm:w-10/12 tracking-wide"
              >
                Karena senang susah kita sama-sama untuk teman yang ISOMAN, ada
                program catering, distribusi obat &amp; vitamin gerakan isi
                tabung oksigen, telekonsultasi
              </div>
              <div className="sm:flex sm:items-center">
                <Tombol
                  label="Butuh dibantu"
                  warna="merah"
                  ikon="/img/icon/hotel.svg"
                />
                <div className="w-5 h-3 sm:h-0"></div>
                <Tombol label="Mau membantu" ikon="/img/icon/hospital.svg" />
              </div>
            </div>
            <div className="order-first sm:order-last px-20 sm:px-0">
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
          <div className="sm:flex mt-7 sm:mt-0 items-center font-medium text-2xl sm:text-3xl text-center tracking-wide">
            <div>Teman Hijrah yang</div>
            <span className="hidden sm:inline-block">&nbsp;</span>
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
          <div className="max-w-4xl grid grid-flow-col grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 gap-2 sm:gap-4 mt-6">
            {dataKartuMenu?.map((val, index) => (
              <KartuMenu
                key={`kartuMenu-${index}`}
                ikon={val.ikon}
                judul={val.judul}
                deskipsi={val.deskripsi}
              />
            ))}
          </div>
          <div className="w-full md:w-auto px-4 md:px-0">
            <div
              style={{ borderRadius: 10, backgroundColor: appColors.redLight }}
              className="p-6 md:p-4 w-full md:w-auto md:flex md:items-center mt-6"
            >
              <div
                style={{ color: appColors.gray2 }}
                className="tracking-wide mb-5 md:mb-0"
              >
                Pilih Domisili Kamu
              </div>
              <div className="md:mx-4 w-full md:w-36 mb-5 md:mb-0">
                <Select
                  instanceId="select-domisili"
                  options={[{ value: 'Jakarta', label: 'Jakarta' }]}
                  value={{ value: 'Jakarta', label: 'Jakarta' }}
                  noOptionsMessage={() => 'Tidak ditemukan.'}
                />
              </div>
              <div className="hidden md:block">
                <Tombol label="Hubungi" warna="merah" size="sm" />
              </div>
              <div className="md:hidden block">
                <Tombol label="Hubungi" warna="merah" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl w-full px-4 mt-28">
            <div className="sm:max-w-lg sm:flex mt-7 sm:mt-0 items-center font-medium text-2xl sm:text-3xl text-left tracking-wide">
              <div>
                Buat Teman Hijrah yang{' '}
                <span style={{ color: appColors.redPrimary }}>
                  Mau Membantu
                </span>{' '}
                boleh ikutan 😊
              </div>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center" >
              <Accordion icon="/img/icon/light.svg" title="Bantu Informasi" >
                <div
                  style={{ borderRadius: 10, backgroundColor: appColors.redLight }}
                  className="p-6 md:p-4 w-full md:w-auto flex items-center justify-between"
                >
                  <div
                    style={{ color: appColors.gray3 }}
                    className="text-sm sm:w-10/12 tracking-wide"
                  >
                    Info Pengisian Oxygen Ready Stock
                  </div>
                  <div className="p-1 w-40 flex justify-center rounded-full cursor-pointer border border-red-400" >
                    Hubungi
                  </div>
                </div>
              </Accordion>
            </div>
            <div
              className="mt-4 tracking-wide text-sm"
              style={{ color: appColors.gray2 }}
            >
              Silahkan pilih jenis bantuannya di bawah ini
            </div>

            <div className="bg-pink-200 w-full py-10 text-center mt-4">
              🚧 Under Development
            </div>
          </div>
        </div>

        <div className="max-w-4xl mt-20 sm:mt-32 mb-14 sm:mb-20 sm:flex sm:items-center mx-auto">
          <div className="px-4 sm:px-0 sm:pl-4 sm:mr-16">
            <Image
              src="/img/tanto7.png"
              height={!isMobile ? 400 : 200}
              width={!isMobile ? 260 : 130}
              alt=""
              objectFit="contain"
            />
          </div>
          <div className="px-4 md:px-0 md:ml-4">
            <div className="sm:font-semibold font-medium text-2xl sm:text-4xl">
              InsyaAllah laporan program kami akan selalu update
            </div>
            <div className="mt-6">
              <Tombol
                notFullInMobile={true}
                label="Lihat Laporan"
                warna="merah"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

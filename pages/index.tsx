/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Select from 'react-select'
import Image from 'next/image'
import { useWindowWidth } from '@react-hook/window-size'
//
import Container from '../components/Container'
import Header from '../components/Header'
import appColors from '../constants/appColors'
import Tombol from '../components/Tombol'
import Accordion from '../components/Accordion'
// import Image from 'next/image'
import KartuMenu from '../components/KartuMenu'
// import styles from '../styles/Home.module.css'
import {
  dataMenu,
  dataBantu,
  domisiliList,
  APP_TITLE,
  APP_DESCRIPTION,
} from '../constants/datas'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { SelectValue } from '../types/selectValue'

export default function Home() {
  const programRef = React.useRef<HTMLDivElement>(null)
  const mauDibantuRef = React.useRef<HTMLDivElement>(null)
  const mauMembantuRef = React.useRef<HTMLDivElement>(null)
  const laporanRef = React.useRef<HTMLDivElement>(null)

  const windowWidth = useWindowWidth()
  const isMobile = React.useMemo(() => windowWidth < 640, [windowWidth])
  const [isModal, setModal] = React.useState(false)
  const [domisili, setDomisili] = React.useState<SelectValue>(domisiliList[0])

  const _handleClickDetail = () => {
    setModal(true)
  }

  const _handleCloseModal = () => {
    setModal(false)
  }

  const menuList = [
    {
      label: 'Program Kami',
      onClick: () => {
        programRef.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      label: 'Butuh dibantu',
      onClick: () => {
        mauDibantuRef.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      label: 'Mau Membantu',
      onClick: () => {
        mauMembantuRef.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
    {
      label: 'Laporan',
      onClick: () => {
        laporanRef.current?.scrollIntoView({ behavior: 'smooth' })
      },
    },
  ]

  function onHubungi() {
    window.open(domisili?.value, '_blank')
  }

  return (
    <div>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal isOpen={isModal} closeModal={_handleCloseModal} />
      <Container>
        <Header menuList={menuList} />
        <div className="mt-1 sm:pt-10 section-bg">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center">
            <div className="px-4">
              <div className="text-3xl sm:text-5xl font-bold mb-5">
                Senang Susah Kita Sama-Sama
              </div>
              <div
                style={{ color: appColors.gray3 }}
                className="text-sm mb-8 sm:w-10/12 tracking-wide"
              >
                Aksi ini didedikasikan untuk menjadi jembatan antara kamu yang
                sedang ISOMAN (isolasi mandiri) dan #TemanHijrahmu yang mau
                membantu.
              </div>
              <div className="sm:flex sm:items-center">
                <Tombol
                  label="Butuh dibantu"
                  warna="merah"
                  ikon="/img/icon/hotel.svg"
                  onClick={() => {
                    // router.push('/butuh-dibantu')
                    mauDibantuRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                />
                <div className="w-5 h-3 sm:h-0"></div>
                <Tombol
                  label="Mau membantu"
                  ikon="/img/icon/hospital.svg"
                  onClick={() => {
                    mauMembantuRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                />
              </div>
            </div>
            <div className="order-first sm:order-last px-20 sm:px-0">
              <Image
                src="/img/gambar1.png"
                alt="Hai"
                width={888}
                height={1034}
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div
          ref={programRef}
          className="mx-auto flex flex-col items-center pt-8 sm:pt-20"
          style={{
            backgroundImage: 'url(/img/wave_bg.svg)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* PROGRAM */}
          <div className="sm:flex mt-7 sm:mt-0 items-center font-medium text-2xl sm:text-3xl text-center tracking-wide">
            <div>
              Program{' '}
              <span style={{ color: appColors.redPrimary }}>Al-Ikhlas</span>
            </div>
          </div>
          <div
            className="text-center max-w-4xl mt-5 tracking-wide text-sm px-4"
            style={{ color: appColors.gray2 }}
          >
            Ini adalah non-profit movement, dimana seluruh tim inti kami tidak
            mencari keuntungan apapun dalam menyediakan kebutuhan kalian yang
            sedang ISOMAN. Sedangkan untuk biaya operasional, kami berusaha
            menekan seminimal dan seefisien mungkin. Dan dari survey kami, 5 hal
            ini adalah apa yang paling dibutuhkan pasien saat ISOMAN.
          </div>
          <div className="max-w-4xl grid grid-flow-col grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 gap-2 sm:gap-4 mt-6">
            {dataMenu?.map((val, index) => (
              <KartuMenu
                key={`kartuMenu-${index}`}
                ikon={val.ikon}
                judul={val.judul}
                deskipsi={val.deskripsi}
                toggleModal={_handleClickDetail}
              />
            ))}
          </div>
          {/* end of - PROGRAM */}

          {/* BUTUH DIBANTU */}
          <div
            ref={mauDibantuRef}
            className=" w-full px-4 mt-16 sm:mt-36 py-12"
            style={{ backgroundColor: appColors.redLightBg }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="sm:flex items-center font-medium text-2xl sm:text-4xl text-left tracking-wide">
                <div className="text-center w-full">
                  Buat kalian yang{' '}
                  <span style={{ color: appColors.redPrimary }}>
                    Butuh Dibantu
                  </span>
                </div>
              </div>
              <div
                className="mt-4 sm:mt-6 tracking-wide text-sm text-center"
                style={{ color: appColors.gray2 }}
              >
                Silahkan pilih kota tempat tinggalmu, untuk kami hubungkan
                dengan admin Aksi Peduli #TemanHijrah.
              </div>
              <div
                style={{
                  borderRadius: 10,
                }}
                className="py-6 px-4 md:px-28 md:py-8 w-full md:items-center mt-6 bg-white shadow-lg border"
              >
                <div
                  style={{ color: appColors.gray2 }}
                  className="tracking-wide mb-3 md:mb-0"
                >
                  Pilih Domisili Kamu
                </div>
                <div className="md:flex w-full sm:mt-2">
                  <div className="w-full md:mr-4 mb-5 md:mb-0">
                    <Select
                      components={{ IndicatorSeparator: () => null }}
                      instanceId="select-domisili"
                      options={domisiliList}
                      value={domisili}
                      onChange={(value) => setDomisili(value)}
                      noOptionsMessage={() => 'Tidak ditemukan.'}
                    />
                  </div>
                  <div className="hidden md:flex md:items-center">
                    <Tombol
                      onClick={onHubungi}
                      label="Hubungi"
                      warna="merah"
                      size="sm"
                    />
                  </div>
                  <div className="md:hidden block">
                    <Tombol onClick={onHubungi} label="Hubungi" warna="merah" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of - BUTUH DIBANTU */}

          <div
            ref={mauMembantuRef}
            className="w-full"
            style={{
              backgroundImage: 'url(/img/bubble1.svg)',
              // backgroundSize: isMobile ? '60%' : '45%',
              // backgroundPositionY: isMobile ? '20px' : '-95px',
              backgroundSize: '45%',
              backgroundPositionY: '-95px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* MAU MEMBANTU */}
            <div className="mx-auto max-w-4xl w-full px-4 mt-16 sm:mt-24">
              <div className="sm:max-w-2xl sm:flex items-center font-medium text-2xl sm:text-4xl text-left tracking-wide">
                <div>
                  Buat kalian yang{' '}
                  <span style={{ color: appColors.redPrimary }}>
                    Mau Membantu 😊
                  </span>
                </div>
              </div>
              <div
                className="mt-4 sm:mt-6 tracking-wide text-sm"
                style={{ color: appColors.gray2 }}
              >
                Silahkan pilih jenis bantuan yang ingin kalian berikan
              </div>
              {dataBantu.map((d, i) => (
                <div className="mt-4 sm:mt-6" key={`data-bantu-${i}`}>
                  <Accordion icon={d.icon} title={d.title} isMobile={isMobile}>
                    {d.data.map((item, j) => (
                      <div
                        key={`bantu-informasi-${j}`}
                        style={{ backgroundColor: appColors.redLight }}
                        className="p-2 sm:px-9 w-full rounded-md sm:rounded-none md:w-auto sm:flex items-center justify-between mt-4 sm:mt-2.5"
                      >
                        <div>
                          <div
                            style={{ color: appColors.gray2 }}
                            className="font-semibold text-sm sm:text-xl tracking-wide pr-2"
                          >
                            {item.title}
                          </div>
                          <div
                            style={{ color: appColors.gray2 }}
                            className="font-normal text-xs sm:text-base tracking-wide pr-2 mt-2"
                          >
                            {item.desc}
                          </div>
                        </div>
                        <div
                          onClick={() => window.open(item.link, '_blank')}
                          style={{
                            borderColor: appColors.redPrimary,
                            color: appColors.redPrimary,
                          }}
                          className="mt-4 sm:mt-0 py-2 px-5 sm:px-12 min-w-max flex justify-center rounded-full cursor-pointer border text-sm"
                        >
                          {d.title === 'Bantu Dana' ? 'Isi Form' : 'Hubungi'}
                        </div>
                      </div>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
            {/* end of - MAU MEMBANTU */}

            {/* LAPORAN */}
            <div
              ref={laporanRef}
              className="max-w-4xl mt-20 sm:mt-32 mb-14 sm:mb-20 sm:flex sm:items-center mx-auto"
            >
              <div className="hidden sm:block sm:px-0 sm:pl-4 sm:mr-16">
                <Image
                  src="/img/tanto7.png"
                  height="400"
                  width="260"
                  alt=""
                  objectFit="contain"
                />
              </div>
              <div className="block sm:hidden px-4">
                <Image
                  src="/img/tanto7.png"
                  height="200"
                  width="130"
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
            {/* end of - LAPORAN */}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

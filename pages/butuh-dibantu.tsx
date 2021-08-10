import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select'
import Link from 'next/link'
//
import Container from '../components/Container'
import Header from '../components/Header'
import Tombol from '../components/Tombol'
import { domisiliList } from '../constants/datas'

const TITLE = 'Butuh Dibantu'
const DESCRIPTION = 'Pilih domisili kamu dulu ya'

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
        <Link href="/" passHref>
          <div className="flex items-center max-w-4xl mx-auto mt-7 px-4 cursor-pointer">
            <Image
              src="/img/icon/arrow_back.svg"
              alt="Back"
              objectFit="contain"
              height="14"
              width="14"
            />
            &nbsp;
            <div className="text-xs md:text-sm underline">
              Kembali ke halaman utama
            </div>
          </div>
        </Link>

        <div className="max-w-4xl mx-auto relative mt-36 md:mt-20 px-4 md:px-0">
          <div
            className="absolute"
            style={{
              top: '-33px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src="/img/tanto3.png"
              height="110"
              width="110"
              alt=""
              objectFit="contain"
            />
          </div>
          <div className="bg-white rounded-md shadow-lg border max-w-lg mx-auto p-4 sm:p-6">
            <div className="text-center font-medium mb-4">
              Pilih domisili kamu dulu ya
            </div>
            <div className="text-sm mb-2">
              Kota Domisili <span className="bintang">*</span>
            </div>
            <Select
              components={{ IndicatorSeparator: () => null }}
              instanceId="select-kota-domisili"
              className="mb-5"
              options={domisiliList}
            />
            <div className="text-sm mb-2">
              Jenis Bantuan <span className="bintang">*</span>
            </div>
            <Select
              components={{ IndicatorSeparator: () => null }}
              instanceId="select-jenis-bantuan"
              className="mb-5"
            />
            <Tombol full={true} label="Hubungi Sekarang" warna="merah" />
          </div>
        </div>
      </Container>
    </div>
  )
}

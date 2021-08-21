import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
//
import Container from '../components/Container'
import Header from '../components/Header'
import { APP_DESCRIPTION, APP_TITLE } from '../constants/datas'

export default function Laporan() {
  const router = useRouter()

  const menuList = React.useMemo(
    () => [
      {
        label: 'Program Kami',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Butuh dibantu',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Mau Membantu',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Laporan',
        onClick: () => {
          router.push('/')
        },
      },
    ],
    [router]
  )

  return (
    <div>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header menuList={menuList} />
      </Container>
    </div>
  )
}

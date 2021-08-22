import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
//
import Container from '../components/Container'
import Header from '../components/Header'
import { APP_DESCRIPTION, APP_TITLE } from '../constants/datas'
import dimens from '../constants/dimens'

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
          router.push('/laporan')
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
        <div>
          <div
            className="mt-1 iframe-div"
            style={{ top: dimens.HEADER_HEIGHT }}
          >
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeOY2i1orxT4AAWUycl57jLrgjtTmGD-aQaE2xDOpLT0bfCdarU0DokAb8lqplmACxBTykzGnpkofs/pubhtml?widget=true&amp;headers=false"></iframe>
          </div>
        </div>
      </Container>
    </div>
  )
}

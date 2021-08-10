/* eslint-disable @next/next/no-page-custom-font */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { APP_DESCRIPTION, APP_TITLE } from '../constants/datas'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content={APP_TITLE} />
          <meta property="og:description" content={APP_DESCRIPTION} />
          <meta
            property="og:image"
            content="https://temanhijrah.id/_next/image?url=%2Fimg%2Fgambar1.png&w=1920&q=75"
          />
          <meta property="og:url" content="https://temanhijrah.id" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

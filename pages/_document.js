import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:image" content="https://user-images.githubusercontent.com/16388408/151682517-6c0d89eb-80e6-4eeb-a6b0-6d584cdca5a3.png"/>
          <meta property="og:title" content="Markkop's NFT Marketplace"/>
          <meta property="og:description" content="A Fullstack DApp built with Solidity, Hardhat and NextJS"/>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖼️</text></svg>"/>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

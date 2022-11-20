import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <link rel="shortcut icon" href="/code_fav.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,700;1,300&display=swap" rel="stylesheet" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <link rel="shortcut icon" href="/code_fav.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,700;1,300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/panda-syntax-light.min.css" integrity="sha512-Udpi69KMrn9fan7G09h1x6iaIGNR8buD8v2ocemNb/nRuXYQcaf0sW+oW2KwN+w5exVgUJIg1RLDzESq1YAIZA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <Head />
      <body>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js" integrity="sha512-bgHRAiTjGrzHzLyKOnpFvaEpGzJet3z4tZnXGjpsCcqOnAH6VGUx9frc5bcIhKTVLEiCO6vEhNAgx5jtLUYrfA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script >hljs.highlightAll()</script>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
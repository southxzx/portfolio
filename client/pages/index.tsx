import Button from '@Components/button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>southxzx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.leftMain} ${styles.subMain}`}>
          <h2 className={styles.bigTitle}>
            Hi there!
          </h2>
          <p className={styles.smallTitle}>Such an idiot place but I'm glad that you're here.</p>
          <Button>
            Get To Know Me
          </Button>
        </div>
        <div className={`${styles.rightMain} ${styles.subMain}`}>
          <div className={styles.rightMainBg}>
          </div>
          <div className={styles.rightMainImg}><Image src={"/images/nam_transparent_purple.png"} width={550} height={650} objectFit="contain" />
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home

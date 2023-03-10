import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.header}>MDIA 2109 — Week 8 — In Class Examples</h1>
      <div className={styles.topRow}>
        <Link className={styles.link} href="/useEffectOne">UseEffectOne</Link>
        <Link className={styles.link} href="/useEffectTwo">UseEffectTwo</Link>
      </div>
      <div className={styles.bottomRow}>
        <Link className={styles.link} href="/useEffectThree">UseEffectThree</Link>
        <Link className={styles.link} href="/carouselPage">Carousel Page</Link>
      </div>
      </main>
      </>
  )
}

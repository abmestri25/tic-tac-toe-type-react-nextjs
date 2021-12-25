import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Board from '../Layout/Board'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>

      <main className={styles.main}>
        <Board />
      </main>


    </div>
  )
}

export default Home

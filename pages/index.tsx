import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import NavBar from '../Components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
    </div>
  )
}

export default Home

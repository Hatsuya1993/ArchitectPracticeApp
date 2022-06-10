import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Banner from '../Components/Banner'
import NavBar from '../Components/NavBar'
import Projects from '../Components/Projects'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
      <Projects />
      <About />
    </div>
  )
}

export default Home

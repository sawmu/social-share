import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"></div> */}
      <Head>
        <title>Social Share</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      < Sidebar/>

      < Feed/>

      {/* Widgets */}
    </main>
    </div>
  )
}

export default Home

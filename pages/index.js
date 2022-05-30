import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NerdSquad IT Solutions (OPC) Pvt. Ltd.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thanks For visitng NerdSqaud IT Solutions" />
        <p className="IT Services">
          Contact: Sushil Rawat
          Mob.    9871642404
          
          
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NerdSquad IT Solutions (OPC) Pvt. Ltd.</title>
        <link rel="icon" href="/oublic/logo.ico" />
      </Head>

      <main>
        <Header title="Sushil Rawat Mob.9871642404 Email - eng.sushilrawat@gmail.com"/>
        <p className="IT Services">
          Thanks For visitng NerdSqaud IT Solutions</code>
            
        </p>
      </main>

      <Footer />
    </div>
  )
}

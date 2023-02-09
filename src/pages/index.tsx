import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ignews</title>
      </Head>
      <main>
        <section>
          <span>hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>

            <p>
              Get acecess to al the publications<br/>
              <span>for $9.90 moth</span>
            </p>
        </section>
        <img/>
        <SubscribeButton/>
      </main>
    </>
  )
}

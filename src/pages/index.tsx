import {GetServerSideProps} from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../Services/stripe'
import styles from './home.module.scss'

interface Product{
  product:{
    priceId: string,
    amout: number
  }
}

export default function Home({product}: Product) {

  return (
    <>
      <Head>
        <title>Inicio | ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>

            <p>
              Get acecess to al the publications<br/>
              <span>for {product.amout} moth</span>
            </p>
        <SubscribeButton stripe={55}/>
        </section>
      </main>
    </>
  )
  }

  export const getServerSideProps: GetServerSideProps = async ()=>{

    const price = await stripe.prices.retrieve('price_1MZv8nCHEb7cRJQ3cAMPcMZi',{
      expand:['product']
    })

    if(price.unit_amount){
      const product = {
        priceId: price.id,
        amout: new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount/100)
      }
      return{
        props:{
          product
        }
      }
    }
    return{props:{}}
    
  }

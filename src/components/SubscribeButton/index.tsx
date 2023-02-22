
import { api } from '@/src/Services/api'
import { getStripeJS } from '@/src/Services/stripe-js'
import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonPros {
    priceId: number
}

export function SubscribeButton({ priceId }: SubscribeButtonPros) {

    const {data: session} = useSession()
    async function hanndleSubscrible(){
        if(!session){
            signIn('github')
            return;
        }

        try{
            const response = await api.post('/subscribe')
            const {sessionId} = response.data;

            const stripe = await getStripeJS()

            await stripe?.redirectToCheckout({sessionId})
        }catch(err){
            alert(err)
            console.log(err)
        }
    }
    return (
        <button
        type="button"
        className={styles.subscribeButton}
        onClick={hanndleSubscrible}
        >
            Subcribe now
        </button>
    )
}
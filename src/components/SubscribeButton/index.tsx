import styles from './styles.module.scss'

interface SubscribeButtonPros{
    stripe:{
        periceId: number
    }
}

export function SubscribeButton({stripe}: SubscribeButtonPros) {
    console.log(stripe)
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subcribe now
        </button>
    )
}
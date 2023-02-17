import { SignInButton } from '../SignInButton'
import style from './style.module.scss'

export function Header(){
    return (
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <h1>Next.JS</h1>
                <nav>
                    <a className={style.active}>Home</a>
                    <a>Post</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}
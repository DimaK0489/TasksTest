import style from './startPage.module.css'

export const StartPage = () => {
    return (
        <>
            <div className={style.page}>
                <button className={style.button__link}>Start Page</button>
                <button className={style.button__link}>Get User</button>
            </div>
            <div className={style.screensaver} >
                <img src={'https://www.look.com.ua/large/201209/39310.jpg'} alt={'screensaver'}/>
            </div>
        </>
    )
}
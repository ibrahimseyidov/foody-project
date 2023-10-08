import React from 'react'
import hamburgerImg from '../../../assets/images/foodImages/hamburgerImg.png'
import styles from '../HomeSection1/homesection1.module.css'
import Image from 'next/image'

const HomeSection1 = () => {
    return (
        <>
            <section className='mb-20'>
                <div className={styles['home-client-bg']}>
                    <div className={styles['hamburger-left']}>
                        <h2>Our Food site makes it easy to find local food</h2>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <div className={styles['hamburger-btn']}>
                            <button>Register</button>
                            <button>Order now</button>
                        </div>
                    </div>
                    <div>
                        <div className={styles['hamburger-bg']}></div>
                        <Image src={hamburgerImg} className={styles['hamburger-image']} alt='hamburger-image' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection1
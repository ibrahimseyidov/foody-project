import Image from 'next/image'

import PizzaImg from '../../../assets/images/foodImages/pizzaImg.svg'
import hamburgerImg from '../../../assets/images/foodImages/hamburgerImg.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './homesection7.module.css'
import React, { useEffect } from 'react'

const HomeSection7 = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <section className='relative' data-aos="fade-down">

                <div className={styles['section7-bg']}>
                    <div>
                        <Image src={PizzaImg} loading='lazy' alt='pizza' />
                    </div>
                    <div className={styles['section7-middle']}>
                        <h3>
                            Discover Restaurants Near From you
                        </h3>
                        <button>Explore now</button>
                    </div>
                    <div>
                        <Image src={hamburgerImg} loading='lazy' alt='hamburger' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomeSection7
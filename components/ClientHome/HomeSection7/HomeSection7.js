import Image from 'next/image'

import PizzaImg from '../../../assets/images/foodImages/PizzaImg.svg'
import hamburgerImg from '../../../assets/images/foodImages/hamburgerImg.svg'

import styles from './homesection7.module.css'
import React from 'react'

const HomeSection7 = () => {
    return (
        <>
            <section className='relative'>

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
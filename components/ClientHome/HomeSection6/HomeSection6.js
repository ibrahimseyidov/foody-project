import React, { useEffect } from 'react'
import Image from 'next/image'
import foodHam from '../../../assets/images/foodImages/foodHam.svg'
import foodPizza from '../../../assets/images/foodImages/foodPizza.svg'
import foodTwister from '../../../assets/images/foodImages/foodTwister.svg'
import styles from '../HomeSection2/homesection2.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection6 = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <section className='mb-72 h-[1000px]' data-aos="fade-up"
                data-aos-duration="3000">
                <div>
                    <div className='flex items-center flex-col mb-10'>
                        <h2 className={styles.features}>Our Popular Update New Foods</h2>
                        <p className={styles['home-para']}>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className={styles['home-card']}>
                            <Image src={foodHam} alt='homeImage' />
                            <h3>Dubble Chees</h3>
                            <p>Lorem ipsum is placeholder commonly used in the graphic</p>
                        </div>
                        <div className={styles['home-card']}>
                            <Image src={foodPizza} alt='homeImage' />
                            <h3>Margarita</h3>
                            <p>Lorem ipsum is placeholder commonly used in the graphic</p>
                        </div>
                        <div className={styles['home-card']}>
                            <Image src={foodTwister} alt='homeImage' />
                            <h3>Twister Menu</h3>
                            <p>Lorem ipsum is placeholder commonly used in the graphic</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection6
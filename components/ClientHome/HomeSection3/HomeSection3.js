'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import foodImg1 from '../../../assets/images/foodImages/foodImg1.svg'
import styles from './homesection3.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection3 = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <section className='mb-36' data-aos="fade-left">
                <div className='flex items-start w-5/6 m-auto'>
                    <div className='w-3/4'>
                        <h3 className={styles.menu}>Menu That Always Make You Fall In Love</h3>
                            <p className={styles['menu-para']}>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                    </div>
                    <div className='ml-20'>
                        <Image src={foodImg1} alt='food-image' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection3
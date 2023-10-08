import React from 'react'
import Image from 'next/image'
import homeImg1 from '../../../assets/images/homeImg1.svg'
import homeImg2 from '../../../assets/images/homeImg2.svg'
import homeImg3 from '../../../assets/images/homeImg3.svg'
import styles from './homesection2.module.css'

const HomeSection1 = () => {
  return (
    <>
      <section className='mb-72'>
        <div>
          <div className='flex items-center flex-col mb-10'>
            <h2 className={styles.features}>Features</h2>
            <p className={styles['home-para']}>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
          <div className='flex justify-center'>
            <div className={styles['home-card']}>
              <Image src={homeImg1} alt='homeImage' />
              <h3>Discount Boucher</h3>
              <p>Lorem ipsum is placeholder commonly used in the graphic</p>
            </div>
            <div  className={styles['home-card']}>
              <Image src={homeImg2} alt='homeImage' />
              <h3>Fresh healthy Food</h3>
              <p>Lorem ipsum is placeholder commonly used in the graphic</p>
            </div>
            <div  className={styles['home-card']}>
              <Image src={homeImg3} alt='homeImage' />
              <h3>Fast Home Delivery</h3>
              <p>Lorem ipsum is placeholder commonly used in the graphic</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection1
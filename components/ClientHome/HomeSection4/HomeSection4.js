import React from 'react'
import styles from '../HomeSection3/homesection3.module.css'
import Image from 'next/image'
import foodImg2 from '../../../assets/images/foodImages/foodImg2.svg'

const HomeSection4 = () => {
    return (
        <>
            <section className='mb-32'>
                <div className='flex items-start justify-between w-4/5 m-auto'>
                    <div className='mr-32'>
                        <Image src={foodImg2} alt='food-image' />
                    </div>
                    <div className='w-5/6'>
                        <h3 className={styles.menu}>Yummy Always Papa John’s Pizza.Agree?</h3>
                        <p className={styles['menu-para']}>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection4
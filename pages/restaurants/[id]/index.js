import Image from 'next/image'
import React from 'react'
import ClientContainer from '../../../components/common/ClientContainer/ClientContainer'
import papaJohns from '../../../assets/images/papaJohns.png'
import styles from './restaurantdetail.module.css'
import RestaurantDetailLeft from '../../../components/Restaurants/RestaurantDetail/RestaurantDetailLeft/RestaurantDetailLeft'
import RestaurantDetailRight from '../../../components/Restaurants/RestaurantDetail/RestaurantDetailRight/RestaurantDetailRight'

const index = () => {
    return (
        <>
            <ClientContainer>
                <section className='mb-56'>
                    <div className='relative mb-10'>
                        <Image src={papaJohns} alt='papa-johns' />
                        <div className='absolute bottom-0 flex justify-between items-center w-full'>
                            <div className={styles['restaurant-title']}>
                                <h2>Papa John's Pizza Restaurant</h2>
                                <span>19 Nizami street, Sabail, Baku</span>
                            </div>
                            <div className='flex items-center'>
                                <div className={styles['restaurant-item']}>
                                    <h3>Cuisine</h3>
                                    <span>pizza, drink, hotdog, sandwich, roll</span>
                                </div>
                                <div className={styles['restaurant-buttons']}>
                                    <button>$5 Delivery</button>
                                    <button>Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <RestaurantDetailLeft />
                        <RestaurantDetailRight />
                    </div>
                </section>
            </ClientContainer>
        </>
    )
}

export default index
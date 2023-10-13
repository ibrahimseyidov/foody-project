import Image from 'next/image'
import React, { useState } from 'react'
import pizzas from '../../../../assets/icons/pizzas.svg'
import plus from '../../../../assets/icons/plus.svg';
import whitePlus from '../../../../assets/icons/whitePlus.svg'
import styles from './restaurantdetailleft.module.css'

const RestaurantDetailLeft = () => {

    return (
        <>
            <div className={styles['products-bg']}>

                <div className={styles['products-text']}>
                    <h2>Products</h2>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className='flex'>
                        <div className='mr-9'>
                            <Image src={pizzas} alt='food' />
                        </div>
                        <div className={styles['detail-title']}>
                            <h3>Papa John's Pizza Restaurant</h3>
                            <span>Prepared with a patty, a slice of cheese and special sauce</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className={styles.from}>From <span className={styles.price}>$7.90</span></span>
                        <button className={styles['plus-btn']}>
                            +
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RestaurantDetailLeft
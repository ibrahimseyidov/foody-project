import Image from 'next/image'
import React from 'react'
import styles from './userbasket.module.css'
import basketIcon from '../../../assets/icons/basket.svg'
import foods from '../../../assets/icons/foods.svg'
import delIcon from '../../../assets/icons/delIcon.svg'

const UserBasket = () => {
    return (
        <>
                <div className={styles['basket-bg']}>

                    <div className={styles['basket-head']}>
                        <h2>Your Basket</h2>
                        <div className='flex items-center'>
                            <Image className='mr-2' src={basketIcon} alt='basket' />
                            <span className={styles['basket-items']}>3 items</span>
                        </div>
                    </div>

                    <div className={styles['basket-cards-container']}>
                        <div className={styles['basket-card']}>
                            <div className='flex items-center'>
                                <div className='mr-7'>
                                    <Image src={foods} alt='food' />
                                </div>
                                <div className={styles['food-head']}>
                                    <h3>Papa John’s Pizza Restaurant</h3>
                                    <span>$15.80</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex flex-col mr-5 bg-white px-3 rounded-2xl'>
                                    <button>+</button>
                                    <span className='font-bold'>2</span>
                                    <button>-</button>
                                </div>
                                <div>
                                    <button className='-mt-2'>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='flex items-center'>
                                <div className='mr-7'>
                                    <Image src={foods} alt='food' />
                                </div>
                                <div className={styles['food-head']}>
                                    <h3>Papa John’s Pizza Restaurant</h3>
                                    <span>$15.80</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex flex-col mr-5 bg-white px-3 rounded-2xl'>
                                    <button>+</button>
                                    <span className='font-bold'>2</span>
                                    <button>-</button>
                                </div>
                                <div>
                                    <button className='-mt-2'>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='flex items-center'>
                                <div className='mr-7'>
                                    <Image src={foods} alt='food' />
                                </div>
                                <div className={styles['food-head']}>
                                    <h3>Papa John’s Pizza Restaurant</h3>
                                    <span>$15.80</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex flex-col mr-5 bg-white px-3 rounded-2xl'>
                                    <button>+</button>
                                    <span className='font-bold'>2</span>
                                    <button>-</button>
                                </div>
                                <div>
                                    <button className='-mt-2'>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='flex items-center'>
                                <div className='mr-7'>
                                    <Image src={foods} alt='food' />
                                </div>
                                <div className={styles['food-head']}>
                                    <h3>Papa John’s Pizza Restaurant</h3>
                                    <span>$15.80</span>
                                </div>
                            </div>

                            <div className='flex '>
                                <div className='flex flex-col mr-5 bg-white px-3 rounded-2xl'>
                                    <button>+</button>
                                    <span className='font-bold'>2</span>
                                    <button>-</button>
                                </div>
                                <div>
                                    <button className='-mt-2'>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='mx-9 mt-8'>
                        <div className={styles['checkout-bg']}>
                            <span>Checkout</span>
                            <div>
                                $37.40
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default UserBasket
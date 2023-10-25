import Image from 'next/image'
import basket from '../../../../assets/icons/basket.svg'
import pizzas from '../../../../assets/icons/pizzas.svg'
import delIcon from '../../../../assets/icons/delIcon.svg'
import styles from './restaurantdetailright.module.css'
import emptyBasket from '../../../../assets/icons/emptyBasket.png'
import React from 'react'
import { useTranslation } from 'next-i18next';

const RestaurantDetailRight = () => {
    const { t } = useTranslation('common')

    return (
        <>
            <div className={styles['basket-bg']}>
                <div className={styles['basket-top']}>
                    <Image className='mr-2' src={basket} alt='basket' />
                    <span className={styles['basket-items']}>
                        3 {t('items')}
                    </span>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className={styles['basket-middle']}>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['basket-card']}>
                            <div className='mr-4'>
                                <Image src={pizzas} alt='food' />
                            </div>
                            <div className={styles['basket-title']}>
                                <h3>Papa John's Pizza {t('Restaurant')}</h3>
                                <span>$15.80</span>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col bg-white px-2 rounded-xl mr-4'>
                                    <button>+</button>
                                    <span className='font-semibold'>2</span>
                                    <button>-</button>
                                </div>
                                <div className='-mt-4'>
                                    <button>
                                        <Image src={delIcon} alt='delete' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['basket-checkout']}>
                        <span className={styles['checkout-text']}>{t('Checkout')}</span>
                        <div className={styles['checkout-bg']}>
                            $37.40
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='-mt-10'>
                <Image src={emptyBasket} alt='empty-basket' />
            </div> */}
        </>
    )
}

export default RestaurantDetailRight
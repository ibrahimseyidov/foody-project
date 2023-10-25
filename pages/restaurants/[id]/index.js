'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import ClientContainer from '../../../components/common/ClientContainer/ClientContainer'
import papaJohns from '../../../assets/images/papaJohns.png'
import styles from './restaurantdetail.module.css'
import RestaurantDetailLeft from '../../../components/Restaurants/RestaurantDetail/RestaurantDetailLeft/RestaurantDetailLeft'
import RestaurantDetailRight from '../../../components/Restaurants/RestaurantDetail/RestaurantDetailRight/RestaurantDetailRight'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'

const index = () => {
    const { t } = useTranslation('common')

    return (
        <>
            <ClientContainer>
                <section className='mb-56'>
                    <div className='relative mb-10'>
                        <Image src={papaJohns} alt='papa-johns' />
                        <div className='absolute bottom-0 flex justify-between items-center w-full'>
                            <div className={styles['restaurant-title']}>
                                <h2>Papa John's Pizza {t('Restaurant')}</h2>
                                <span>19 Nizami street, Sabail, Baku</span>
                            </div>
                            <div className='flex items-center'>
                                <div className={styles['restaurant-item']}>
                                    <h3>{t('Cuisine')}</h3>
                                    <span>pizza, drink, hotdog, sandwich, roll</span>
                                </div>
                                <div className={styles['restaurant-buttons']}>
                                    <button>$5 {t('Delivery')}</button>
                                    <button>{t('Go Back')}</button>
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

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});
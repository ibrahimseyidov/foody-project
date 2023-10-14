'use client'
import React from 'react'
import { useState } from 'react'
import ProfileLayout from '../../../components/common/ProfileLayout/ProfileLayout'
import success from '../../../assets/images/success.svg'
import styles from './checkout.module.css'
import Image from 'next/image'

const index = () => {
    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)

    const handleCheckbox = () => {
        setIsChecked1(true)
        setIsChecked2(false)
    }

    const handleCheckbox2 = () => {
        setIsChecked2(true)
        setIsChecked1(false)
    }


    return (
        <>
            <ProfileLayout>
                <div className={styles['checkout-bg']}>
                    <h2 className={styles['checkout-text']}>Checkout</h2>
                    <div>
                        <form>
                            <div className={styles['delivery-inp']}>
                                <label htmlFor="delivery">Delivery Address</label>
                                <input type="text" id='delivery' placeholder='Delivery Address' />
                            </div>
                            <div className={styles['delivery-inp']}>
                                <label htmlFor="contact">Contact Number</label>
                                <input type="text" id='contact' placeholder='Contact number' />
                            </div>
                            <div>
                                <label className={styles['payment-text']} htmlFor="payment">Payment Method</label>
                                <div className='flex justify-between w-5/6 mt-4'>
                                    <div className={styles['checkbox-area']}>
                                        <input onChange={(e) => handleCheckbox(e)} type="radio" id='pay' name='pay' className={styles['rounded-checkbox']} />
                                        <label className={isChecked1 ? `${styles['green-box']}` : `${styles['gray-box']}`} htmlFor="pay">pay at the door</label>
                                    </div>
                                    <div className={styles['checkbox-area']}>
                                        <input onChange={(e) => handleCheckbox2(e)}  type="radio" id='paycredit' name='pay' className={styles['rounded-checkbox']} />
                                        <label className={isChecked2 ? `${styles['green-box']}` : `${styles['gray-box']}`} htmlFor="paycredit">pay at the door by credit card</label>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <button className={styles['checkout-btn']}>Checkout</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles['order-bg']}>
                    <div className={styles['order-head']}>
                        <h3>Your Order</h3>
                    </div>
                    <div className={styles['order-mid']}>
                        <div className={styles['order-item']}>
                            <span><span className={styles['inner-text']}>1</span> x Papa John's Pizza Restaurant</span>
                            <span>$8.00</span>
                        </div>
                        <div className={styles['order-item']}>
                            <span><span className={styles['inner-text']}>1</span> x Papa John's Pizza Restaurant</span>
                            <span>$8.00</span>
                        </div>
                        <div className={styles['order-item']}>
                            <span><span className={styles['inner-text']}>1</span> x Papa John's Pizza Restaurant</span>
                            <span>$8.00</span>
                        </div>
                        <div className={styles['order-item']}>
                            <span><span className={styles['inner-text']}>1</span> x Papa John's Pizza Restaurant</span>
                            <span>$8.00</span>
                        </div>
                        <div className={styles['order-item']}>
                            <span><span className={styles['inner-text']}>1</span> x Papa John's Pizza Restaurant</span>
                            <span>$8.00</span>
                        </div>
                    </div>
                    <div className={styles['total-area']}>
                        <span>Total</span>
                        <span>$17.80</span>
                    </div>
                </div>
                {/* <div className={styles['success-bg']}>
                    <div className={styles['success-area']}>
                        <Image src={success} alt='success' />
                        <span>Your order has been received</span>
                    </div>
                </div> */}
            </ProfileLayout>
        </>
    )
}

export default index
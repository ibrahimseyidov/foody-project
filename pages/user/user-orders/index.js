import Image from 'next/image'
import React from 'react'
import ProfileLayout from '../../../components/common/ProfileLayout/ProfileLayout'
import styles from './orders.module.css'
import dots from '../../../assets/icons/dots.svg'

const index = () => {
    return (
        <>
            <ProfileLayout>
                <div className={styles['orders-bg']}>
                    <div className={styles['orders-head']}>
                        <h2>Your Orders</h2>
                    </div>
                    <div>
                        <table className={styles['table']}>
                            <thead className={styles['thead']}>
                                <tr>
                                    <th>ID</th>
                                    <th>Time</th>
                                    <th>Delivery Address</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody className={styles['tbody']}>
                                <tr className={styles['orders-tr']}>
                                    <td><span className={styles['id-border']}>9117</span></td>
                                    <td>25 Dec 2023</td>
                                    <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                    <td>$249.7</td>
                                    <td>Cash On Delivery</td>
                                    <td>994-51-410-31-30</td>
                                    <td>
                                        <button className='mr-9'>
                                            <Image src={dots} alt='dots' />
                                        </button>
                                    </td>
                                </tr>
                                <tr className={styles['orders-tr']}>
                                    <td><span className={styles['id-border']}>9117</span></td>
                                    <td>25 Dec 2023</td>
                                    <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                    <td>$249.7</td>
                                    <td>Cash On Delivery</td>
                                    <td>994-51-410-31-30</td>
                                    <td>
                                        <button className='mr-9'>
                                            <Image src={dots} alt='dots' />
                                        </button>
                                    </td>
                                </tr>
                                <tr className={styles['orders-tr']}>
                                    <td><span className={styles['id-border']}>9117</span></td>
                                    <td>25 Dec 2023</td>
                                    <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                    <td>$249.7</td>
                                    <td>Cash On Delivery</td>
                                    <td>994-51-410-31-30</td>
                                    <td>
                                        <button className='mr-9'>
                                            <Image src={dots} alt='dots' />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ProfileLayout>
        </>
    )
}

export default index
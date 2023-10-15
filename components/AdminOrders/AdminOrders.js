import React from 'react'
import styles from '../AdminCategory/admincategory.module.css'
import Image from 'next/image'
import littleFood from '../../assets/images/foodImages/littleFood.svg'
import eye from '../../assets/icons/eye.svg'
import trashIcon from '../../assets/icons/trashIcon.svg'

const AdminOrders = () => {
    return (
        <>
            <section className='h-full'>
                <div className={styles['table-container']}>
                    <table className={styles['table']}>
                        <thead className={styles['thead']}>
                            <tr className={styles['thead-row']}>
                                <th>ID</th>
                                <th>Customer ID</th>
                                <th>Time</th>
                                <th>Delivery Address</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Contact</th>
                            </tr>
                        </thead>

                        <tbody className={styles['tbody']}>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}

export default AdminOrders
'use client'
import React, { useEffect } from 'react'
import styles from '../AdminCategory/admincategory.module.css'
import Image from 'next/image'
import eye from '../../assets/icons/eye.svg'
import trashIcon from '../../assets/icons/trashIcon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux'
import { openDelModal, showOrderModal } from '../../redux/features/delModalSlice'

const AdminOrders = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <section className='h-full' data-aos="zoom-in">
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
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td><span className={styles['table-id']}>022401</span></td>
                                <td>25 Dec 2021</td>
                                <td className='w-48 text-left'>29 Eve Street, 543 Evenue Road, Ny 87876</td>
                                <td>$249.7</td>
                                <td>Cash On Delivery</td>
                                <td>994-51-410-3130</td>
                                <td className='flex items-center mt-2'>
                                    <button onClick={() => dispatch(showOrderModal())} className='mr-4'>
                                        <Image src={eye} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
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
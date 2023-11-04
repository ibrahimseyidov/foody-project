'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './userorders.module.css'
import dots from '../../../assets/icons/dots.svg'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const UserOrders = () => {
    const [isActiveModal, setIsActiveModal] = useState(false)
    const [isActiveOrderDetail, setIsActiveOrderDetail] = useState()
    const { data: userOrder } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const { data } = await axios.get('/api/order', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }, {
                onSuccess: (data) => {
                    console.log(data);
                }
            })
            return data
        },
    })

    const showOrderDetail = (userId) => {
        setIsActiveModal(!isActiveModal)
        setIsActiveOrderDetail(userId)
    }

    return (
        <>
            <div className={styles['orders-bg']}>
                <div className={styles['orders-head']}>
                    <h2>Your Orders</h2>
                </div>
                <div className={styles['table-container']}>
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
                            {userOrder?.result.data.map((user) => (
                                <>
                                    <tr key={user?.id} className={styles['orders-tr']}>
                                        <td><span className={styles['id-border']}>{(user?.id).slice(1, 5)}</span></td>
                                        <td>25 Dec 2023</td>
                                        <td className='w-48'>{user?.delivery_address}</td>
                                        <td>${user?.amount}</td>
                                        <td>{user?.payment_method === 1 ? "pay at the door by credit card" : "pay at the door"}</td>
                                        <td>{user?.contact}</td>
                                        <td>
                                            <button onClick={() => showOrderDetail(user?.id)} className='mr-9'>
                                                <Image src={dots} alt='dots' />
                                            </button>
                                        </td>
                                        {(isActiveOrderDetail === user?.id && isActiveModal) ?
                                            <td>
                                                <div className='absolute top-10 right-4 bg-white z-50 shadow-shadoww px-6 py-1'>
                                                    <div className='flex flex-col bg-white'>
                                                        <button className='text-green-500 mb-1'>show</button>
                                                        <button className='text-red-500'>delete</button>
                                                    </div>
                                                </div>
                                            </td>
                                            : ''
                                        }

                                    </tr>

                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserOrders
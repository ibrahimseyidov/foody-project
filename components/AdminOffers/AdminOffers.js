'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import editIcon from '../../assets/icons/editIcon.svg'
import trashIcon from '../../assets/icons/trashIcon.svg'
import littleFood from '../../assets/images/foodImages/littleFood.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../AdminCategory/admincategory.module.css'

const AdminOffers = () => {

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
                                <th>Image</th>
                                <th>Title</th>
                                <th>Descriptions</th>
                            </tr>
                        </thead>

                        <tbody className={styles['tbody']}>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Do you like Pizza at Pap...</td>
                                <td>Yummy this pizza but...</td>
                                <td>
                                    <button className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Do you like Pizza at Pap...</td>
                                <td>Yummy this pizza but...</td>
                                <td>
                                    <button className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Do you like Pizza at Pap...</td>
                                <td>Yummy this pizza but...</td>
                                <td>
                                    <button className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
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

export default AdminOffers
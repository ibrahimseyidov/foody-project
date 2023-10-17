'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import littleFood from '../../assets/images/foodImages/littleFood.svg'
import editIcon from '../../assets/icons/editIcon.svg'
import trashIcon from '../../assets/icons/trashIcon.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './admincategory.module.css'
import { useDispatch } from 'react-redux'
import { openCategoryModalEdit } from '../../redux/features/editModalSlice'
import {openDelModal} from '../../redux/features/delModalSlice' 

const AdminCategory = () => {

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
                                <th>Image</th>
                                <th>Name</th>
                                <th>Slugs</th>
                            </tr>
                        </thead>

                        <tbody className={styles['tbody']}>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
                                    </button>
                                    <button onClick={() => dispatch(openDelModal())}>
                                        <Image src={trashIcon} alt='trash-icon' />
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles['table-row']}>
                                <td><span className={styles['table-id']}>9177</span></td>
                                <td className='flex justify-center'><Image src={littleFood} alt='food' /></td>
                                <td>Pizza</td>
                                <td>yummy-pizza</td>
                                <td>
                                    <button onClick={() => dispatch(openCategoryModalEdit())} className='mr-4'>
                                        <Image src={editIcon} alt='edit-icon' />
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

export default AdminCategory
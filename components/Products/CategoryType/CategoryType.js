'use client'
import React from 'react'
import styles from '../CategoryType/categorytype.module.css'
import SelectBox from '../../common/Selectbox/Selectbox'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { openCategoryModalEdit } from '../../../redux/features/editModalSlice';
import { useDispatch } from 'react-redux';

const CategoryType = ({pageName}) => {
const dispatch=useDispatch();
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get('/api/products')
            return data
        },
    })
    
    return (

        <>
            <div className={styles['category-type-bg']}>
                <div className='flex max-md:flex-col justify-between items-center py-5 px-7'>
                    <div className='max-md:mb-4'>
                        <h2 className={styles['products-head-text']}>{pageName}</h2>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <SelectBox categories={...data} />
                        <button onClick={()=>dispatch(openCategoryModalEdit())} className={styles['add-category-btn']}>+Add category</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CategoryType
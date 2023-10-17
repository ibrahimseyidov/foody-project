import React from 'react'
import style from '../AddResBtn/addresbtn.module.css'
import plusBtn from '../../../assets/icons/plusBtn.svg'
// import { useDispatch } from 'react-redux'
// import { addResModal } from 'redux/features/modalSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { openAddResModal } from '../../../redux/features/editModalSlice'

const AddResBtn = () => {

    const dispatch = useDispatch()

    return (
        <>

            <div className='ml-5 max-md:ml-0'>
                <button onClick={() => dispatch(openAddResModal())} className={style['restaurant-btn']}>
                    <Image src={plusBtn} alt="plus-button" />
                    ADD RESTAURANTS
                </button>
            </div>

        </>
    )
}

export default AddResBtn
import React from 'react'
import style from '../AddResBtn/addresbtn.module.css'
import plusBtn from '../../../assets/icons/plusBtn.svg'
// import { useDispatch } from 'react-redux'
// import { addResModal } from 'redux/features/modalSlice'
import Image from 'next/image'

const AddResBtn = () => {

    // const dispatch = useDispatch((state) => state.modal.addResModal)

    return (
        <>

            <div className='ml-5 max-md:ml-0'>
                <button className={style['restaurant-btn']}>
                    <Image src={plusBtn} alt="plus-button" />
                    ADD RESTAURANTS
                </button>
            </div>

        </>
    )
}

export default AddResBtn
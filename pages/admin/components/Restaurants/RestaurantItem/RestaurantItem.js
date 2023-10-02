import React from 'react'
import styles from '../RestaurantItem/restaurantitem.module.css'
import PapaJohns from '../../../src/assets/images/foodImages/PapaJohnsImg.svg'
import editImg from '../../../src/assets/icons/edit.svg';
import trashImg from '../../../src/assets/icons/trash.svg';
// import { useDispatch } from 'react-redux'
// import { openDelModal, openResModalEdit } from 'redux/features/modalSlice';
import { motion } from "framer-motion";
import Image from 'next/image';

const RestaurantItem = () => {

  // const dispatch = useDispatch()

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <motion.div
        variants={item}
        className='flex items-center justify-between bg-white w-60 max-md:w-64 h-20 mr-9 mb-9 pl-3 pr-1 pb-2.5 pt-2 rounded-md max-[420px]:mr-0'
        id={styles['restaurant-card']}
      >
        <div>
          <Image src={PapaJohns} alt="papa-johns" />
        </div>
        <div className={styles['restaurant-detail']}>
          <h3>Papa John's</h3>
          <span>Pizza</span>
        </div>
        <div className='flex flex-col'>
          <button onClick={() => dispatch(openDelModal())} className='mb-4'>
            <Image src={trashImg} className='w-6' alt="trash-button" />
          </button>
          <button onClick={() => dispatch(openResModalEdit())}>
            <Image src={editImg} className='w-6' alt="edit-button" />
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default RestaurantItem
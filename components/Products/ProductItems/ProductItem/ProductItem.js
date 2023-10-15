import React from 'react'
import styles from '../../../Products/ProductItems/ProductItem/productitem.module.css'
import pizzaImg from '../../../../assets/images/foodImages/pizza.svg'
import editImg from '../../../../assets/icons/edit.svg';
import trashImg from '../../../../assets/icons/trash.svg';
import { openModalEdit } from '../../../../redux/features/editModalSlice';
import { openDelModal } from '../../../../redux/features/delModalSlice'
import { useDispatch } from 'react-redux'
import { motion } from "framer-motion";
import Image from 'next/image';


const ProductItem = () => {

    const dispatch = useDispatch()

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
                className={styles["product-bg"]}
                variants={item}
            >
                <div className={styles['product-detail']}>
                    <div>
                        <Image src={pizzaImg} alt='pizza' />
                    </div>
                    <h3>Marqarita</h3>
                    <span>Papa John's</span>
                    <div className={styles['product-price']}>
                        <div>
                            <span>$16</span>
                        </div>
                        <div className={styles['product-edit']}>
                            <button onClick={() => dispatch(openModalEdit())}>
                                <Image src={editImg} alt='edit' />
                            </button>
                            <button onClick={() => dispatch(openDelModal())}>
                                <Image src={trashImg} alt='trash' />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProductItem
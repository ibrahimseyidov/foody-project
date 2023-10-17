'use client'
import React, { useEffect } from 'react'
import styles from '../common/DelModal/delmodal.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrderModal } from '../../redux/features/delModalSlice';

const ShowOrderModal = () => {

    const dispatch = useDispatch()
    const selOrderModal = useSelector((state) => state.delModal.showOrderActive)

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            {selOrderModal &&
                <div>
                    <div className={styles.overlay} data-aos='zoom-in' >
                        <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} >
                            <span className={styles["modal-head"]}>Orders</span>
                            <span className={styles["modal-para"]}>Pizza, Sushi, Kabab, Coco-Cola</span>
                            <div className='max-md:flex max-md:flex-col-reverse mt-4z'>
                                <button onClick={() => dispatch(closeOrderModal())} className={styles['delete-btn']}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ShowOrderModal
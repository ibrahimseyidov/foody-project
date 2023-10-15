'use client'
import React, { useEffect } from 'react';
import styles from './delmodal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeDelModal } from '../../../redux/features/delModalSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DelModal = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const selDelModal = useSelector((state) => state.delModal.deLModalActive);
    const dispatch = useDispatch()

    return (
        <>
            {selDelModal &&
                    <div>

                        <div className={styles.overlay} data-aos='zoom-in' >
                            <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} >

                                <span className={styles["modal-head"]}>Are you sure it's deleted?</span>
                                <span className={styles["modal-para"]}>Attention! If you delete this product, it will not come back...</span>
                                <div className='max-md:flex max-md:flex-col-reverse'>
                                    <button onClick={() => dispatch(closeDelModal())} className={styles['cancel-btn']}>cancel</button>
                                    <button className={styles['delete-btn']}>delete</button>
                                </div>

                            </div>

                        </div>
                    </div>
            }
        </>
    )
}

export default DelModal
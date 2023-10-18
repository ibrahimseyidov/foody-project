'use client'
import React, { useEffect } from 'react';
import styles from './delmodal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeDelModal } from '../../../redux/features/delModalSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next'

const DelModal = () => {

    const { t } = useTranslation('common')

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

                            <span className={styles["modal-head"]}>{t("Are you sure it's deleted ?")}</span>
                            <span className={styles["modal-para"]} >{t('Attention! If you delete this product, it will not come back...')}</span>
                            <div className='max-md:flex max-md:flex-col-reverse'>
                                <button onClick={() => dispatch(closeDelModal())} className={styles['cancel-btn']}>{t('Cancel')}</button>
                                <button className={styles['delete-btn']}>{t('delete')}</button>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default DelModal
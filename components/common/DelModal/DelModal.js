'use client'
import React, { useEffect } from 'react';
import styles from './delmodal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeDelModal, closeResDelModal , closeHisDelModal } from '../../../redux/features/delModalSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next'
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DelModal = () => {

    const { t } = useTranslation('common')
    const queryClient = useQueryClient()

    const selDelModal = useSelector((state) => state.delModal.deLModalActive);
    const selResDelModal = useSelector((state) => state.delModal.resDelModalActive);
    const selHisModal = useSelector((state) => state.delModal.delhistoryActive);

    const dispatch = useDispatch()

    const { mutate: deleteProduct } = useMutation({
        mutationFn: async () => await axios.delete(`/api/products/${selDelModal}`),
        onSuccess: () => {
            alert('success')
            dispatch(closeDelModal())
            queryClient.invalidateQueries(['products'])
        },
        onError: () => {
            alert('error')
        }
    })

    const { mutate: handleDelRest } = useMutation({
        mutationFn: async () => await axios.delete(`/api/restuarants/${selResDelModal}`),
        onSuccess: () => {
            alert('success')
            dispatch(closeResDelModal())
            queryClient.invalidateQueries(['restuarants'])
        },
        onError: () => {
            alert('error')
        }
    })

    const { mutate: handleDeleteHis } = useMutation({
        mutationFn: async () => {
          const response = await axios.delete(`/api/offer/${selHisModal}`);
          return response.data;
        },
        
          onSuccess: () => {
            alert("Success!!");
            dispatch(closeHisDelModal());
            queryClient.invalidateQueries(['offer'])
          },
          onError: () => {
            alert("Error!!");
          },
        })
    
        

    useEffect(() => {
        AOS.init()
    }, [])

    const handleDelProduct = () => {
        deleteProduct()
    }

    const handleDelRes = () => {
        handleDelRest()
    }
    const handleDelete = () => {
        handleDeleteHis()   
    };
    return (
        <>
            {selDelModal ?
                <div>
                    <div className={styles.overlay} data-aos='zoom-in' >
                        <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} >

                            <span className={styles["modal-head"]}>{t("Are you sure it's deleted ?")}</span>
                            <span className={styles["modal-para"]} >{t('Attention! If you delete this product, it will not come back...')}</span>
                            <div className='max-md:flex max-md:flex-col-reverse'>
                                <button onClick={() => dispatch(closeDelModal())} className={styles['cancel-btn']}>{t('Cancel')}</button>
                                <button onClick={() => handleDelProduct()} className={styles['delete-btn']}>{t('delete')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                : selResDelModal ?
                    <div>
                        <div className={styles.overlay} data-aos='zoom-in' >
                            <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} >

                                <span className={styles["modal-head"]}>{t("Are you sure it's deleted ?")}</span>
                                <span className={styles["modal-para"]} >{t('Attention! If you delete this product, it will not come back...')}</span>
                                <div className='max-md:flex max-md:flex-col-reverse'>
                                    <button onClick={() => dispatch(closeResDelModal())} className={styles['cancel-btn']}>{t('Cancel')}</button>
                                    <button onClick={() => handleDelRes()} className={styles['delete-btn']}>{t('delete')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    selHisModal ?
                    <div>
                        <div className={styles.overlay} data-aos='zoom-in' >
                            <div className='flex flex-col justify-center items-center rounded absolute bg-white' id={styles['modal-position']} style={{ "width": "498px", "height": '226px', "boxShadow": "0px 3px 8px -2px rgba(0, 0, 0, 0.20)" }} >

                                <span className={styles["modal-head"]}>{t("Are you sure it's deleted ?")}</span>
                                <span className={styles["modal-para"]} >{t('Attention! If you delete this product, it will not come back...')}</span>
                                <div className='max-md:flex max-md:flex-col-reverse'>
                                    <button onClick={() => dispatch(closeHisDelModal())} className={styles['cancel-btn']}>{t('Cancel')}</button>
                                    <button onClick={() => handleDelete()} className={styles['delete-btn']}>{t('delete')}</button>
                                </div>
                            </div>
                        </div>
                    </div>:""
            }
        </>
    )
}

export default DelModal
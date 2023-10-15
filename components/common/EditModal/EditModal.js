'use client'
import React, { useEffect } from 'react'
import styles from 'components/common/EditModal/editmodal.module.css'

import productImg from '../../../assets/images/foodImages/miniPizza.svg'
import uploadImg from '../../../assets/icons/upload.svg'
import closeBtn from '../../../assets/icons/closeBtn.svg'
// import Editselectbox from 'components/common/EditSelectBox/Editselectbox';
import { useSelector, useDispatch } from 'react-redux'
import { closeModalEdit, closeResModalEdit } from '../../../redux/features/editModalSlice'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const EditModal = () => {

    const selEditModal = useSelector((state) => state.modal.isActiveModal)
    const selResEditModal = useSelector((state) => state.modal.isActiveResModal)
    const dispatch = useDispatch()

    useEffect(() => {
        AOS.init()
        const htmlEl = document.querySelector('html');

        if (selEditModal) {
            htmlEl.style.overflow = 'hidden';
        } else {
            htmlEl.style.overflow = 'auto';
        }
    }, [selEditModal])

    return (
        <>
            <div className={selEditModal && styles.overlay} >

                {selEditModal &&
                    <>
                        {selResEditModal ?
                            <>
                                <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                    <div className={styles['editmodal-head']}>
                                        <h3>Edit restaurants</h3>
                                    </div>
                                    <div className={styles["editmodal-top"]}>
                                        <div className={styles['editmodal-left-contain']}>
                                            <div className={styles['editmodal-left-top']}>
                                                <h3>Edit Restaurant</h3>
                                                <span>Upload image</span>
                                                {/* <Image src={} alt="restaurant" /> */}
                                            </div>
                                            <div className={styles['editmodal-left-bot']}>
                                                <span>
                                                    Edit your Restaurant information
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles['editmodal-right-contain']}>
                                            <div className={styles['mob-upload-text']}>
                                                <span>Upload your restaurants image</span>
                                            </div>
                                            <div className={styles['editmodal-right-top']}>
                                                <button>
                                                    <Image src={uploadImg} alt="upload" />
                                                    upload
                                                </button>
                                            </div>
                                            <div className={styles['editmodal-right-bot']}>
                                                <div className={styles['mob-restaurant-info']}>
                                                    <span>
                                                        Edit your Restaurants information
                                                    </span>
                                                </div>
                                                <form>
                                                    <div className={styles['product-name']}>
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" id='price' placeholder='Product Name' />
                                                    </div>
                                                    <div className={styles['product-description']}>
                                                        <label htmlFor="description">Cuisine</label>
                                                        <textarea name="description" id={styles['desc']} placeholder='Description'></textarea>
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="deliveryprice">Delivery Price $</label>
                                                        <input type="text" id='deliveryprice' placeholder='Price' />
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="deliverymin">Delivery Min</label>
                                                        <input type="text" id='deliverymin' placeholder='Minimum Delivery' />
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="price">Address</label>
                                                        <input type="text" id='price' placeholder='Address' />
                                                    </div>
                                                    <div className={styles['product-selectbox']}>
                                                        <label className={styles.restaurants} htmlFor="restaurants">Restaurants</label>
                                                        {/* <Editselectbox /> */}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['editmodal-bot']}>
                                        <button className={styles['edit-cancel']}>Cancel</button>
                                        <button className={styles['edit-update']}>Update Product</button>
                                    </div>
                                </div>

                                <div className={styles['close-contain']}>
                                    <button onClick={() => dispatch(closeResModalEdit())} className={styles['close-btn']} >
                                        <Image src={closeBtn} alt="close-button" />
                                    </button>
                                </div>
                            </>
                            :
                            <>
                                <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                    <div className={styles['editmodal-head']}>
                                        <h3>Edit product</h3>
                                    </div>
                                    <div className={styles["editmodal-top"]}>
                                        <div className={styles['editmodal-left-contain']}>
                                            <div className={styles['editmodal-left-top']}>
                                                <h3>Edit product</h3>
                                                <span>Upload your product image</span>
                                                <Image src={productImg} alt='product' />
                                            </div>
                                            <div className={styles['editmodal-left-bot']}>
                                                <span>
                                                    Edit your Product description and necessary information
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles['editmodal-right-contain']}>
                                            <div className={styles['mob-upload-text']}>
                                                <span>Upload your restaurants image</span>
                                            </div>
                                            <div className={styles['editmodal-right-top']}>
                                                <button>
                                                    <Image src={uploadImg} alt="upload" />
                                                    upload
                                                </button>
                                            </div>
                                            <div className={styles['editmodal-right-bot']}>
                                                <div className={styles['mob-restaurant-info']}>
                                                    <span>
                                                        Add your Product description and necessary information
                                                    </span>
                                                </div>
                                                <form>
                                                    <div className={styles['product-name']}>
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" id='price' placeholder='Product Name' />
                                                    </div>
                                                    <div className={styles['product-description']}>
                                                        <label htmlFor="description">Description</label>
                                                        <textarea name="description" id={styles['desc']} placeholder='Description'></textarea>
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="price">Price</label>
                                                        <input type="text" id='price' placeholder='Price' />
                                                    </div>
                                                    <div className={styles['product-selectbox']}>
                                                        <label className={styles.restaurants} htmlFor="restaurants">Restaurants</label>
                                                        {/* <Editselectbox /> */}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['editmodal-bot']}>
                                        <button className={styles['edit-cancel']}>Cancel</button>
                                        <button className={styles['edit-update']}>Update Product</button>
                                    </div>
                                </div>
                                <div className={styles['close-contain']}>
                                    <button onClick={() => dispatch(closeModalEdit())} className={styles['close-btn']} >
                                        <Image src={closeBtn} alt="close-button" />
                                    </button>
                                </div>
                            </>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default EditModal
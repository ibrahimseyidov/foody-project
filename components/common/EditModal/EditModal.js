'use client'
import React, { useEffect } from 'react'
import styles from 'components/common/EditModal/editmodal.module.css'

import productImg from '../../../assets/images/foodImages/miniPizza.svg'
import uploadImg from '../../../assets/icons/upload.svg'
import closeBtn from '../../../assets/icons/closeBtn.svg'
// import Editselectbox from 'components/common/EditSelectBox/Editselectbox';
import { useSelector, useDispatch } from 'react-redux'
import { closeAddProductModal, closeAddResModal, closeCategoryModalEdit, closeModalEdit, closeOfferModalEdit, closeResModalEdit } from '../../../redux/features/editModalSlice'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next'

const EditModal = () => {

    const { t } = useTranslation('common')

    const selEditModal = useSelector((state) => state.modal.isActiveModal)
    const selAddProductModal = useSelector((state) => state.modal.isActiveAddProductModal)
    const selAddResModal = useSelector((state) => state.modal.isActiveAddResModal)
    const selResEditModal = useSelector((state) => state.modal.isActiveResModal)
    const selCategoryEditModal = useSelector((state) => state.modal.isActiveCategoryModal)
    const selOfferEditModal = useSelector((state) => state.modal.isActiveOfferModal)
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
            {selEditModal ?
                <>
                    <div className={styles.overlay} >
                        <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                            <div className={styles['editmodal-head']}>
                                <h3>{t('Edit product')}</h3>
                            </div>
                            <div className={styles["editmodal-top"]}>
                                <div className={styles['editmodal-left-contain']}>
                                    <div className={styles['editmodal-left-top']}>
                                        <h3>{t('Edit product')}</h3>
                                        <span>{t('Upload your product image')}</span>
                                        <Image src={productImg} alt='product' />
                                    </div>
                                    <div className={styles['editmodal-left-bot']}>
                                        <span>
                                            {t('Edit your Product description and necessary information')}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['editmodal-right-contain']}>
                                    <div className={styles['mob-upload-text']}>
                                        <span>{t('Upload your product image')}</span>
                                    </div>
                                    <div className={styles['editmodal-right-top']}>
                                        <button>
                                            <Image src={uploadImg} alt="upload" />
                                            {t('upload')}
                                        </button>
                                    </div>
                                    <div className={styles['editmodal-right-bot']}>
                                        <div className={styles['mob-restaurant-info']}>
                                            <span>
                                                {t('Add your Product description and necessary information')}
                                            </span>
                                        </div>
                                        <form>
                                            <div className={styles['product-name']}>
                                                <label htmlFor="name">{t('Name')}</label>
                                                <input type="text" id='price' placeholder={t('Product Name')} />
                                            </div>
                                            <div className={styles['product-description']}>
                                                <label htmlFor="description">{t('Description')}</label>
                                                <textarea name="description" id={styles['desc']} placeholder={t('Description')}></textarea>
                                            </div>
                                            <div className={styles['product-price']}>
                                                <label htmlFor="price">{t('Price')}</label>
                                                <input type="text" id='price' placeholder={t('Price')} />
                                            </div>
                                            <div className={styles['product-selectbox']}>
                                                <label className={styles.restaurants} htmlFor="restaurants">{t('Restaurants')}</label>
                                                {/* <Editselectbox /> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['editmodal-bot']}>
                                <button onClick={() => dispatch(closeModalEdit())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                <button className={styles['edit-update']}>{t('Update Product')}</button>
                            </div>
                        </div>
                        <div className={styles['close-contain']}>
                            <button onClick={() => dispatch(closeModalEdit())} className={styles['close-btn']} >
                                <Image src={closeBtn} alt="close-button" />
                            </button>
                        </div>
                    </div>
                </>
                : selAddProductModal ?
                    <>
                        <div className={styles.overlay} >
                            <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                <div className={styles['editmodal-head']}>
                                    <h3>{t('Add product')}</h3>
                                </div>
                                <div className={styles["editmodal-top"]}>
                                    <div className={styles['editmodal-left-contain']}>
                                        <div className={styles['editmodal-left-top']}>
                                            <h3>{t('Add product')}</h3>
                                            <span>{t('Upload your product image')}</span>
                                            {/* <Image src={productImg} alt='product' /> */}
                                        </div>
                                        <div className={styles['editmodal-left-bot']}>
                                            <span>
                                                {t('Add your Product description and necessary information')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles['editmodal-right-contain']}>
                                        <div className={styles['mob-upload-text']}>
                                            <span>{t('Upload your restaurants image')}</span>
                                        </div>
                                        <div className={styles['editmodal-right-top']}>
                                            <button>
                                                <Image src={uploadImg} alt="upload" />
                                                {t('upload')}
                                            </button>
                                        </div>
                                        <div className={styles['editmodal-right-bot']}>
                                            <div className={styles['mob-restaurant-info']}>
                                                <span>
                                                    {t('Add your Product description and necessary information')}
                                                </span>
                                            </div>
                                            <form>
                                                <div className={styles['product-name']}>
                                                    <label htmlFor="name">{t('Name')}</label>
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
                                <div onClick={() => dispatch(closeAddProductModal())} className={styles['editmodal-bot']}>
                                    <button className={styles['edit-cancel']}>{t('Cancel')}</button>
                                    <button className={styles['edit-update']}>{t('Update Product')}</button>
                                </div>
                            </div>
                            <div className={styles['close-contain']}>
                                <button onClick={() => dispatch(closeAddProductModal())} className={styles['close-btn']} >
                                    <Image src={closeBtn} alt="close-button" />
                                </button>
                            </div>
                        </div>
                    </> : selAddResModal ?
                        <>
                            <div className={styles.overlay}>
                                <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                    <div className={styles['editmodal-head']}>
                                        <h3>{t('Add restaurants')}</h3>
                                    </div>
                                    <div className={styles["editmodal-top"]}>
                                        <div className={styles['editmodal-left-contain']}>
                                            <div className={styles['editmodal-left-top']}>
                                                <h3>{t('Add restaurants')}</h3>
                                                <span>{t('Upload image')}</span>
                                                {/* <Image src={} alt="restaurant" /> */}
                                            </div>
                                            <div className={styles['editmodal-left-bot']}>
                                                <span>
                                                    {t('Add your Restaurant information')}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles['editmodal-right-contain']}>
                                            <div className={styles['mob-upload-text']}>
                                                <span>{t('Upload your restaurants image')}</span>
                                            </div>
                                            <div className={styles['editmodal-right-top']}>
                                                <button>
                                                    <Image src={uploadImg} alt="upload" />
                                                    {t('upload')}
                                                </button>
                                            </div>
                                            <div className={styles['editmodal-right-bot']}>
                                                <div className={styles['mob-restaurant-info']}>
                                                    <span>
                                                        {t('Edit your Restaurants information')}
                                                    </span>
                                                </div>
                                                <form>
                                                    <div className={styles['product-name']}>
                                                        <label htmlFor="name">{t('Name')}</label>
                                                        <input type="text" id='price' placeholder={t('Product Name')} />
                                                    </div>
                                                    <div className={styles['product-description']}>
                                                        <label htmlFor="description">{t('Cuisine')}</label>
                                                        <textarea name="description" id={styles['desc']} placeholder={t('Description')}></textarea>
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="deliveryprice">{t('Delivery Price')} $</label>
                                                        <input type="text" id='deliveryprice' placeholder={t('Price')} />
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="deliverymin">{t('Delivery Min')}</label>
                                                        <input type="text" id='deliverymin' placeholder={t('Minimum Delivery')} />
                                                    </div>
                                                    <div className={styles['product-price']}>
                                                        <label htmlFor="price">{t('Address')}</label>
                                                        <input type="text" id='price' placeholder={t('Address')} />
                                                    </div>
                                                    <div className={styles['product-selectbox']}>
                                                        <label className={styles.restaurants} htmlFor="restaurants">{t('Restaurants')}</label>
                                                        {/* <Editselectbox /> */}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['editmodal-bot']}>
                                        <button onClick={() => dispatch(closeAddResModal())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                        <button className={styles['edit-update']}>{t('Update Product')}</button>
                                    </div>
                                </div>

                                <div className={styles['close-contain']}>
                                    <button onClick={() => dispatch(closeAddResModal())} className={styles['close-btn']} >
                                        <Image src={closeBtn} alt="close-button" />
                                    </button>
                                </div>
                            </div>
                        </>
                        : selResEditModal ?
                            <>
                                <div className={styles.overlay}>
                                    <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                        <div className={styles['editmodal-head']}>
                                            <h3>{t('Edit restaurants')}</h3>
                                        </div>
                                        <div className={styles["editmodal-top"]}>
                                            <div className={styles['editmodal-left-contain']}>
                                                <div className={styles['editmodal-left-top']}>
                                                    <h3>{t('Edit Restaurant')}</h3>
                                                    <span>{t('Upload Image')}</span>
                                                    {/* <Image src={} alt="restaurant" /> */}
                                                </div>
                                                <div className={styles['editmodal-left-bot']}>
                                                    <span>
                                                        {t('Edit your Restaurant information')}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles['editmodal-right-contain']}>
                                                <div className={styles['mob-upload-text']}>
                                                    <span>{t('Upload your restaurants image')}</span>
                                                </div>
                                                <div className={styles['editmodal-right-top']}>
                                                    <button>
                                                        <Image src={uploadImg} alt="upload" />
                                                        {t('upload')}
                                                    </button>
                                                </div>
                                                <div className={styles['editmodal-right-bot']}>
                                                    <div className={styles['mob-restaurant-info']}>
                                                        <span>
                                                            {t('Edit your Restaurants information')}
                                                        </span>
                                                    </div>
                                                    <form>
                                                        <div className={styles['product-name']}>
                                                            <label htmlFor="name">{t('Name')}</label>
                                                            <input type="text" id='price' placeholder={t('Product Name')} />
                                                        </div>
                                                        <div className={styles['product-description']}>
                                                            <label htmlFor="description">{t('Cuisine')}</label>
                                                            <textarea name="description" id={styles['desc']} placeholder={t('Description')}></textarea>
                                                        </div>
                                                        <div className={styles['product-price']}>
                                                            <label htmlFor="deliveryprice">{t('Delivery Price')} $</label>
                                                            <input type="text" id='deliveryprice' placeholder={t('Price')} />
                                                        </div>
                                                        <div className={styles['product-price']}>
                                                            <label htmlFor="deliverymin">{t('Delivery Min')}</label>
                                                            <input type="text" id='deliverymin' placeholder={t('Minimum Delivery')} />
                                                        </div>
                                                        <div className={styles['product-price']}>
                                                            <label htmlFor="price">{t('Address')}</label>
                                                            <input type="text" id='price' placeholder={t('Address')} />
                                                        </div>
                                                        <div className={styles['product-selectbox']}>
                                                            <label className={styles.restaurants} htmlFor="restaurants">{t('Restaurants')}</label>
                                                            {/* <Editselectbox /> */}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['editmodal-bot']}>
                                            <button onClick={() => dispatch(closeResModalEdit())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                            <button className={styles['edit-update']}>{t('Update Product')}</button>
                                        </div>
                                    </div>

                                    <div className={styles['close-contain']}>
                                        <button onClick={() => dispatch(closeResModalEdit())} className={styles['close-btn']} >
                                            <Image src={closeBtn} alt="close-button" />
                                        </button>
                                    </div>
                                </div>
                            </>
                            : selCategoryEditModal ?
                                <>
                                    <div className={styles.overlay} >
                                        <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                            <div className={styles['editmodal-head']}>
                                                <h3>{t('Add Category')}</h3>
                                            </div>
                                            <div className={styles["editmodal-top"]}>
                                                <div className={styles['editmodal-left-contain']}>
                                                    <div className={styles['editmodal-left-top']}>
                                                        <h3>{t('Add Category')}</h3>
                                                        <span>{t('Upload image')}</span>
                                                        {/* <Image src={productImg} alt='product' /> */}
                                                    </div>
                                                    <div className={`${styles['editmodal-left-bot']} mt-52 w-[260px]`}>
                                                        <span>
                                                            Add your Category information
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles['editmodal-right-contain']}>
                                                    <div className={styles['mob-upload-text']}>
                                                        <span>{t('Upload your restaurants image')}</span>
                                                    </div>
                                                    <div className={styles['editmodal-right-top']}>
                                                        <button>
                                                            <Image src={uploadImg} alt="upload" />
                                                            {t('upload')}
                                                        </button>
                                                    </div>
                                                    <div className={styles['editmodal-right-bot']}>
                                                        <div className={styles['mob-restaurant-info']}>
                                                            <span>
                                                                {t('Add your Product description and necessary information')}
                                                            </span>
                                                        </div>
                                                        <form>
                                                            <div className={styles['product-name']}>
                                                                <label htmlFor="name">{t('Name')}</label>
                                                                <input type="text" id='price' placeholder={t('Category Name')} />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles['editmodal-bot']} pt-16`}>
                                                <button onClick={() => dispatch(closeCategoryModalEdit())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                                <button className={styles['edit-update']}>{t('Update Product')}</button>
                                            </div>
                                        </div>
                                        <div className={styles['close-contain']}>
                                            <button onClick={() => dispatch(closeCategoryModalEdit())} className={styles['close-btn']} >
                                                <Image src={closeBtn} alt="close-button" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                                : selOfferEditModal ?
                                    <div className={styles.overlay} >
                                        <div className={styles['show-editmodal']} data-aos="fade-left" data-aos-duration="500">

                                            <div className={styles['editmodal-head']}>
                                                <h3>{t('Add Offer')}</h3>
                                            </div>
                                            <div className={styles["editmodal-top"]}>
                                                <div className={styles['editmodal-left-contain']}>
                                                    <div className={styles['editmodal-left-top']}>
                                                        <h3>{t('Add Offer')}</h3>
                                                        <span>{t('Upload image')}</span>
                                                        {/* <Image src={productImg} alt='product' /> */}
                                                    </div>
                                                    <div className={`${styles['editmodal-left-bot']} mt-52 w-[260px]`}>
                                                        <span>
                                                            {t('Add your Offer information')}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles['editmodal-right-contain']}>
                                                    <div className={styles['mob-upload-text']}>
                                                        <span>{t('Upload your offer image')}</span>
                                                    </div>
                                                    <div className={styles['editmodal-right-top']}>
                                                        <button>
                                                            <Image src={uploadImg} alt="upload" />
                                                            {t('upload')}
                                                        </button>
                                                    </div>
                                                    <div className={styles['editmodal-right-bot']}>
                                                        <div className={styles['mob-restaurant-info']}>
                                                            <span>
                                                                {t('Add your Product description and necessary information')}
                                                            </span>
                                                        </div>
                                                        <form>
                                                            <div className={styles['product-name']}>
                                                                <label htmlFor="name">{t('Title')}</label>
                                                                <input type="text" id='price' placeholder='Title Name' />
                                                            </div>
                                                            <div className={styles['product-description']}>
                                                                <label htmlFor="description">{t('Description')}</label>
                                                                <textarea name="description" id={styles['desc']} placeholder={t('Description')}></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles['editmodal-bot']} pt-16`}>
                                                <button onClick={() => dispatch(closeOfferModalEdit())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                                <button className={styles['edit-update']}>{t('Update Product')}</button>
                                            </div>
                                        </div>
                                        <div className={styles['close-contain']}>
                                            <button onClick={() => dispatch(closeOfferModalEdit())} className={styles['close-btn']} >
                                                <Image src={closeBtn} alt="close-button" />
                                            </button>
                                        </div>
                                    </div>
                                    : ''
            }

        </>
    )
}

export default EditModal
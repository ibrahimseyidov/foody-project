'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from 'components/common/EditModal/editmodal.module.css'
import axios from 'axios'
import uploadImg from '../../../assets/icons/upload.svg'
import closeBtn from '../../../assets/icons/closeBtn.svg'
import { useSelector, useDispatch } from 'react-redux'
import { closeAddProductModal, closeAddResModal, closeCategoryModalEdit, closeModalEdit, closeOfferModalEdit, closeResModalEdit } from '../../../redux/features/editModalSlice'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import EditSelectBox from '../EditSelectBox/EditSelectBox'
import { useTranslation } from 'next-i18next'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { uuidGenerator } from '../../../utils/uuidGenerator'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { fileStorage } from '../../../server/configs/firebase'
import { handleRestName } from '../../../redux/features/restaurantSlice'
import { handleAllCategoryData } from '../../../redux/features/productSlice'

const EditModal = () => {

    const { t } = useTranslation('common')
    const queryClient = useQueryClient()

    const [addProductImg, setAddProductImg] = useState(null)
    const [isCurrentRest, setIsCurrentRest] = useState(null)
    const [lastProductImg, setLastProductImg] = useState(null)
    const [currentProductData, setCurrentProductData] = useState({
        "name": '',
        "description": '',
        "price": ''
    })

    const uptProductName = useRef()
    const uptProductPrice = useRef()
    const uptProductDesc = useRef()

    const productName = useRef()
    const productDesc = useRef()
    const productPrice = useRef()

    const productNameRef = productName.current
    const productDescRef = productDesc.current
    const productPriceRef = productPrice.current

    const uptProductNameRef = uptProductName.current
    const uptProductPriceRef = uptProductPrice.current
    const uptProductDescRef = uptProductDesc.current

    const selEditModal = useSelector((state) => state.modal.isActiveModal)
    const selAddProductModal = useSelector((state) => state.modal.isActiveAddProductModal)
    const selAddResModal = useSelector((state) => state.modal.isActiveAddResModal)
    const selResEditModal = useSelector((state) => state.modal.isActiveResModal)
    const selCategoryEditModal = useSelector((state) => state.modal.isActiveCategoryModal)
    const selOfferEditModal = useSelector((state) => state.modal.isActiveOfferModal)
    const selProductRestID = useSelector((state) => state.restaurant.isActiveRestID)
    const dispatch = useDispatch()

    const { mutate: addProduct } = useMutation({
        mutationFn: async () => await axios.post('/api/products', {
            "name": productNameRef.value,
            "description": productDescRef.value,
            "img_url": lastProductImg,
            "rest_id": selProductRestID,
            "price": productPriceRef.value
        }),

        onSuccess: () => {
            setAddProductImg(null)
            alert('success')
            queryClient.invalidateQueries(['products'])
        },
        onError: () => {
            alert('error')
        }
    })

    const { mutate: updateProduct } = useMutation({
        mutationFn: async () => await axios.put(`/api/products/${selEditModal.id}`, {
            "name": currentProductData.name,
            "description": currentProductData.description,
            "img_url": lastProductImg ? lastProductImg : selEditModal.img_url,
            "rest_id": selProductRestID ? selProductRestID : selEditModal.rest_id,
            "price": currentProductData.price
        }),
        onSuccess: () => {
            dispatch(closeModalEdit())
            setLastProductImg(null)
            setAddProductImg(null)
            alert('success')
            queryClient.invalidateQueries(['products'])
        },
        onError: () => {
            alert('error')
        }
    })

    const { mutate: addCategory } = useMutation({
        mutationFn: async () => await axios.post('/api/category', {
            "name": productDescRef.value,
            "slug": (productDescRef?.value).replace(/ /g, '-'),
            "img_url": lastProductImg,
        }),

        onSuccess: () => {
            setLastProductImg(null)
            alert('succes')
            queryClient.invalidateQueries(['category'])
        },
        onError: () => {
            alert('error')
        }
    })

    useEffect(() => {
        AOS.init()
        setCurrentProductData(selEditModal)
        const htmlEl = document.querySelector('html');
        if (selEditModal) {
            htmlEl.style.overflow = 'hidden';
        } else {
            htmlEl.style.overflow = 'auto';
        }
    }, [selEditModal])

    const handleNewProductImg = (e) => {
        const selectedFile = e.target.files[0]
        setAddProductImg(URL.createObjectURL(selectedFile))
        const newUUID = uuidGenerator()
        const imageRef = ref(fileStorage, `images/${selectedFile.name + newUUID}`)
        uploadBytes(imageRef, selectedFile)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((downloadURL) => {
                        setLastProductImg(downloadURL)
                        console.log("Dosyanın Firebase Storage URL'si: ", downloadURL);
                    })
                    .catch((error) => {
                        console.error("Download URL alınırken bir hata oluştu: ", error);
                    });
            })
            .catch((error) => {
                console.error("Dosya yüklenirken bir hata oluştu: ", error);
            });
    }

    const handleAddProduct = () => {
        addCategory()
        addProduct()
    }

    const handleUpdateProduct = () => {
        updateProduct()
    }

    const handleChangeProductName = (e) => {
        const updatedProductData = { ...currentProductData };
        updatedProductData.name = e.target.value;
        setCurrentProductData(updatedProductData)
    }

    const handleChangeProductDesc = (e) => {
        const updatedProductData = { ...currentProductData };
        updatedProductData.description = e.target.value;
        setCurrentProductData(updatedProductData)
    }

    const handleChangeProductPrice = (e) => {
        const updatedProductData = { ...currentProductData };
        updatedProductData.price = e.target.value;
        setCurrentProductData(updatedProductData)
    }

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
                                        {selEditModal.img_url && !addProductImg ? <Image src={selEditModal.img_url} width={200} height={200} alt='product' /> : <Image src={addProductImg} width={200} height={200} alt='product' />}
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
                                        <button className='flex flex-col items-center relative'>
                                            <Image src={uploadImg} alt="upload" />
                                            {t('upload')}
                                            <input onChange={(e) => handleNewProductImg(e)} className='absolute -top-4 w-[100px] h-[120px]' type="file" style={{ opacity: 0, cursor: 'pointer' }} />
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
                                                <input ref={uptProductName} type="text" id='price' onChange={(e) => handleChangeProductName(e)} value={currentProductData?.name} placeholder={t('Product Name')} />
                                            </div>
                                            <div className={styles['product-description']}>
                                                <label htmlFor="description">{t('Description')}</label>
                                                <textarea ref={uptProductDesc} name="description" onChange={(e) => handleChangeProductDesc(e)} value={currentProductData?.description} id={styles['desc']} placeholder={t('Description')}></textarea>
                                            </div>
                                            <div className={styles['product-price']}>
                                                <label htmlFor="price">{t('Price')}</label>
                                                <input ref={uptProductPrice} type="text" onChange={(e) => handleChangeProductPrice(e)} value={currentProductData?.price} id='price' placeholder={t('Price')} />
                                            </div>
                                            <div className={styles['product-selectbox']}>
                                                <label className={styles.restaurants} htmlFor="restaurants">{t('Restaurants')}</label>
                                                <EditSelectBox />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['editmodal-bot']}>
                                <button onClick={() => dispatch(closeModalEdit())} className={styles['edit-cancel']}>{t('Cancel')}</button>
                                <button onClick={() => handleUpdateProduct()} className={styles['edit-update']}>{t('Update Product')}</button>
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
                                    <h3>{t('Add Product')}</h3>
                                </div>
                                <div className={styles["editmodal-top"]}>
                                    <div className={styles['editmodal-left-contain']}>
                                        <div className={styles['editmodal-left-top']}>
                                            <h3>{t('Add Product')}</h3>
                                            <span>{t('Upload your product image')}</span>
                                            {addProductImg && <Image src={addProductImg} width={200} height={200} alt='product' />}
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
                                            <button className='flex flex-col items-center relative'>
                                                <Image src={uploadImg} alt="upload" />
                                                {t('upload')}
                                                <input onChange={(e) => handleNewProductImg(e)} className='absolute -top-4 w-[100px] h-[120px]' type="file" style={{ opacity: 0, cursor: 'pointer' }} />
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
                                                    <input ref={productName} type="text" id='price' placeholder={t('Product Name')} />
                                                </div>
                                                <div className={styles['product-description']}>
                                                    <label htmlFor="description">{t('Description')}</label>
                                                    <textarea ref={productDesc} name="description" id={styles['desc']} placeholder={t('Description')}></textarea>
                                                </div>
                                                <div className={styles['product-price']}>
                                                    <label htmlFor="price">{t('Price')}</label>
                                                    <input ref={productPrice} type="text" id='price' placeholder={t('Price')} />
                                                </div>
                                                <div className={styles['product-selectbox']}>
                                                    <label className={styles.restaurants} htmlFor="restaurants">{t('Restaurants')}</label>
                                                    <EditSelectBox />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => dispatch(closeAddProductModal())} className={styles['editmodal-bot']}>
                                    <button className={styles['edit-cancel']}>{t('Cancel')}</button>
                                    <button onClick={() => handleAddProduct()} className={styles['edit-update']}>{t('Add Product')}</button>
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
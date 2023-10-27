import styles from './userprofile.module.css'
import Image from 'next/image'
import React from 'react'
import uploadImg from '../../../assets/images/uploadImg.svg'
import { useTranslation } from 'next-i18next'

const UserProfile = ({addUser}) => {
    const { t } = useTranslation('common')

    return (
        <>
            <div className={styles['profile-bg']}>
                <h2 className={styles['profile-head']}>{t('Profile')}</h2>
                <div>
                    <form>
                        <div className={styles['upload-img']}>
                            <button className='mb-8'>
                                <Image src={uploadImg} alt='upload' />
                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-1/2 mr-14'>
                                <div className='flex flex-col'>
                                    <label className={styles['label']} htmlFor="contact">{t('Contact')}</label>
                                    <input className={styles['profile-inp']} placeholder='Enter number' type="text" id='contact' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className={styles['label']} htmlFor="username">{t('Username')}</label>
                                    <input className={styles['profile-inp']} placeholder='Enter username' type="text" id='username' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className={styles['label']} htmlFor="fullname">{t('Full Name')}</label>
                                    <input className={styles['profile-inp']} placeholder='Enter Full Name' type="text" id='fullname' />
                                </div>
                            </div>

                            <div className='w-1/2'>
                                <div className='flex flex-col'>
                                    <label className={styles['label']} htmlFor="contact">{t('Email')}</label>
                                    <input className={styles['profile-inp']} placeholder='Enter Email' type="email" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className={styles['label']} htmlFor="contact">{t('Address')}</label>
                                    <input className={styles['profile-inp']} placeholder='Enter Address' type="text" />
                                </div>
                                <button className={styles['save-btn']}>{t('Save')}</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default UserProfile
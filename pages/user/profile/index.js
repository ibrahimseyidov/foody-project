import Image from 'next/image'
import React from 'react'
import ProfileLayout from '../../../components/common/ProfileLayout/ProfileLayout'
import styles from './profile.module.css'
import uploadImg from '../../../assets/images/uploadImg.svg'

const index = () => {
    return (
        <>
            <ProfileLayout>
                <div className={styles['profile-bg']}>
                    <h2 className={styles['profile-head']}>Profile</h2>
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
                                        <label className={styles['label']} htmlFor="contact">Contact</label>
                                        <input className={styles['profile-inp']} placeholder='Enter number' type="text" id='contact' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className={styles['label']} htmlFor="username">Username</label>
                                        <input className={styles['profile-inp']} placeholder='Enter username' type="text" id='username' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className={styles['label']} htmlFor="fullname">Full Name</label>
                                        <input className={styles['profile-inp']} placeholder='Enter Full Name' type="text" id='fullname' />
                                    </div>
                                </div>

                                <div className='w-1/2'>
                                    <div className='flex flex-col'>
                                        <label className={styles['label']} htmlFor="contact">Email</label>
                                        <input className={styles['profile-inp']} placeholder='Enter Email' type="email" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className={styles['label']} htmlFor="contact">Address</label>
                                        <input className={styles['profile-inp']} placeholder='Enter Address' type="text" />
                                    </div>
                                    <button className={styles['save-btn']}>Save</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </ProfileLayout>
        </>
    )
}

export default index
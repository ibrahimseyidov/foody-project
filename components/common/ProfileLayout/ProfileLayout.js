import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ClientContainer from '../ClientContainer/ClientContainer'
import styles from './profilelayout.module.css'

import profile from '../../../assets/icons/profile.svg'
import basketIcon from '../../../assets/icons/basketIcon.svg'
import basket from '../../../assets/icons/basket.svg'
import { usePathname } from 'next/navigation'

const ProfileLayout = ({ children }) => {

    const pathname = usePathname()

    return (
        <ClientContainer>
            <section className='mt-4 mb-44'>
                <div className='flex'>
                    <div className={styles['profile-nav']}>
                        <nav>
                            <ul>
                                <li className='mb-3'>
                                    <Link className={pathname === '/user/profile' ? `${styles['nav-link']} ${styles['nav-active']}` : `${styles['nav-link']}`} href='/user/profile'>
                                        <Image className='mr-3' src={profile} alt='profile' />
                                        Profile
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className={pathname === '/user/user-basket' ? `${styles['nav-link']} ${styles['nav-active']}` : `${styles['nav-link']}`} href='/user/user-basket'>
                                        <Image className='mr-3' src={pathname === '/user/user-basket' ? basket : basketIcon} alt='basket-icon' />
                                        Your Basket
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className={pathname === '/user/user-orders' ? `${styles['nav-link']} ${styles['nav-active']}` : `${styles['nav-link']}`} href='/user/user-orders'>
                                        <Image className='mr-3' src={pathname === '/user/user-orders' ? basket : basketIcon} alt='basket-icon' />
                                        Your Orders
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className={pathname === '/user/user-checkout' ? `${styles['nav-link']} ${styles['nav-active']}` : `${styles['nav-link']}`}href='/user/user-checkout'>
                                        <Image className='mr-3' src={pathname === '/user/user-checkout' ? basket : basketIcon} alt='basket-icon' />
                                        Checkout
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className={`${styles['nav-link']}`} href='/'>
                                        <Image className='mr-3' src={basketIcon} alt='logout' />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {children}
                </div>

            </section>
        </ClientContainer >
    )
}

export default ProfileLayout
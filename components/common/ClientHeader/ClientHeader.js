import React from 'react'
import foodyLogo from '../../../assets/images/foodyClientLogo.svg'
import ukFlag from '../../../assets/icons/countryFlags/uk.svg'
import styles from '../ClientHeader/clientheader.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const ClientHeader = () => {
    const pathname = usePathname()

    return (
        <>
            <header className='mt-4' style={{ "background": "#F3F4F6", "border-radius": "4px" }}>
                <div className={styles['header-container']}>
                    <Link href='/'>
                        <Image src={foodyLogo} alt='foody-logo' />
                    </Link>
                    <nav className={styles['nav-container']}>
                        <li>
                            <Link href='/' className={pathname === '/' ? `${styles['link-bg']}` : `${styles['home-link']}`}>Home</Link>
                        </li>
                        <li>
                            <Link href='/restaurants' className={pathname === '/restaurants' ? `${styles['link-bg']}` : `${styles['home-link']}`}>Restaurants</Link>
                        </li>
                        <li>
                            <Link href='/about-us' className={pathname === '/about-us' ? `${styles['link-bg']}` : `${styles['home-link']}`}>About us</Link>
                        </li>
                        <li>
                            <Link href='/how-it-works' className={pathname === '/how-it-works' ? `${styles['link-bg']}` : `${styles['home-link']}`}>How it works</Link>
                        </li>
                        <li>
                            <Link href='/faqs' className={pathname === '/faqs' ? `${styles['link-bg']}` : `${styles['home-link']}`}>FAQs</Link>
                        </li>
                    </nav>
                    <div className={styles['header-right-container']}>
                        <input type="text" placeholder='Search' />
                        <Image src={ukFlag} alt='uk-flag' />
                        <Link href='/'>Sign Up</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ClientHeader


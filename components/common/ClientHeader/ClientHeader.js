import React from 'react'
import foodyLogo from '../../../assets/images/foodyClientLogo.svg'
import ukFlag from '../../../assets/icons/countryFlags/uk.svg'
import styles from '../ClientHeader/clientheader.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ClientHeader = () => {
    return (
        <>
            <header className='mt-4' style={{ "background": "#F3F4F6", "border-radius": "4px" }}>
                <div className={styles['header-container']}>
                    <Link href='/'>
                        <Image src={foodyLogo} alt='foody-logo' />
                    </Link>
                    <nav className={styles['nav-container']}>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Restuarants</Link>
                        </li>
                        <li>
                            <Link href='/'>About us</Link>
                        </li>
                        <li>
                            <Link href='/'>How it works</Link>
                        </li>
                        <li>
                            <Link href='/'>FAQs</Link>
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
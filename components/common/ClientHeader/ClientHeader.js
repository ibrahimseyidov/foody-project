'use client'
import React, { useEffect, useState } from 'react'
import foodyLogo from '../../../assets/images/foodyClientLogo.svg'
import ukFlag from '../../../assets/icons/countryFlags/uk.svg';
import azeFlag from '../../../assets/icons/countryFlags/azeFlag.png';
import turkeyFlag from '../../../assets/icons/countryFlags/turkeyFlag.png'
import styles from '../ClientHeader/clientheader.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { handleLangData } from '../../../redux/features/langSlice';

const ClientHeader = () => {
    const pathname = usePathname()
    const { t } = useTranslation('common')
    const router = useRouter()
    const currentQueryLocale = router.asPath
    const currentLocale = router.locale
    const [isShowLangContain, setIsShowLangContain] = useState(false)
    const [isCurrentLang, setIsCurrentLang] = useState('en')
console.log(currentQueryLocale);
    useEffect(() => {
        // dispatch(handleLangData(currentLocale))
        if (currentLocale) {
            setIsCurrentLang(currentLocale)
        } else if (currentQueryLocale) {
            setIsCurrentLang(currentQueryLocale)
        }
    }, [currentLocale, currentQueryLocale])

    const handlelangDropDown = () => {
        setIsShowLangContain(!isShowLangContain)
    }

    const handleChangeLang = (lang) => {
        localStorage.setItem("lang", lang);
        setIsShowLangContain(false)
        setIsCurrentLang(lang)
    }

    return (
        <>
            <header className='mt-4' style={{ "background": "#F3F4F6", "border-radius": "4px" }}>
                <div className={styles['header-container']}>
                    <Link href='/'>
                        <Image src={foodyLogo} alt='foody-logo' />
                    </Link>
                    <nav className={styles['nav-container']}>
                        <li>
                            <Link href='/' className={pathname === '/' ? `${styles['link-bg']}` : `${styles['home-link']}`}>{t('Home')}</Link>
                        </li>
                        <li>
                            <Link href='/restaurants' className={pathname === '/restaurants' ? `${styles['link-bg']}` : `${styles['home-link']}`}>{t('Restaurants')}</Link>
                        </li>
                        <li>
                            <Link href='/about-us' className={pathname === '/about-us' ? `${styles['link-bg']}` : `${styles['home-link']}`}>{t('About us')}</Link>
                        </li>
                        <li>
                            <Link href='/how-it-works' className={pathname === '/how-it-works' ? `${styles['link-bg']}` : `${styles['home-link']}`}>{t('How it works')}</Link>
                        </li>
                        <li>
                            <Link href='/faqs' className={pathname === '/faqs' ? `${styles['link-bg']}` : `${styles['home-link']}`}>{t('FAQs')}</Link>
                        </li>
                    </nav>

                    <div className={styles['header-right-container']}>
                        <div className={styles['search-inp']}>
                            <input type="text" placeholder={t('Search')} />
                        </div>
                        <div className='relative'>
                            <button onClick={() => handlelangDropDown()} className='w-10 mr-6' >
                                <Image src={isCurrentLang === 'en' ? ukFlag : isCurrentLang === 'tr' ? turkeyFlag : isCurrentLang === 'az' ? azeFlag : ''} alt='uk-flag' />
                            </button>
                            {isShowLangContain &&
                                <div className='absolute w-10 top-14 left-0 z-[9999]'>
                                    {isCurrentLang === 'en' ? <>
                                        <Link href='' locale='az' onClick={() => handleChangeLang('az')}>
                                            <Image src={azeFlag} alt='aze-flag' className='mb-2' />
                                        </Link>
                                        <Link href='' locale='tr' onClick={() => handleChangeLang('tr')}>
                                            <Image src={turkeyFlag} alt='turkey-flag' />
                                        </Link>
                                    </> : isCurrentLang === 'tr' ?
                                        <>
                                            <Link href='' locale='en' onClick={() => handleChangeLang('en')}>
                                                <Image src={ukFlag} alt='uk-flag' className='mb-2' />
                                            </Link>
                                            <Link href='' locale='az' onClick={() => handleChangeLang('az')}>
                                                <Image src={azeFlag} alt='aze-flag' />
                                            </Link>
                                        </>
                                        : isCurrentLang === 'az' ? <>
                                            <Link href='' locale='en' onClick={() => handleChangeLang('en')}>
                                                <Image src={ukFlag} alt='uk-flag' className='mb-2' />
                                            </Link>
                                            <Link href='' locale='tr' onClick={() => handleChangeLang('tr')}>
                                                <Image src={turkeyFlag} alt='turkey-flag' />
                                            </Link>
                                        </> : ''
                                    }
                                </div>
                            }
                        </div>
                        <div className={styles['signup-btn']}>
                            <Link href='/'>{t('Sign Up')}</Link>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default ClientHeader


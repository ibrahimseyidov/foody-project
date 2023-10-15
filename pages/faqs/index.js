'use client'
import React, { useEffect, useState } from 'react'
import ClientContainer from '../../components/common/ClientContainer/ClientContainer'
import styles from './faq.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const [isOpenedMenu, setIsOpenedMenu] = useState()

    const handleFAQMenu = (faqName) => {
        setIsOpenedMenu(faqName)
    }

    const handleFAQCloseMenu = (faqName) => {
        setIsOpenedMenu(faqName)
    }

    return (
        <>
            <ClientContainer>
                <section className='mt-20 mx-48 mb-72' data-aos='fade-up'>
                    <div className='flex justify-center'>
                        <h2 className={styles.faq}>F.A.Q</h2>
                    </div>
                    <div>
                        <div className={styles['faq-card-container']}>
                            <div className={styles['faq-card']}>
                                <span>How to contact with Customer Service?</span>
                                {isOpenedMenu === 'service' && isOpenedMenu !== 'service-close' ?
                                    <button onClick={() => handleFAQCloseMenu('service-close')}>
                                        -
                                    </button>
                                    :
                                    <button onClick={() => handleFAQMenu('service')}>
                                        +
                                    </button>
                                }
                            </div>
                            {isOpenedMenu === 'service' &&
                                <div className={styles['faq-para']}>
                                    <p>
                                        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles['faq-card-container']}>
                            <div className={styles['faq-card']}>
                                <span>App installation failed, how to update system information?</span>
                                {isOpenedMenu === 'information' && isOpenedMenu !== 'information-close' ?
                                    <button onClick={() => handleFAQCloseMenu('information-close')}>
                                        -
                                    </button>
                                    :
                                    <button onClick={() => handleFAQMenu('information')}>
                                        +
                                    </button>
                                }
                            </div>
                            {isOpenedMenu === 'information' &&
                                <div className={styles['faq-para']}>
                                    <p>
                                        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles['faq-card-container']}>
                            <div className={styles['faq-card']}>
                                <span>Website reponse taking time, how to improve?</span>
                                {isOpenedMenu === 'improve' && isOpenedMenu !== 'improve-close' ?
                                    <button onClick={() => handleFAQCloseMenu('improve-close')}>
                                        -
                                    </button>
                                    :
                                    <button onClick={() => handleFAQMenu('improve')}>
                                        +
                                    </button>
                                }
                            </div>
                            {isOpenedMenu === 'improve' &&
                                <div className={styles['faq-para']}>
                                    <p>
                                        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles['faq-card-container']}>
                            <div className={styles['faq-card']}>
                                <span>How do I create a account?</span>
                                {isOpenedMenu === 'account' && isOpenedMenu !== 'account-close' ?
                                    <button onClick={() => handleFAQCloseMenu('account-close')}>
                                        -
                                    </button>
                                    :
                                    <button onClick={() => handleFAQMenu('account')}>
                                        +
                                    </button>
                                }
                            </div>
                            {isOpenedMenu === 'account' &&
                                <div className={styles['faq-para']}>
                                    <p>
                                        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles['faq-card-container']}>
                            <div className={styles['faq-card']}>
                                <span>Website reponse taking time, how to improve?</span>
                                {isOpenedMenu === 'website' && isOpenedMenu !== 'website-close' ?
                                    <button onClick={() => handleFAQCloseMenu('website-close')}>
                                        -
                                    </button>
                                    :
                                    <button onClick={() => handleFAQMenu('website')}>
                                        +
                                    </button>
                                }
                            </div>
                            {isOpenedMenu === 'website' &&
                                <div className={styles['faq-para']}>
                                    <p>
                                        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>

                </section>
            </ClientContainer>
        </>
    )
}

export default index
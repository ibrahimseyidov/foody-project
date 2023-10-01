import React from 'react'
import styles from '../Header/header.module.css'
import ukFlag from '../../../src/assets/icons/countryFlags/uk.svg';
import azeFlag from '../../../src/assets/icons/countryFlags/azeFlag.png';
import turkeyFlag from '../../../src/assets/icons/countryFlags/turkeyFlag.png';
import logo from '../../../src/assets/icons/logo.svg'
import plusBtn from "../../../src/assets/icons/plusBtn.svg"
import mobPlusBtn from '../../../src/assets/icons/mobPlusBtn.svg'
import admin from '../../../src/assets/icons/admin.svg'
import hamburger from '../../../src/assets/icons/hamburger.svg'
import dashboard from '../../../src/assets/icons/navIcons/dashIcon.svg';
import products from '../../../src/assets/icons/navIcons/storeIcon.svg';
import restaurants from '../../../src/assets/icons/navIcons/restaurant.svg';
import category from '../../../src/assets/icons/navIcons/category.svg'
import orders from '../../../src/assets/icons/navIcons/orders.svg';
import offer from '../../../src/assets/icons/navIcons/offer.svg';
import logout from '../../../src/assets/icons/navIcons/logout.svg';
import mobFoodyLogo from '../../../src/assets/icons/mobFoodyLogo.svg';
import leftArrow from '../../../src/assets/icons/leftArrow.svg';
import Image from 'next/image'

const Header = () => {

    return (
        <div>
            <header>
                <div className={styles['header-bg']}>
                    <div className={styles['header-left']}>
                        <button onClick={() => openHamMenu()} className={styles['ham-menu']}>
                            <Image src={hamburger} alt="hamburger-menu" />
                        </button>
                        <a>
                            <Image src={logo} alt='logo' />
                        </a>
                    </div>

                    <div className={styles['header-right-container']}>

                        <div className={styles['header-right-first']}>
                            <button className={styles['add-product-btn']}>
                                <Image src={plusBtn} alt='plus-button' />
                                Add Product
                            </button>

                            <button className={styles['add-product-mob-btn']}>
                                <Image src={mobPlusBtn} alt='mobile-plus-button' />
                            </button>
                        </div>

                        <div className={styles['header-right-second']}>

                            <button className={styles['language-btn']}>
                                <Image src={turkeyFlag} alt='uk-flag' />
                            </button>
                            <div className={styles['show-flag-area']}>
                                <button
                                    className={styles['language-btn']}>
                                    <Image src={ukFlag} alt='uk-flag' />
                                </button>

                                <button className={styles['language-btn']}>
                                    <Image src={azeFlag} alt='aze-flag' />
                                </button>
                                <button className={styles['language-btn']}>
                                    <Image src={turkeyFlag} alt='turkey-flag' />
                                </button>
                            </div>


                        </div>

                        <div className={styles['header-right-third']}>
                            <Image src={admin} alt='userimage' />
                            <span>Admin</span>
                        </div>

                    </div>

                </div>

                <div className={styles['navbar-container']}>

                    <div className={styles['logo-head']}>
                        <button onClick={() => closeHamMenu()}>
                            <Image src={leftArrow} alt="left-arrow" />
                        </button>
                        <Image src={mobFoodyLogo} alt="foody-logo" />
                    </div>

                    <nav>
                        <ul className={styles['mob-navbar-contain']}>
                            <li>
                                <a to='/dashboard' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={dashboard} alt='dashboard' />
                                    Dashboard
                                </a>
                            </li>

                            <li>
                                <a to='/products' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={products} alt='products' />
                                    Products
                                </a>
                            </li>

                            <li>
                                <a to='/restaurants' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={restaurants} alt='restaurants' />
                                    Restaurants
                                </a>
                            </li>

                            <li>
                                <a to='/category' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={category} alt='category' />
                                    Category
                                </a>
                            </li>

                            <li>
                                <a to='/orders' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={orders} alt='orders' />
                                    Orders
                                </a>
                            </li>

                            <li>
                                <a to='/offer' id={styles['mob-navbar']} className={({ isActive }) => isActive ? styles['active'] : ''}>
                                    <Image src={offer} alt='offer' />
                                    Offer
                                </a>
                            </li>

                            <li>
                                <a to='/logout' id={styles['mob-navbar']} className={styles['mob-navbar-last']}>
                                    <Image src={logout} alt='logout' />
                                    Logout
                                </a>
                            </li>

                        </ul>

                    </nav>

                </div>

            </header>
        </div>
    )
}

export default Header
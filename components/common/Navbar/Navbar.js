import React from 'react'
import styles from '../Navbar/navbar.module.css'
import dashboard from '../../../assets/icons/navIcons/dashIcon.svg';
import products from '../../../assets/icons/navIcons/storeIcon.svg';
import restaurants from '../../../assets/icons/navIcons/restaurant.svg';
import category from '../../../assets/icons/navIcons/category.svg'
import orders from '../../../assets/icons/navIcons/orders.svg';
import offer from '../../../assets/icons/navIcons/offer.svg';
import history from '../../../assets/icons/navIcons/history.png'
import logout from '../../../assets/icons/navIcons/logout.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const pathname = usePathname()

    return (
        <>

            <nav>

                <div className={styles['navbar-container']}>

                    <ul>

                        <li>
                            <Link href='/admin/dashboard' id={styles['navbar']} className={pathname === '/admin/dashboard' ? `${styles['active']}` : ''}>
                                <Image src={dashboard} alt='dashboard' />
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/products' id={styles['navbar']} className={pathname === '/admin/products' ? `${styles['active']}` : ''}>
                                <Image src={products} alt='products' />
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/restaurants' id={styles['navbar']} className={pathname === '/admin/restaurants' ? `${styles['active']}` : ''}>
                                <Image src={restaurants} alt='restaurants' />
                                Restaurants
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/category' id={styles['navbar']} className={pathname === '/admin/category' ? `${styles['active']}` : ''}>
                                <Image src={category} alt='category' />
                                Category
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/orders' id={styles['navbar']} className={pathname === '/admin/orders' ? `${styles['active']}` : ''}>
                                <Image src={orders} alt='orders' />
                                Orders
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/order-history' id={styles['navbar']} className={pathname === '/admin/order-history' ? `${styles['active']}` : ''}>
                                <Image src={history} alt='offer' />
                                History
                            </Link>
                        </li>

                        <li>
                            <Link href='/admin/offers' id={styles['navbar']} className={pathname === '/admin/offers' ? `${styles['active']}` : ''}>
                                <Image src={offer} alt='offer' />
                                Offer
                            </Link>
                        </li>

                        <li>
                            <Link href='/' id={styles['navbar']} className={styles['navbar-last']}>
                                <Image src={logout} alt='logout' />
                                Logout
                            </Link>
                        </li>

                    </ul>

                </div>

            </nav>

        </>
    )
}

export default Navbar
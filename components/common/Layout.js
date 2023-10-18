'use client'
import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'
import EditModal from './EditModal/EditModal'
import Dashboard from '../Dashboard/Dashboard'
import { usePathname } from 'next/navigation'

const Layout = ({ children }) => {
    const pathname = usePathname()
    return (
        <>
            <div className='px-4' style={{ backgroundColor: '#1E1E30', 'min-height': '100vh' }}>
                <Header />
                <main className='flex'>
                    <Navbar />
                    {pathname === '/admin' &&
                        <Dashboard />
                    }
                    <EditModal />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
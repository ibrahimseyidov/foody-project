import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'
import EditModal from './EditModal/EditModal'

const Layout = ({ children, t}) => {

    return (
        <>
            <div className='px-4' style={{ backgroundColor: '#1E1E30', 'min-height': '100vh' }}>
                <Header />
                <main className='flex'>
                    <Navbar t={t} />
                    <EditModal />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
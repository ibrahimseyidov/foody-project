import React from 'react'

const Footer = () => {

    return (
        <footer className='bg-black text-white px-36'>
            <div className='flex justify-between px-12 pt-24'>
                <div>
                    <div className='font-bold text-2xl mb-2'>Foody.</div>
                    <div className='font-semibold text-xl text-stone-500 w-3/4'>Lorem ipsum is placeholder text commonly used in the graphic,</div>
                </div>
                <div className='flex w-1/2 justify-between'>
                    <ul className='text-stone-600 text-lg'>
                        <li className='text-xl font-bold text-white mb-2'>Popular</li>
                        <li>Programming</li>
                        <li>Books for children</li>
                        <li>Psychology</li>
                        <li>Business</li>
                    </ul>
                    <ul className='text-stone-600 text-lg'>
                        <li className='text-xl font-bold text-white mb-2'>Cash</li>
                        <li>Delivery</li>
                        <li>Payment</li>
                        <li>About the store</li>
                    </ul>
                    <ul className='text-stone-600 text-lg'>
                        <li className='text-xl font-bold text-white mb-2'>Help</li>
                        <li>Contacts</li>
                        <li>Purchase returns</li>
                        <li>Buyer help</li>
                    </ul>
                </div>
            </div>
            <div class="w-full bg-black pt-20 pb-4 text-center text-white">
                All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy
            </div>
        </footer>
    )
}

export default Footer
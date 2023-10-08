import React from 'react'
import ClientContainer from '../../components/common/ClientContainer/ClientContainer'
import ClientHeader from '../../components/common/ClientHeader/ClientHeader'
import Footer from '../../components/common/Footer/Footer'
import Image from 'next/image'
import image from '../../assets/images/about.png'

const index = () => {
    return (
        <>
            <ClientContainer>
                <ClientHeader />
                <div className='px-56 py-28'>
                    <div className='font-bold text-3xl text-center mb-6'>How it works</div>
                    <div className='text-center text-base'>Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.</div>
                    <div className='flex justify-center mt-6'>
                        <Image
                          src={image}
                          width={500}
                          height={500}
                          alt="Picture of the curier"
                        />
                    </div>
                </div>
                <Footer />
            </ClientContainer>
        </>
    )
}

export default index
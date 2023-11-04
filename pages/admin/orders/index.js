import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'

import AdminOrders from '../../../components/AdminOrders/AdminOrders'
import DelModal from '../../../components/common/DelModal/DelModal'
import ShowOrderModal from '../../../components/ShowOrderModal/ShowOrderModal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
import EditModal from '../../../components/common/EditModal/EditModal'
import OrderType from '../../../components/common/Order/OrderType'

const index = () => {
    const { t } = useTranslation('common')

    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                   <OrderType pageName={"Orders"}/>
                    <AdminOrders />
                    <ShowOrderModal />
                    <DelModal />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }

});
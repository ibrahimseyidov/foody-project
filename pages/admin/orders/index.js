import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminOrders from '../../../components/AdminOrders/AdminOrders'
import DelModal from '../../../components/common/DelModal/DelModal'
import ShowOrderModal from '../../../components/ShowOrderModal/ShowOrderModal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'

const index = () => {
    const { t } = useTranslation('common')

    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={t('Orders')} />
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
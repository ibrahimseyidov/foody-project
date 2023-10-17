import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminOrders from '../../../components/AdminOrders/AdminOrders'
import DelModal from '../../../components/common/DelModal/DelModal'
import ShowOrderModal from '../../../components/ShowOrderModal/ShowOrderModal'

const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={'Orders'} />
                    <AdminOrders />
                    <ShowOrderModal />
                    <DelModal />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index
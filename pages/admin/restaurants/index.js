import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import ResCategoryType from '../../../components/Restaurants/ResCategoryType/ResCategoryType'
import RestaurantItems from '../../../components/Restaurants/RestaurantItems'
import EditModal from '../../../components/common/EditModal/EditModal'
import DelModal from '../../../components/common/DelModal/DelModal'

const Restaurants = () => {
    return (
        <AdminDashboard>
            <ProductContainer>
                <ResCategoryType pageName={'Restaurants'} />
                <RestaurantItems />
                <DelModal />
                <EditModal />
            </ProductContainer>
        </AdminDashboard>
    )
}

export default Restaurants
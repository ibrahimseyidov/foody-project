import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import ResCategoryType from '../../../components/Restaurants/ResCategoryType/ResCategoryType'
import RestaurantItems from '../../../components/Restaurants/RestaurantItems'

const Restaurants = () => {
    return (
        <AdminDashboard>
            <ProductContainer>
                <ResCategoryType />
                <RestaurantItems />
            </ProductContainer>
        </AdminDashboard>
    )
}

export default Restaurants
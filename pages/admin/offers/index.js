import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminOffers from '../../../components/AdminOffers/AdminOffers'

const index = () => {
  return (
    <>
      <AdminDashboard>
        <ProductContainer>
          <CategoryType pageName={'Offers'} />
          <AdminOffers />
        </ProductContainer>
      </AdminDashboard>
    </>
  )
}

export default index
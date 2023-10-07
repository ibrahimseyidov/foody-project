import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import ProductItems from '../../../components/Products/ProductItems/ProductItems'

const Products = () => {
  return (
    <AdminDashboard>
      <ProductContainer>
        <CategoryType />
        <ProductItems />
      </ProductContainer>
    </AdminDashboard>
  )
}

export default Products
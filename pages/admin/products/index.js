import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../components/Products/ProductsContainer'

const Products = () => {
  return (
    <AdminDashboard>
      <ProductContainer>
        Product
      </ProductContainer>
    </AdminDashboard>
  )
}

export default Products
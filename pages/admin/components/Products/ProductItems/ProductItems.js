import React from 'react'
import ProductItem from '../ProductItems/ProductItem/ProductItem'
import ProductItemsContainer from '../../../components/common/ProductItemsContainer/ProductsItemsContainer'

const ProductItems = () => {

    return (
        <>
            <ProductItemsContainer>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </ProductItemsContainer>
        </>
    )
}

export default ProductItems
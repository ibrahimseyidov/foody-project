import React from 'react'
import styles from '../CategoryType/categorytype.module.css'
// import SelectBox from '../../common/Selectbox/Selectbox'

const CategoryType = ({pageName}) => {
    return (

        <>
            <div className={styles['category-type-bg']}>
                <div className='flex max-md:flex-col justify-between items-center py-5 px-7'>
                    <div className='max-md:mb-4'>
                        <h2 className={styles['products-head-text']}>{pageName}</h2>
                    </div>
                    <div>
                        {/* <SelectBox /> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default CategoryType
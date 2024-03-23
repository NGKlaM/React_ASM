import React from 'react'
import Productcard from '../components/Productcard'
import PopularProducts from '../components/PopularProducts'

type Props = {}

const Product = (props: Props) => {
  return (
    <>
    <div className="container mt-20 mb-20">
    <PopularProducts/>
    </div>
    </>
    
  )
}

export default Product
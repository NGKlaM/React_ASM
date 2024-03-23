import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Productcard = (props: Props) => {
  const [status, setStatus] = useState(true)
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${(page - 1) * 9}&limit=9`)
      .then((res) => res.json()).then((data) => {
        setProduct(data.products);
      });
  }, [page])
  return (
    <>
      <div className="w-11/12 m-auto">
        <div className="title flex justify-between">
          <div className="section ">
            <h1 className='text-[48px] leading-120 font-bold'>Featured Products</h1>
            <p className='text-[18px] leading-150'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className=''>
            <button className="mt-11 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-[16px] px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View all</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 ml-20 justify-center mt-20 ">
          {products.map((products: any) => {
            return (
              <div className="box p-3 w-[304px] h-[424] ">
                <div>
                <Link to={'/details/'+products.id}><img className='w-full h-[200px] object-cover' src={products.thumbnail} alt={products.title} /></Link>
                </div>
                <div className="content flex justify-between">
                  <div>
                    <p className='font-semibold leading-150 text-[18px]'>{products.title}</p>
                    <span className='leading-150 text-[14px]'>Bed table</span>
                  </div>
                  <div>
                    <p className='font-semibold leading-150'>{products.price}</p>
                  </div>
                </div>
                <div>
                  <button className="mt-11 w-full text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-[16px] px-5 py-2.5 me-4 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Productcard
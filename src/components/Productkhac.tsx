import React, { useEffect, useState } from 'react'

type Props = {}

function Productkhac({}: Props) {
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
    <h1 className='text-[48px] font-bold leading-120 ml-8'>Other Products</h1>
    <div className="grid grid-cols-3 gap-10 ml-20 justify-center mt-20 ">
          {products.map((products: any) => {
            return (
              <div className="box p-3 w-[304px] h-[424] ">
                <div>
                  <img className='w-full h-[200px] object-cover' src={products.thumbnail} alt="" />
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
    </>
  )
}

export default Productkhac
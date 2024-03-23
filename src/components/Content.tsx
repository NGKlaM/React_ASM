import React from 'react'

type Props = {}

const Content = (props: Props) => {
  return (
    <>
    <div className="mt-24 flex justify-center ">
        <div className="content mx-20 leading-120 text-[56px]">
            <p>Transform Your Home with Our Stunning</p>
            <span className='font-bold'>Furniture Collection</span>
        </div>
        <div className="column w-[696px] h-[200] mx-20">
            <p className='text-[18px] leading-150 my-6'>Welcome to our furniture store, where we believe that a well-furnished home is a happy home. We offer a wide selection of high-quality furniture for every room in your home, from cozy sofas and elegant dining sets to stylish office desks and comfortable beds.</p>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Shop Now</button>
            <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Shop Now</button>
           
        </div>

    </div>
    </>
  )
}

export default Content
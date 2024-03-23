import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faSync, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import IProduct from '../interface/product';

type Props = {};

function DetailProduct({ }: Props) {
  const params: any = useParams();
  const [products, setProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const id: number = params.id;
    // Lấy chi tiết sản phẩm
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });

    // Lấy sản phẩm liên quan
    fetch(`https://dummyjson.com/products/related/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data);
      });
  }, [params.id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${products?.title} to cart`);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className='flex justify-center items-center mt-20'>
        <div className='flex gap-2 p-4'>
          <div className='box p-3 w-[304px] h-[424]'>
            <img className='w-[121px] h-[114px] object-cover p-2' src={products?.images[0]} alt='' />
            <img className='w-[121px] h-[114px] object-cover p-2' src={products?.images[1]} alt='' />
            <img className='w-[121px] h-[114px] object-cover p-2' src={products?.images[2]} alt='' />
            <img className='w-[121px] h-[114px] object-cover p-2' src={products?.images[3]} alt='' />
          </div>
          <div className='w-[500px] h-[600px] flex justify-center items-center'>
            <img className='object-cover' src={products?.thumbnail} alt='' />
          </div>
        </div>
        <div className='w-[399px] mb-[px]'>
          <p className='text-[24px] line-height-24 font-bold'>{products?.title}</p>
          <div className='my-4'>
            <div className='flex gap-1 my-4'>
              <div className=''>
                <a className='text-yellow-300' href=''>
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a className='text-yellow-300' href=''>
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a className='text-yellow-300' href=''>
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a className='text-yellow-300' href=''>
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a className='text-gray-300' href=''>
                  <FontAwesomeIcon icon={faStar} />
                </a>
              </div>
              <p className='ml-2'>(150 reviews)</p>
              <span className='border-l pl-2 ml-2 text-green-500'>In Stock</span>
            </div>
            <p>${products?.price}</p>
            <p className='text-[14px] line-height-21 my-4'>{products?.description}</p>
            <hr className='bg-black h-0.5 my-4' />

            {/* Nút để thêm và bớt số lượng sản phẩm */}
            <div className='flex items-center'>
              <button onClick={handleDecreaseQuantity} className='px-3 py-1 bg-gray-200 text-gray-600 rounded-l'>
                -
              </button>
              <span className='px-3 py-1 bg-gray-100'>{quantity}</span>
              <button onClick={handleIncreaseQuantity} className='px-3 py-1 bg-red-600 text-gray-200 rounded-r'>
                +
              </button>
              <button onClick={handleAddToCart} className='ml-4 px-4 py-1 bg-red-600 text-white rounded-md'>
                Add to Cart
              </button>
              <div className="flex items-center justify-center h-8 w-8  bg-gray-400 px-4 mx-4">
                <FontAwesomeIcon className='text-white  stroke-current stroke-2' icon={faHeart} />
              </div>
            </div>
            <div className='border-2 border-gray-400 w-[399px] h-[180px] my-20 py-10'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex gap-10 items-center'>
                  <FontAwesomeIcon className='text-gray-500 w-[40px] h-[40px]' icon={faTruckFast} />
                  <div className=''>
                    <p className='text-[16px] font-medium'>Free Delivery</p>
                    <span className='text-[12px] font-medium'>Enter your postal code for Delivery Availability</span>
                  </div>
                </div>
                <hr className='bg-black h-0.5 w-full ' />
                <div className='flex gap-10 items-center'>
                  <FontAwesomeIcon icon={faSync} className="text-gray-500 w-[40px] h-[40px]" />
                  <div>
                    <p className='text-[16px] font-medium'>Free Delivery</p>
                    <span className='text-[12px] font-medium'>Enter your postal code for Delivery Availability</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default DetailProduct;

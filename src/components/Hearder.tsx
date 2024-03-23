import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faEnvelope, faGlobe, faHeart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

type Props = {}

const Hearder = (props: Props) => {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Hàm xử lý sự kiện khi người dùng thay đổi ngôn ngữ
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    // Thực hiện các hành động khác khi ngôn ngữ được chọn thay đổi
  };

  return (
    <>
      {/* nav in put */}
      <nav className="navbar bg-gradient-to-r from-rose-100 to-teal-100 navbar-light hidden lg:flex" id="templatemo_nav_top">
        <div className="container text-light">
          <div className="w-full flex gap-80 py-1 justify-around">
            <div className='items-center py-1'>
              <FontAwesomeIcon icon={faEnvelope} className="mx-2  text-gray-600  hover:text-gray-300" />
              <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
              <FontAwesomeIcon icon={faPhone} className="mx-2  text-gray-600  hover:text-gray-300" />
              <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
            </div>
            <div className='flex gap-10 mx-1 justify-center '>
              <div className='py-1'>
                <a className="text-light  text-gray-600  hover:text-gray-300" href="https://www.facebook.com/lam.ngk.3/" target="_blank" rel="sponsored"><FontAwesomeIcon icon={faFacebookF} className="fa-sm fa-fw me-2" /></a>
                <a className="text-light  text-gray-600  hover:text-gray-300" href="https://www.instagram.com/nguyen_lam2002/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="fa-sm fa-fw me-2" /></a>
                <a className="text-light  text-gray-600  hover:text-gray-300" href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} className="fa-sm fa-fw me-2" /></a>
                <a className="text-light  text-gray-600  hover:text-gray-300" href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-sm fa-fw" /></a>
              </div>
              <div className='flex gap-5 justify-center'>
                <div className="flex items-center">
                  <label htmlFor="languageSelect" className="inline-block py-1 w-8 h-8 text-gray-600  hover:text-gray-300">
                    <FontAwesomeIcon className="text-base" icon={faGlobe} />
                  </label>
                  <select
                    id="languageSelect"
                    value={selectedLanguage}
                    onChange={handleChange}
                    className="block bg-gradient-to-r from-rose-100 to-teal-100 navbar-light hidden lg:flex w-full py-1 px-1 border border-gray-100 rounded-md focus:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    {/* Thêm các tùy chọn khác nếu cần */}
                  </select>
                </div>
                <div className="">
                  <a href='#' className="inline-flex items-center gap-2 p-1 ">
                    <FontAwesomeIcon className=' text-gray-600  hover:text-gray-300' icon={faUser} />
                    <p>Sign in</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* end  */}
      <hr />
      {/* nav menu */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div>
            <a href="#" className="flex items-center">
              <img
                src="https://cdn.dribbble.com/userupload/8955213/file/original-9d8be45d1ac4ff578cbb9c3a7c3d35fc.jpg?crop=0x0-8533x6400&resize=400x300&vertical=center"
                className="h-5 -scroll-mr-30"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ddsgnr
              </span>
            </a>
          </div>
          <div className="items-center w-full md:flex md:w-auto gap-5" id="navbar-search" >
            <div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li >
                  <NavLink className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={'#'}>Services</NavLink>
                </li>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={'/product'}>Products</NavLink>
                </li>
                <li>
                  <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={'#'}>About Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex md:order-2 gap-5">
              <div className="relative hidden md:block py-2">
                <div className="absolute py-3 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-2'>
                <ul className='flex space-x-8 text-[14px]'>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faCartShopping} className="text-gray-500 hover:text-gray-300 text-xl mb-0" />
                      <span>Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faHeart} className="text-gray-500 hover:text-gray-300 text-xl mb-0" />
                      <span>Like</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faBell} className="text-gray-500 hover:text-gray-300 text-xl mb-0" />
                      <span>Notification</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className='flex gap-1 justify-end'> */}
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Hearder
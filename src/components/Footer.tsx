import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                <div className="container py-12 mb-20 w-11/12 m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
                        <div>
                            <h2 className="text-2xl mb-4">Ddsgnr</h2>
                            <ul className="list-unstyled">
                                <li className="flex items-center mb-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    <span className='text-gray-800  hover:text-white'>123 Consectetur at ligula 10660</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    <a className='text-gray-800  hover:text-white' href="tel:010-020-0340">010-020-0340</a>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    <a className='text-gray-800  hover:text-white' href="mailto:info@company.com">info@company.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl mb-4">Products</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-gray-800 hover:text-white">Luxury</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Sport Wear</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Men's Shoes</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Women's Shoes</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Popular Dress</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Gym Accessories</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Sport Shoes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl mb-4">Further Info</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-gray-800 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Shop Locations</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">FAQs</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-white">Contact</a></li>
                            </ul>
                            <div>
                            <label htmlFor="subscribeEmail" className="sr-only">Email address</label>
                            <div className="flex mt-2">
                                <input type="text" id="subscribeEmail" placeholder="Email address" className="bg-gray-300 border border-gray-600 py-2 px-4 rounded-l-md focus:outline-none" />
                                <div className="bg-green-500 text-gray-100 py-2 px-4 rounded-r-md cursor-pointer">Subscribe</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bg-gradient-to-r from-rose-100 to-teal-100 py-3">
                    <div className='flex justify-between w-11/12 m-auto'>
                    <div className="container">
                        <p className="text-gray-800 text-start">Copyright © 2021 Company Name | Designed by <a href="https://templatemo.com" target="_blank" rel="sponsored" className="text-green-400">TemplateMo</a></p>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="http://facebook.com/" target="_blank" className="text-gray-500 hover:text-white rounded-full p-2">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" className="text-gray-500 hover:text-white rounded-full p-2">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" className="text-gray-500 hover:text-white rounded-full p-2">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" className="text-gray-500 hover:text-white rounded-full p-2">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
import React from 'react'
import Hearder from '../components/Hearder'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Client = (props: Props) => {
  return (
    <>
    <Hearder/>
    <main>
       <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Client
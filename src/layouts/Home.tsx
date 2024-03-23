import React from 'react'
import Content from '../components/Content'
import Baner from '../components/Baner'
import Productcard from '../components/Productcard'
import Bannercontent from '../components/Bannercontent'
import PopularProducts from '../components/PopularProducts'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Content/>
  <Baner/>
  <Productcard/>
  <Bannercontent/>
  <PopularProducts/>
    </>
  )
}

export default Home
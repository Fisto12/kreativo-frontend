import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Business from '../components/Business'
import Categories from '../components/Categories'
import Explore from '../components/Explore'
import Header from '../components/Header'
import Popular from '../components/Popular'

const Home = () => {
  return (
  <>
   <Header/>
   <Banner/>
   <Popular/>
   <About/>
   <Explore/>
   <Business/>
   <Categories/>
  </>
  )
}

export default Home
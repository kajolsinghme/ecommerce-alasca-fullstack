import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
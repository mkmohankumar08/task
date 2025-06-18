import Aboutus from '@/components/Aboutus'
import Blog from '@/components/Blog'
import Business from '@/components/Business'
import Consulting from '@/components/Consalting'
import Contactus from '@/components/Contactus'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import HeroBanner1 from '@/components/HeroBanner1'
import Homepage from '@/components/Homepage'
import Navbar from '@/components/Navbar'
import Ourteam from '@/components/Ourteam'
import Projects from '@/components/Projects'
import SecondNavbar from '@/components/SecondNavbar'
import Sections from '@/components/Sections'
import Services from '@/components/Services'
import Swipper from '@/components/Swipper'

import React from 'react'
import RotatingCircle from './RotatingCircle'

const index = () => {
  return (
    <div>
      <Navbar/>
      <nav className='sticky top-0 overflow-x-hidden z-50'>
              <SecondNavbar/>

      </nav>
      <Homepage/>
      <Drawer/>
      <Aboutus/>
      <Services/>
      <Consulting/>
      <Sections/>
      <Projects/>
      <HeroBanner1/>
      <Ourteam/>
      <Business/>
      <Swipper/>
      <Blog/>
      <Contactus/>
      <Footer/>
      {/* <RotatingCircle/> */}

    </div>
  )
}
  
export default index

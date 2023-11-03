import React from 'react'
import Advert from '../Advert/Advert'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Advert/>
        <Navigation/>
        <main className='min-h-[90vh]'>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
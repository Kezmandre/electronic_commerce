import React from 'react'
import Advert from '../Advert/Advert'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
     

        <Advert/>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
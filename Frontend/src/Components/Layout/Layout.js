import React from 'react'
import Advert from '../Advert/Advert'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Layout = ({children}) => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

        <Advert/>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
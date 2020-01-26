import React from "react"
import Navbar from "../Navbar/Navbar.component"
import Footer from "../Footer/Footer.component"
import "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

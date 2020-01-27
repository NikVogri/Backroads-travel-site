import React from "react"
import Navbar from "../Navbar/Navbar.component.jsx"
import Footer from "../Footer/Footer.component.jsx"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout

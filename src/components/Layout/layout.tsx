import React from 'react'
import { Outlet } from 'react-router'
import Footer from './footer'
import Header from './header'
type Props = {}

const LayoutWeb = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
        </header>
          <Outlet />
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default LayoutWeb
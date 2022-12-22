import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
    children : any
}

const LayoutAdmin = (props: Props) => {
  return (
    <>
        <Header />
        <div>{props.children}</div>
        <Footer />
    </>
  )
}

export default LayoutAdmin
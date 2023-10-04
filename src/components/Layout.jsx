import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>
            <Header />
        </div>

        <main>
            <Outlet />
        </main>

        {/* <footer>
            footer
        </footer> */}
    </>
  )
}

export default Layout
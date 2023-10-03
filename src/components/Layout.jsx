import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div>
            <Header />
        </div>

        <main>
            <Outlet />
        </main>

        {/* <footer>
            footer
        </footer> */}
    </div>
  )
}

export default Layout
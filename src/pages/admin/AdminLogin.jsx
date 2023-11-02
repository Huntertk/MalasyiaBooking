import React from 'react'
import '../../styles/adminLogin.scss'
import bgImg from '../../assets/images/adminLogin.jpg'

const AdminLogin = () => {
  return (
    <main className='mainContainer' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="loginFormWrapper">
            <form>
                <h1>Admin Login</h1>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <button>login</button>
            </form>
        </div>
    </main>
  )
}

export default AdminLogin
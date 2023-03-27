import React from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import './Home.css'
import { Profile } from './Profile/Profile'
export const Home = ()=> {
  return (
    <div className='home-container'>
         <Header />
        <Profile />
        <Footer />
    </div>
  )
}

import React from 'react'
import { Footer } from './Footer/Footer'
import './Home.css'
import { Profile } from './Profile/Profile'
export const Home = ()=> {
  return (
    <div className='home-container'>
        <Profile />
        <Footer />
    </div>
  )
}

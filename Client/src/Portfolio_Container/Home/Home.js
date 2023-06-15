import React from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import './Home.css'
import { Profile } from './Profile/Profile'
export const Home = (props)=> {
  return (
    <div className='home-container' id={props.id || ""}>
        <Header />
        <Profile />
        <Footer />
    </div>
  )
}

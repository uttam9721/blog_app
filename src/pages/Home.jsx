import React from 'react'
import MainSection from '../components/Mainsection'
import Navbar from '../components/Navbar'
import BlogSection from '../components/BlogSection'
const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Navbar />
      <MainSection/>
      <BlogSection />
    </div>
  )
}

export default Home

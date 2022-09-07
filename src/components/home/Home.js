import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='text-container'>
        <h1>Welcome to<br/> Books Bay bookstore</h1>
        <p className='grey'>With us you can shop online<br/> and save on high street costs<br/> at the same time.</p>
        <button className='explore'>Explore books &#8594;</button>
      </div>
      <img className='home-img' src='https://cdn.britannica.com/92/216092-050-4B31C2B7/custom-library.jpg' alt='store' />
    </div>
  )
}

export default Home
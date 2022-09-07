import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='home'>
        <div className='text-container'>
          <h1>Welcome to<br/> Books Bay bookstore</h1>
          <p className='grey'>With us you can shop online<br/> and save on high street costs<br/> at the same time.</p>
          <button className='explore'>Explore books &#8594;</button>
        </div>
        <img className='home-img' src='https://cdn.britannica.com/92/216092-050-4B31C2B7/custom-library.jpg' alt='store' />
      </div>
      <div className='footer'>
        <div>
          <h3>Shipping</h3>
          <p className='grey'>Country wide delivery</p>
        </div>
        <div>
          <h3>Best price</h3>
          <p className='grey'>Best price with best <br/> quality</p>
        </div>
        <div>
          <h3>Authors</h3>
          <p className='grey'>Best Kenyan Novelists</p>
        </div>
      </div>
    </div>
  )
}

export default Home
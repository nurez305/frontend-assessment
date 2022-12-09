import React from 'react'
import Banner from '../../src/Asset/Rectangle 5.svg'
import './header.css'

function header() {
  return (
    <nav>
        <div className='header_bg'>
            <span>MyTestApp</span>
        </div>
        <div className='banner'>
            <img src={Banner} alt="" />
            <h1>Watch something incredible.</h1>
        </div>
    </nav>
  )
}

export default header
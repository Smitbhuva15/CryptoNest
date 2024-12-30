import React from 'react'
import { Link } from 'react-router-dom'
// import { Button, Menu, Typography, Avatar } from 'antd';

const Footer = () => {
  return (
    <div  className='cryptofooter'>
      
      © 2024 CryptoNest, All Rights Reserved <br/>
        Created by Smit.tech <br/>
        <span>
          <Link to='/' className='ml-5'>Home</Link>
          <Link to='/exchanges' className='ml-5'>Exchanges</Link>
          <Link to='/cryptocurrencies' className='ml-5'>CryptoCurrency</Link>
          <Link to='/news' className='ml-5'>News</Link>


        </span>
      
    </div>
  )
}

export default Footer
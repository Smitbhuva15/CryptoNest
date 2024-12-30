
import './App.css'
import React from 'react';
import {Route,Link, Outlet} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

function App() {
 

  return (
    <>
     <div className='app'>
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='main routes'>
       <Outlet />
      </div>
     </div>
     <Footer className='footer'/>
    </>
  )
}

export default App

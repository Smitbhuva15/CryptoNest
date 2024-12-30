import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const NavBar = () => {
  
  const [screenSize, setScreenSize] = useState(window.innerWidth); 
  const [activeMenu, setActiveMenu] = useState(true); 
   
  const handelClose=()=>{
    setActiveMenu(!activeMenu);
  }
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    
   
    window.addEventListener('resize', handleResize);
    
   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false); 
    } else {
      setActiveMenu(true); 
    }
  }, [screenSize]); 

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src="cryptocurrency.png" size="large" />
        
        <Typography.Title level={2} className="logo">
          <Link className="logo" to="/">CryptoNest</Link>
        </Typography.Title>
         <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>

      {/* Show the menu only if activeMenu is true */}
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item   icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item   icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item  icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item   icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;

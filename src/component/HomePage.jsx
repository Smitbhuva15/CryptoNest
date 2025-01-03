import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
// import News from './News';
import News from './news';


import Loader from './Loader';



const { Title } = Typography;
const HomePage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log(globalStats)
  // console.log(data)

  // const total=globalStats.total;


  if (isFetching) return <Loader />;


  return (
    <>
      <div>
        <Title level={2} className='heading' >Global CrypTo Stats</Title>

        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={globalStats.
            totalExchanges} /></Col>
          <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)
          } /></Col>
        </Row>
      
      </div>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified="10" />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News  simplified="9"/>

    </>
  )
}

export default HomePage
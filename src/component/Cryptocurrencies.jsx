import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({ simplified }) => {

  const count = simplified === "10" ? 10 : 50;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState('');

  // Local state to store filtered cryptos
  const [cryptos, setCryptos] = useState([]);

  const serachCrypto = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (cryptosList?.data?.coins) {
      setCryptos(cryptosList.data.coins);
    }
  }, [cryptosList]); // This effect runs only when cryptosList changes


  const searchCrypto = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredCryptos = cryptos.filter((currency) =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Display the loader while fetching
  if (isFetching) return <Loader />;

  return (
    <>
      {
        simplified === "10"
          ?
          (<></>)
          : (
            <div className="container">
              <input type="text" className="input-field" placeholder='Search Crypto...' value={searchTerm} onChange={serachCrypto} />
            </div>
          )
      }





      <Row gutter={[32, 32]} className="crypto-card-container">
        {




          filteredCryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >

              {/* Note: Change currency.id to currency.uuid  */}
              <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
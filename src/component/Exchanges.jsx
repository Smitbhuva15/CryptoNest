
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Loader from './Loader';
import { useGetCryptoNewExchangesQuery } from '../services/cryptoExchangesApi';
import { ExchangesFeching } from '../../Axios/AxiosApi';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
 
  const [exchangesData, setExchangesData] = useState([]);

  const getExchangesData = async () => {
    try {
      const data = await ExchangesFeching();
      setExchangesData(data?.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  if (!exchangesData) {
    return <Loader />
  }

  useEffect(() => {
    getExchangesData();
  }, []);


  return (
    <>
      <Row className='mb-5'>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Country</Col>
        <Col span={6}>Year Established
        </Col>
      </Row>
      {exchangesData.map((exchange, index) => (
        <Col span={24}>
          <Collapse>
            <Panel
              key={exchange.uuid}
              showArrow={false}
              header={(
                <Row key={exchange.id}>
                  <Col span={6}>
                    <Text><strong>{index+1}.</strong></Text>
                    <Avatar className="exchange-image" src={exchange.image} />
                    <Text><strong>{exchange.name}</strong></Text>
                  </Col>
                  <Col span={6}>${millify(exchange.trade_volume_24h_btc)}</Col>
                  <Col span={6}>{millify(exchange.country)}</Col>
                  <Col span={6}>{(exchange.year_established)}</Col>
                </Row>
              )}
            >
              {HTMLReactParser(exchange.description || '')}
            </Panel>
          </Collapse>
        </Col>

      ))}

    </>
  )
}

export default Exchanges
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';
import Loader from './Loader';
import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
const { Text, Title } = Typography;
const { Option } = Select;


const news = ({ simplified }) => {
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  // const [crypoNews, setCrypoNews] = useState([]);?
  const count = simplified === "9" ? 10 : 50;
  const newsCategory = 'cryptocurrency'

  const { data: crypoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count });
  if (isFetching) return <Loader />
  // console.log(crypoNews.articles)



  return (
    //    <Row gutter={[24, 24]}>
    //  {crypoNews.articles.map((news, i) => (
    //         <Col xs={24} sm={12} lg={8} key={i}>
    //           <Card hoverable className="news-card">
    //             <a href={news.url} target="_blank" rel="noreferrer">
    //               <div className="news-image-container">
    //                 <Title className="news-title" level={4}>{news.author}</Title>
    //                 <img src={news?.urlToImage || demoImage} alt="" />
    //               </div>
    //               {/* <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p> */}
    //               {/* <div className="provider-container">
    //                 <div>
    //                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
    //                   <Text className="provider-name">{news.provider[0]?.name}</Text>
    //                 </div>
    //                 <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
    //               </div> */}
    //             </a>
    //           </Card>
    //         </Col>
    //       ))}

    //    </Row>
    <Row gutter={[24, 24]}>
      {crypoNews.articles.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title news-desc" level={4}>{news.title}</Title>
                <div>
                  <img src={news?.urlToImage || demoImage} alt="" className='imgset' />

                </div>
              </div>
              <div className='mydescription' >
                <p>
                  {news.description && news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description || 'No description available'}
                </p>
              </div>



              <div className="provider-container">
                <div>
                  <Text className="provider-name">Source : {news.source.name}</Text>
                </div>
              </div>
              <button type="button" className="read-more-btn">Read More..</button>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default news
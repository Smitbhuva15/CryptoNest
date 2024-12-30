import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { useParams } from 'react-router-dom';
import Loader from './Loader';

import { PostFeching } from '../../Axios/AxiosApi';

// Register necessary chart components for Chart.js v3+
ChartJS.register(
  CategoryScale, 
  LinearScale,    
  PointElement,   
  LineElement,    
  Title,         
  Tooltip,        
  Legend          
);

const { Title: AntTitle } = Typography;

const LineChart = ({ timeperiod,currentPrice, coinName }) => {
 
    const { coinId } = useParams();
    
    const lowerCoinName = coinName.toLowerCase();
    const [coinHistory, setCoinHistory] = useState([]);
  
   
    const fetchCryptoHistory = async () => {
      try {
    
        const url = `https://api.coingecko.com/api/v3/coins/${lowerCoinName}/market_chart?vs_currency=usd&days=${timeperiod}`;
        const response = await fetch(url);
        const data = await response.json();
        setCoinHistory(data);
      } catch (error) {
        console.error('Error fetching crypto history:', error);
        <p>{error}</p>
      }
    };
    
    useEffect(() => {
     
      fetchCryptoHistory();
    }, [lowerCoinName, timeperiod]);
 


  
  const coinPrice = [];
  const coinTimestamp = [];

     if(coinHistory?.prices){
      for (let i = 0; i < coinHistory?.prices.length; i++) {
        coinPrice.push(coinHistory?.prices[i][1]);
        // console.log(coinHistory?.prices[i][1])
        coinTimestamp.push(new Date(coinHistory?.prices[i][0]).toLocaleDateString());
      }
     }
     else{
      return <Loader />
     }
    



  
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Set to true or false based on your preference
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`; // Format y-axis values as currency
          },
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">

      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;

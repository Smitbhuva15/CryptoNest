import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
});


export const PostFeching = (coinId, timeperiod) => {
    return Api.get(`coins/${coinId}/market_chart?vs_currency=usd&days=${timeperiod}`);
}

export const ExchangesFeching = () => {
    return Api.get(`exchanges`);
}


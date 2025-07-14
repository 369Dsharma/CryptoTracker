import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header/index.jsx';
import Loader from '../components/Common/Loader/index.jsx';
import { CoinObject } from '../functions/convertObject.jsx';
import List from '../components/Dashboard/List/index.jsx';
import CoinInfo from '../components/Coin/CoinInfo/index.jsx';
import { getCoinData } from '../functions/getCoinData.jsx';
import { getCoinPrices } from '../functions/getCoinPrices.jsx';
import LineChart from '../components/Coin/LineChart/index.jsx';
import { convertDate } from '../functions/convertDate.jsx';
import SelectDays from '../components/Coin/SelectDays/index.jsx';
import settingChartData from '../functions/settingChartData.jsx';
import TogglePriceType from '../components/Coin/PriceType/index.jsx';

const CoinPage = () => {
    const { id } = useParams();
    const [isLoading , setIsLoading] = useState(true);
    const [coinData , setCoinData] = useState();
    const [days , setDays] = useState(60);
    const [ChartData , setChartData] = useState({});
    const [priceType, setPriceType] = useState('prices');


    useEffect(()=>{
        if(id){
            getData();   
        }
    } , [id]);

    async function  getData()
    {
        const data = await getCoinData(id);

        if(data)
        {
            CoinObject(setCoinData , data);
            const prices = await getCoinPrices(id , days , priceType);
            if(prices.length > 0)
            {
                settingChartData(setChartData , prices);
                setIsLoading(false);
            }
        }
    }

  const handleDaysChange = async(event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id , event.target.value , priceType);
            if(prices.length > 0)
            {
                settingChartData(setChartData , prices);
                setIsLoading(false);
            }
  };

  const handlePriceTypeChange = async(event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    try {
        const prices = await getCoinPrices(id, days, newType);
        if (prices && prices.length > 0) {
            settingChartData(setChartData, prices);
        }
    } catch (error) {
        console.error("Error fetching coin prices:", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
       { isLoading ? 
           ( <Loader />) : 
            
           ( 
                <>
                    <div className='grey-wrapper' style={{padding : "0rem 1rem"}}>
                        <List coin = {coinData} />
                    </div>

                    <div className='grey-wrapper'>
                        <SelectDays days = {days} handleDaysChange={handleDaysChange} />

                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />

                        <LineChart chartData = {ChartData} priceType={priceType}/>
                    </div>
    
                    <CoinInfo heading={coinData.name} desc={coinData.desc} />
                </>
            )
       }
    </div>
  );
}

export default CoinPage;

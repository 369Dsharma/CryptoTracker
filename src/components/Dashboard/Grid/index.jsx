import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

const Grid = ({coin}) => {
  const priceChange = coin.price_change_percentage_24h ?? 0;
  const currentPrice = coin.current_price ?? 0;
  const totalVolume = coin.total_volume ?? 0;
  const marketCap = coin.market_cap ?? 0;
  return (
   <Link to={`/coin/${coin.id}`}>

     <div
        className={`grid ${priceChange < 0 && "grid-red"}`}
      >
        <div className="img-flex">
          <img src={coin.image} className="coin-image" />
          <div className="icon-flex">
            <div className="info-flex">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
           
          </div>
        </div>
        {priceChange >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {priceChange.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {priceChange.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        {priceChange >= 0 ? (
          <p className="current-price">
            ${currentPrice.toLocaleString()}
          </p>
        ) : (
          <p className="current-price-red">
            ${currentPrice.toLocaleString()}
          </p>
        )}
        <p className="coin-name coin-color">
          Total Volume : {totalVolume.toLocaleString()}
        </p>
        <p className="coin-name coin-color">
          Market Capital : ${marketCap.toLocaleString()}
        </p>
      </div>
   
   
   </Link>
  )
}

export default Grid

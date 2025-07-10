import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

const Grid = ({coin}) => {
  return (
    <div className={`grid-container ${
        coin.price_change_perbcentage_24h < 0 && "grid-container-red"
    }`}>

      
      <div className='info-flex'>
        <img src={coin.image} alt='coin-img' className='coin-logo'/>
        <div className='name-col'>
          <p className='coin-symbol'>
           { coin.symbol}
          </p>

          <p className='coin-name'>
              {coin.name}
          </p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className='price-change'>
            <p className='coin-price-green'>{coin.price_change_percentage_24h.toFixed(2)} %</p>

            <div className='trending-icon-green'>
                <TrendingUpRoundedIcon />
            </div>
        </div>

      ) : (
        <div className='price-change'>
            <p className='coin-price-red'>{coin.price_change_percentage_24h.toFixed(2)} %</p>

            <div className='trending-icon-red'>
              <TrendingDownRoundedIcon />  
            </div>
        </div>
      )}

     


      <div className='info-container'>

        <h3
           className='coin-current-price' 
           style={{
            color :
             coin.price_change_percentage_24h < 0 
             ? "var(--red)" 
             : "var(--green)",
            }}
        >

        ${coin.current_price.toLocaleString()}

        </h3>


        <p className='total_volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>

        <p className='market_cap'>Market Cap : ${coin.market_cap.toLocaleString()}</p>

      </div>

    </div>
  )
}

export default Grid

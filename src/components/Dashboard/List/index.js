import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { convertNumbers } from '../../../functions/convertNumbers';

const List = ({coin}) => {
  return (
    <tr className= {`list-row ${coin.price_change_percentage_24h < 0 && "list-row-red" }`}>
        <Tooltip title = "Coin Logo" placement="bottom-start" >
          <td className='td-image'>
            <img src={coin.image} alt='coin-img' className='coin-logo'/>
          </td>
        </Tooltip>

        <Tooltip title = "Coin Info" placement="bottom-start">
            <td>
              <div className='name-col'>
                  <p className='coin-symbol'>
                    {coin.symbol}
                  </p>

                  <p className='coin-name'>
                      {coin.name}
                  </p>
              </div>
        
            </td>
        </Tooltip>

      

      <Tooltip title = "Price Change in 24Hrs" placement="bottom-start">

            {coin.price_change_percentage_24h > 0 ? (
              <td className='price-change'>
                  <p className='coin-price-green'>{coin.price_change_percentage_24h.toFixed(2)} %</p>

                  <div className='trending-icon-green td-icon'>
                      <TrendingUpRoundedIcon />
                  </div>
              </td>

              ) : (
                <td className='price-change'>
                    <p className='coin-price-red'>{coin.price_change_percentage_24h.toFixed(2)} %</p>

                    <div className='trending-icon-red td-icon'>
                      <TrendingDownRoundedIcon />  
                    </div>
                </td>
              )}

      </Tooltip>

      <Tooltip title= "Current Price" >
        <td className='info-container'>

          <h3
            className='coin-current-price td-center-align' 
            style={{
              color :
              coin.price_change_percentage_24h < 0 
              ? "var(--red)" 
              : "var(--green)",
              }}
          >

          ${coin.current_price.toLocaleString()}

          </h3>

        </td>

      </Tooltip>

       <Tooltip title = "Total Volume" placement="bottom-end">
          <td className='volume_td'>
            <p className='total_volume td-right-align td-total-volume'>{coin.total_volume.toLocaleString()}</p>
          </td>
       </Tooltip>

      <Tooltip title = "Market Cap" placement="bottom-end">
        <td className='desktop-td-mkt market_td'>
        <p className='market_cap td-right-align'>${coin.market_cap.toLocaleString()}</p>

        </td>
      </Tooltip>


      {/* for mobile screens */}

       <Tooltip title = "Market Cap" placement="bottom-end">
        <td className='mobile-td-mkt'>
        <p className='market_cap td-right-align'>
          ${convertNumbers(coin.market_cap)}
          </p>

        </td>
      </Tooltip>

    </tr>
  )
}

export default List





import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { convertNumbers } from '../../../functions/convertNumbers.jsx';
import { Link } from 'react-router-dom';

const List = ({coin}) => {
  const priceChange = coin.price_change_percentage_24h ?? 0;
  const currentPrice = coin.current_price ?? 0;
  const totalVolume = coin.total_volume ?? 0;
  const marketCap = coin.market_cap ?? 0;
  return (
    <Link to={`/coin/${coin.id}`} >
     <tr className="list-row" >
        <Tooltip title="Coin Image">
          <td className="td-img">
            <img src={coin.image} className="coin-image coin-image-td" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-info">
            <div className="info-flex">
              <p className="coin-symbol td-p">{coin.symbol}</p>
              <p className="coin-name td-p">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
          {priceChange >= 0 ? (
            <td>
              <div className="chip-flex">
                <div className="price-chip">
                  {priceChange.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon">
                  <TrendingUpRoundedIcon />
                </div>
              </div>
            </td>
          ) : (
            <td>
              <div className="chip-flex">
                <div className="price-chip red">
                  {priceChange.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon red">
                  <TrendingDownRoundedIcon />
                </div>
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          {priceChange >= 0 ? (
            <td className="current-price  td-current-price">
              ${currentPrice.toLocaleString()}
            </td>
          ) : (
            <td className="current-price-red td-current-price">
              ${currentPrice.toLocaleString()}
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="coin-name td-totalVolume">
            {totalVolume.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="coin-name td-marketCap">
            ${marketCap.toLocaleString()}
          </td>
        </Tooltip>
        <td className="coin-name mobile">${convertNumbers(marketCap)}</td>

    </tr>

    </Link>
  )
}

export default List





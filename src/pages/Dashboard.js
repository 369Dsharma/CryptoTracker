import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from "axios"
import Search from '../components/Dashboard/Search'
const DashboardPage = () => {

  const [ coins , setCoins] = useState([]);

  const[search , setSearch] = useState('');

   const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  var filteredCoins = coins.filter( 
    (item)=>

     item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())

  );

  useEffect(()=>{
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((response)=>{
      console.log("response >>>" , response);
      setCoins(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });

  } , []);
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange}  />
      <TabsComponent coins = {filteredCoins}/>
    </div>
  )
}

export default DashboardPage

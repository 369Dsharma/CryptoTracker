import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from "axios"
import Search from '../components/Dashboard/Search'
import PaginationControlled from '../components/Dashboard/Pagination'
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
const DashboardPage = () => {

  const [ coins , setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[search , setSearch] = useState('');

  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

   useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  };


   const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  var filteredCoins = coins.filter( 
    (item)=>

     item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())

  );
  
  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };
  return (
    <div>
       <Header />
       <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} handleChange={onSearchChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationControlled
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  )
}

export default DashboardPage


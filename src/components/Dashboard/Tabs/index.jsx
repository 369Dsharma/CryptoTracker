import React , { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './styles.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '../Grid/index.jsx';
import List from '../List/index.jsx';


export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette : {
      primary : {
        main : "#3a80e9",
      },
    },
  });

  const style = {
    color : "var(--white)",
    width : "50vw",
    fontSize : "1.2rem",
    fontWeight : 600,
    fontFamily : "Inter",
    textTransform : "capitalize",
  }

  return (
    <ThemeProvider theme={theme} >

      <TabContext value={value}>

          <TabList onChange={handleChange} variant="fullWidth">

            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style} />

          </TabList>

        <TabPanel value="grid">
          <div className='grid-flex'>
              {coins.map((coin,i)=>{
              return (
                // <div key = {i}>
                //     <img src={item.image}  alt='crypto-coin-image'/>
                //     <p >
                //     {i+1}.{item.name}
                // </p>
                // </div>
              <Grid  coin = { coin } key={i}/>
              );
            })}

          </div>
        </TabPanel>
        
        <TabPanel value="list">
          <table className='list-table'>
            {coins.map((coin, i)=>{
              return (

                <List coin = {coin} key={i}  />
              );
            })}

          </table>
        </TabPanel>
      </TabContext>
      
    </ThemeProvider>
  );
}

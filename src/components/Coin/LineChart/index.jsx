import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumbers } from '../../../functions/convertNumbers.jsx';

const LineChart = ({ chartData,PriceType, multiAxis }) => {
   const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          // include a dollar sign in the ticks
          callback : function(value , index , ticks){
            if(PriceType === "prices") 
              {
                return "$" + value.toLocaleString();
              }
            else{
                 return "$" + convertNumbers(value);
            }
          },
        },
      },
    },
  };

  return (
    <Line data={chartData} options={options} />
    );
};

export default LineChart;

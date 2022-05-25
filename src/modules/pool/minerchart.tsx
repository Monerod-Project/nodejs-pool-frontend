import React, {useState, useEffect} from 'react';
import useSWR from "swr";
import axios from "axios";
import {apiUrl, abbreviateNumber} from "../../modules/utils";
import Cookies from "js-cookie";
import Moment from "react-moment";
import moment from "moment-timezone";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
//import 'chartjs-adapter-date-fns';
//import {enGB} from 'date-fns/locale';

const MinerChart = () => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const api = {
    //Miner Hashrate
    minerHash: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/chart/hashrate/allWorkers", fetcher, {refreshInterval: 1000 * 60}),
  }

  const time = api.minerHash.data?.global?.filter(obj => obj.ts >= moment().valueOf() - 86400000).map(obj => moment(obj.ts).local().format('h:mma'));
  const hash = api.minerHash.data?.global?.map(x => x.hs)
  
  const getMovingAverage = (hash = []) => {
    const result = [];
    let sum = 0;
    let count = 0;
    for(let i = 0; i < hash.length; i++){
        const num = hash[i];
        sum += num;
        count++;
        const curr = sum / count;
        result[i] = curr;
    };
    return result;
  };

  const data = {
    labels: time,
    datasets: [
      {
        type: 'line',
        label: 'Your Average Hashrate',
        data: getMovingAverage(hash),
        borderColor: 'rgb(191, 149, 249)',
        //fill: "start",
        reverse: true,
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
        },
      {
        type: 'line',
        label: 'Your Current Hashrate',
        data: hash,
        borderColor: "#36a2eb",
        //backgroundColor: "#36a2eb",
        fill: "start",
        reverse: true,
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };
  
  const options = {
    responsiveAnimationDuration: 0,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        reverse: false,
        grid: {
          display: true,
        },
        ticks: {
          callback: function (value) {
            return abbreviateNumber(value);
          }
        }
      },
      x: {
        reverse: true,
        grid: {
          display: true,
        },
        ticks:{
          display: true,
          autoSkip: true,
          maxTicksLimit: 24,
        },
      }
    },
    hover: {
      mode: 'index',
      intersect: false,
      animationDuration: 0,
    },
    animation: {
      duration: 0,
    },
	}

  return(
    <>
      <Chart data={data} options={options} />
    </>
  )
};

export default MinerChart;
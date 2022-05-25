import React, {useState, useEffect} from 'react';
import useSWR from "swr";
import axios from "axios";
import {apiUrl, abbreviateNumber} from "../../modules/utils";
import Moment from "react-moment";
import moment from "moment-timezone";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const DashChart = () => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const api = {
    //Pool Hashrate
    poolHash: useSWR(apiUrl + "pool/chart/hashrate", fetcher, {refreshInterval: 1000 * 60}),
    //Pool Miners
    poolMiners: useSWR(apiUrl + "pool/chart/miners", fetcher, {refreshInterval: 1000 * 60}),
    //Pool Blocks
    poolBlocks: useSWR(apiUrl + "pool/blocks", fetcher, {refreshInterval: 1000 * 60}),
  }

  const time = api.poolHash.data?.filter(obj => obj.ts >= moment().valueOf() - 86400000).map(obj => moment(obj.ts).local().format('h:mma'));
  const hash = api.poolHash.data?.map(x => x.hs)
  const miners = api.poolMiners.data?.map(x => x.cn)

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
        label: 'Pool Average Hashrate',
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
        label: 'Pool Current Hashrate',
        data: hash,
        borderColor: "#570df8",
        fill: "start",
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
      /*{
        type: 'line',
        label: 'Connected Accounts',
        data: miners,
        borderColor: "#3A8B9C",
        //fill: "start",
        pointStyle: "circle",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
      {
        type: 'scatter',
        label: 'Pool Blocks',
        data: api.poolBlocks.data?.map(x => x.height),
        borderColor: 'rgb(54, 162, 235)',
      },*/
    ],
  };
  
  const options = {
    responsiveAnimationDuration: 0,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        fontColor: 'white',
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

export default DashChart;